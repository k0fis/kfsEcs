package kfs.ecs.tetris;

import kfs.ecs.base.Entity;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Active;
import kfs.ecs.tetris.comp.Gravity;
import kfs.ecs.tetris.comp.MovementIntX;
import kfs.ecs.tetris.comp.Rotate;
import kfs.ecs.tetris.system.*;

import java.util.Arrays;

public class Tetris {

    private static final int[][][] SHAPES = {
            {{1,1,1,1}},       // I
            {{1,1},{1,1}},     // O
            {{0,1,0},{1,1,1}}, // T
            {{1,1,0},{0,1,1}}, // S
            {{0,1,1},{1,1,0}}, // Z
            {{1,0,0},{1,1,1}}, // L
            {{0,0,1},{1,1,1}}  // J
    };

    private static  final String [] COLORS = {"cyan", "orange","yellow", "green", "blue", "magenta", "red"};

    private final World world;
    private final int[][] grid;

    public Tetris(int width, int height) {
        this.world = new World();
        this.grid = new int[height][width];

        // key handler -> movementIntX
        world.add(new MovementIntXSystem(world, width));
        world.add(new RotateSystem(world));
        world.add(new GravityIntSystem(world));
        world.add(new CollisionIntSystem(world, width, height, grid));
        world.add(new SpawnShapeIntSystem(world, width, grid, SHAPES, COLORS));
        world.add(new RowClearSystem(width, height, grid));

        world.init();
    }

    public void reset() {
        for (int[] ints : grid) {
            Arrays.fill(ints, 0);
        }
        world.reset();
    }

    public void rotate() {
        for (Entity entity : world.getEntitiesWith(Active.class)) {
            world.addComponent(entity, new Rotate());
        }
    }

    public void moveDown(boolean pressed) {
        for (Entity entity : world.getEntitiesWith(Gravity.class)) {
            world.getComponent(entity, Gravity.class).fallInterval = pressed?Gravity.FI_FAST:Gravity.FI_NORMAL;
        }
    }

    public void move(boolean left) {
        for (Entity entity : world.getEntitiesWith(MovementIntX.class)) {
            world.getComponent(entity, MovementIntX.class).xMove = left ? -1 : 1;
        }

    }

    public World world() {
        return world;
    }

    public int[][] grid() {
        return grid;
    }

}