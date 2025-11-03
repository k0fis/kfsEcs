package kfs.ecs.tetis;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.comp.Color;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.Tetris;
import kfs.ecs.tetris.comp.ShapeInt;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;

public class RenderTty implements SystemBase {

    static final String ESC = "\u001b[";

    private String ttyConfig = "";
    private final Tetris tetris;
    private final int width;
    private final int height;

    public RenderTty(Tetris tetris, int width, int height) {
        this.tetris = tetris;
        this.width = width;
        this.height = height;
        enableRawMode();
        Runtime.getRuntime().addShutdownHook(new Thread(this::restoreMode));
    }

    @Override
    public void update() {
        System.out.print(ESC + "2J"); // clear screen
        System.out.print(ESC + "?25l"); // hide cursor

        System.out.print(ESC + "H");

        StringBuilder sb = new StringBuilder();
        char block = '\u2588'; // full block
        String[][] frame = new String[height][width];
        for (int y=0;y<height;y++) for (int x=0;x<width;x++) if (tetris.grid()[x][y]==1) frame[y][x] = fgColor("gray");

        for (Entity e : tetris.world().getEntitiesWith(PositionInt.class, ShapeInt.class, Color.class)) {
            PositionInt pos = tetris.world().getComponent(e, PositionInt.class);
            ShapeInt shape = tetris.world().getComponent(e, ShapeInt.class);
            Color color = tetris.world().getComponent(e, Color.class);

            for (int r=0;r<shape.shape.length;r++) for (int c=0;c<shape.shape[r].length;c++){
                if (shape.shape[r][c] == 1) {
                    int gx = pos.x + c;
                    int gy = pos.y + r;
                    if (gx>=0 && gx<width && gy>=0 && gy<height) {
                        // active blocks have different color id encoding (use same)
                        frame[gy][gx] =  fgColor(color.color);
                    }
                }
            }
        }

        for (int y=0;y<height;y++) {
            sb.append(fgColor("gray")).append("|");
            for (int x=0;x<width;x++) {
                if (frame[y][x] == null) {
                    sb.append(fgColor("black")).append(" ");
                } else {
                    sb.append(fgColor(frame[x][y])).append(block);
                }
            }
            sb.append(fgColor("gray")).append("|\n");
        }
        sb.append(fgColor("black")).append(" ").append(fgColor("gray"));
        for (int i=0;i<width;i++) sb.append("--");
        sb.append(" \n").append(ESC + "0m");
        System.out.print(sb);
        System.out.flush();

        if (tetris.isGameOver()) {
            System.out.print(ESC + "H"); // move cursor home
            System.out.print(ESC + "m");
            System.out.println("\n\n   GAME OVER.!");
            restoreMode();
            System.exit(0);
        }
    }

    @Override
    public void done() {
        restoreMode();
    }

    void enableRawMode() {
        try {
            if (System.getProperty("os.name").toLowerCase().contains("win")) {
                return;
            }
            // save current config
            ttyConfig = exec(new String[]{"/bin/sh","-c","stty -g < /dev/tty"});
            // set raw: disable echo, canonical mode
            exec(new String[]{"/bin/sh","-c","stty raw -echo -icanon min 1 < /dev/tty"});
        } catch (Exception e) {
            // ignore
        }
    }

    void restoreMode() {
        try {
            if (ttyConfig != null && !ttyConfig.isEmpty() && !System.getProperty("os.name").toLowerCase().contains("win")) {
                exec(new String[]{"/bin/sh","-c","stty " + ttyConfig + " < /dev/tty"});
                System.out.print(ESC + "0m");
                System.out.print(ESC + "?25h");
            }
        } catch (Exception e) {
            // ignore
        }
    }

    static String exec(String[] cmd) throws Exception {
        Process p = Runtime.getRuntime().exec(cmd);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        InputStream is = p.getInputStream();
        int b;
        while ((b = is.read()) != -1) baos.write(b);
        p.waitFor();
        return baos.toString().trim();
    }

    static String fgColor(String color) {
        // id 1..7 -> standard colors
        return switch (color) {
            case "red" -> ESC + "31m"; // red
            case "green" -> ESC + "32m"; // green
            case "yellow" -> ESC + "33m"; // yellow
            case "blue" -> ESC + "34m"; // blue
            case "magenta" -> ESC + "35m"; // magenta
            case "cyan" -> ESC + "36m"; // cyan
            case "orange" -> ESC + "209m"; // orange
            case "white" -> ESC + "97m"; // white
            case "gray" -> ESC + "07m"; // white
            case "black" -> ESC + "30m";
            default -> ESC + "0m";
        };
    }
}
