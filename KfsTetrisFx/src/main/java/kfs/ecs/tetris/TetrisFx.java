package kfs.ecs.tetris;

import javafx.animation.AnimationTimer;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.canvas.Canvas;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import kfs.ecs.base.SystemBase;


public class TetrisFx extends Application {

    private static final int WIDTH = 10;
    private static final int HEIGHT = 20;
    private static final int CELL = 30;

    public TetrisFx() {
        super();
    }

    @Override
    public void start(Stage stage) throws Exception {
        Tetris tetris = new Tetris(WIDTH, HEIGHT);
        Canvas canvas = new Canvas(WIDTH * CELL, 15+HEIGHT * CELL);

        StackPane root = new StackPane(canvas);
        Scene scene = new Scene(root);
        stage.setTitle("Tetris pro Kubu");
        stage.setScene(scene);
        stage.show();

        RenderFxSystem render = new RenderFxSystem(tetris.world(), canvas, CELL,
                tetris.grid(), WIDTH, HEIGHT);

        tetris.world().add(render);

        tetris.world().init();

        scene.setOnKeyPressed(e -> {
            switch (e.getCode()) {
                case KeyCode.DOWN:
                    tetris.moveDown(true);
                    break;
                case KeyCode.UP:
                    tetris.rotate();
                    break;
                case KeyCode.LEFT:
                    tetris.move(true);
                    break;
                case KeyCode.RIGHT:
                    tetris.move(false);
                    break;
                case KeyCode.R:
                    if (e.isAltDown()) tetris.reset();
            }
        });

        scene.setOnKeyReleased(e -> {
                    if (e.getCode() == KeyCode.DOWN) {
                        tetris.moveDown(false);
                    }
                });

        AnimationTimer timer = new AnimationTimer() {
            long last = System.nanoTime();

            @Override
            public void handle(long now) {
                if (render.isGameOver()) {
                    return;
                }
                tetris.world().deltaTime( (now - last) / 1_000_000_000.0);
                last = now;
                for (SystemBase system : tetris.world().getSystems()) {
                    system.update();
                }
            }
        };

        timer.start();
    }

    public static void main(String[] args) {
        launch();
    }

}