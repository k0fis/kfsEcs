package kfs.ecs.tetris;

import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Color;
import kfs.ecs.base.comp.GameOver;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.comp.ShapeInt;


public class RenderFxSystem implements SystemBase {

    private final World world;
    private final Canvas canvas;
    private final double cellSize;
    private final int [][]grid;
    private final int width, height;

    public RenderFxSystem(World world, Canvas canvas, int cellSize, int[][] grid, int width, int height) {
        this.world = world;
        this.canvas = canvas;
        this.cellSize = cellSize;
        this.grid = grid;
        this.width = width;
        this.height = height;
    }

    @Override
    public void update() {
        GraphicsContext gc = canvas.getGraphicsContext2D();

        gc.setFill(javafx.scene.paint.Color.web("#111"));
        gc.fillRect(0, 0, canvas.getWidth(), canvas.getHeight());

        gc.setFill(javafx.scene.paint.Color.web("#888"));
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                if (grid[y][x] != 0) {
                    gc.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }

        for (Entity e: world.getEntitiesWith(PositionInt.class, ShapeInt.class, Color.class)) {
            PositionInt pos = world.getComponent(e, PositionInt.class);
            ShapeInt shape = world.getComponent(e, ShapeInt.class);
            Color color = world.getComponent(e, Color.class);
            gc.setFill(javafx.scene.paint.Color.web(color.color));
            for (int i = 0; i < shape.shape.length; i++) {
                for (int j = 0; j < shape.shape[i].length; j++) {
                    if (shape.shape[i][j] == 1) {
                        double drawX = (pos.x + j) * cellSize;
                        double drawY = (pos.y + i) * cellSize;
                        gc.fillRect(drawX, drawY, cellSize, cellSize);
                    }
                }
            }
            gc.setStroke(javafx.scene.paint.Color.web("#222"));
            for (int x = 0; x <= width; x++) {
                gc.strokeLine(x * cellSize, 0, x * cellSize, height * cellSize);
            }
            for (int y = 0; y <= height; y++) {
                gc.strokeLine(0, y * cellSize, width * cellSize, y * cellSize);
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
        GraphicsContext gc = canvas.getGraphicsContext2D();
        gc.setFill(javafx.scene.paint.Color.color(0, 0, 0, 0.6));
        gc.fillRect(0, 0, canvas.getWidth(), canvas.getHeight());
        gc.setFill(javafx.scene.paint.Color.RED);
        gc.setFont(javafx.scene.text.Font.font("Arial", 40));
        gc.fillText("GAME OVER", canvas.getWidth() / 2 - 120, canvas.getHeight() / 2);
    }
}
