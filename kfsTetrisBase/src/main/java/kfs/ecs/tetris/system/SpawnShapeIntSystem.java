package kfs.ecs.tetris.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Active;
import kfs.ecs.base.comp.Color;
import kfs.ecs.base.comp.GameOver;
import kfs.ecs.tetris.comp.Gravity;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.comp.MovementIntX;
import kfs.ecs.tetris.comp.ShapeInt;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class SpawnShapeIntSystem implements SystemBase {

    private final World world;
    private final int width;
    private final int[][][] shapes;
    private final String []colors;
    private final int[][] grid;

    public SpawnShapeIntSystem(World world, int width, int[][] grid, int[][][] shapes, String []colors) {
        this.world = world;
        this.width = width;
        this.grid = grid;
        this.shapes = shapes;
        this.colors = colors;
    }

    @Override
    public void update() {
        if (world.getEntitiesWith(GameOver.class).isEmpty() &&
                world.getEntitiesWith(Active.class).isEmpty()) {
            int[][] shape = shapes[ThreadLocalRandom.current().nextInt(shapes.length)];
            int spawnX = width / 2 - shape[0].length / 2;
            int spawnY = 0;

            if (!canSpawn(shape, spawnX, spawnY)) {
                Entity gameOver = world.createEntity();
                world.addComponent(gameOver, new GameOver());
                return;
            }

            Entity block = world.createEntity();
            world.addComponent(block, new ShapeInt(shape));
            world.addComponent(block, new Gravity());
            world.addComponent(block, new MovementIntX());
            world.addComponent(block, new PositionInt(spawnX, spawnY));
            world.addComponent(block, new Color(colors[ThreadLocalRandom.current().nextInt(colors.length)]));
            world.addComponent(block, new Active());
        }
    }

    private boolean canSpawn(int[][] shape, int spawnX, int spawnY) {
        for (int i = 0; i < shape.length; i++) {
            for (int j = 0; j < shape[i].length; j++) {
                if (shape[i][j] == 1) {
                    int x = spawnX + j;
                    int y = spawnY + i;
                    if (y < 0 || y >= grid.length || x < 0 || x >= width) return false;
                    if (grid[y][x] != 0) return false;
                }
            }
        }
        return true;
    }
}
