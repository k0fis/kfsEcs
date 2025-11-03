package kfs.ecs.tetis;

import kfs.ecs.tetris.Tetris;

public class TetrisTty {

    private static final int WIDTH = 10;
    private static final int HEIGHT = 23;

    private final Tetris tetris;

    private TetrisTty() {
        tetris = new Tetris(WIDTH, HEIGHT);

        tetris.world().add(new RenderTty(tetris, WIDTH, HEIGHT));
        new Thread(new InputTty(tetris)).start();
    }

    public static void main(String[] args) {
        (new TetrisTty()).tetris.world().run();
    }

}