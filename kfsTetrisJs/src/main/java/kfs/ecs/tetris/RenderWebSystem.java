package kfs.ecs.tetris;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Color;
import kfs.ecs.base.comp.GameOver;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.comp.ShapeInt;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.html.HTMLCanvasElement;


public class RenderWebSystem implements SystemBase {

    private final World world;
    private final HTMLCanvasElement canvas;
    private final CanvasRenderingContext2D ctx;
    private final double cellSize;
    private final int [][]grid;
    private int width;
    private int height;


    RenderWebSystem(World world, HTMLCanvasElement canvas, CanvasRenderingContext2D ctx, int cellSize, int[][] grid, int width, int height) {
        this.world = world;
        this.canvas = canvas;
        this.ctx = ctx;
        this.cellSize = cellSize;
        this.grid = grid;
        this.width = width ;
        this.height = height;
        canvas.setWidth(width * cellSize);
        canvas.setHeight(height * cellSize);
        canvas.addEventListener("resize", resize);
    }

    @Override
    public void update() {
        ctx.setFillStyle("#111");
        ctx.fillRect(0, 0, width*cellSize, height*cellSize);

        ctx.setFillStyle("#888");
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                if (grid[y][x] != 0) {
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }

        for (Entity e: world.getEntitiesWith(PositionInt.class, ShapeInt.class, Color.class)) {
            PositionInt pos = world.getComponent(e, PositionInt.class);
            ShapeInt shape = world.getComponent(e, ShapeInt.class);
            Color color = world.getComponent(e, Color.class);
            ctx.setFillStyle(color.color);
            for (int i = 0; i < shape.shape.length; i++) {
                for (int j = 0; j < shape.shape[i].length; j++) {
                    if (shape.shape[i][j] == 1) {
                        double drawX = (pos.x + j) * cellSize;
                        double drawY = (pos.y + i) * cellSize;
                        ctx.fillRect(drawX, drawY, cellSize, cellSize);
                    }
                }
            }
            ctx.setStrokeStyle("#222");
            for (int x = 0; x <= width; x++) {
                ctx.strokeRect(x * cellSize, 0, x * cellSize, height * cellSize);
            }
            for (int y = 0; y <= height; y++) {
                ctx.strokeRect(0, y * cellSize, width * cellSize, y * cellSize);
            }
        }
        if (isGameOver()) {
            drawGameOver();
        }
    }

    public boolean isGameOver() {
        return !world.getEntitiesWith(GameOver.class).isEmpty();
    }

    private void drawGameOver() {
        ctx.setFillStyle("rgba(0, 0, 0, 0.7)");
        ctx.fillRect(0, 0, width * cellSize, height * cellSize);

        ctx.setFillStyle("red");
        ctx.setFont("bold 48px sans-serif");
        ctx.setTextAlign("center");
        ctx.fillText("GAME OVER", width * cellSize / 2, height * cellSize / 2);

        ctx.setFont("20px sans-serif");
        ctx.setFillStyle("white");
        ctx.fillText("Tap to restart", width * cellSize / 2, height * cellSize / 2 + 40);
    }

    private final EventListener<Event> resize = new EventListener<Event>() {

        @Override
        public void handleEvent(Event evt) {
            width = canvas.getWidth();
            height = canvas.getHeight();
        }
    };
}
