package kfs.ecs.tetris.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Active;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.comp.ShapeInt;

public class CollisionIntSystem implements SystemBase {

    private final World world;
    private final int width;
    private final int height;
    private final int[][] grid;

    public CollisionIntSystem(World world, int width, int height, int[][] grid) {
        this.world = world;
        this.width = width;
        this.height = height;
        this.grid = grid;
    }

    public boolean canMove(PositionInt pos, ShapeInt shape, int dx, int dy) {
        for (int i = 0; i < shape.shape.length; i++) {
            for (int j = 0; j < shape.shape[i].length; j++) {
                if (shape.shape[i][j] == 0) continue;

                int newX = pos.x + j + dx;
                int newY = pos.y + i + dy;

                if (newX < 0 || newX >= width || newY >= height) return false;
                if (grid[newY][newX] != 0) return false;
            }
        }
        return true;
    }

    @Override
    public void update() {
        for (Entity e: world.getEntitiesWith(Active.class, PositionInt.class, ShapeInt.class)) {
            PositionInt pos = world.getComponent(e, PositionInt.class);
            ShapeInt shape = world.getComponent(e, ShapeInt.class);
            if (!canMove(pos, shape, 0, 1)) {
                updateGrid(shape, pos);
                world.deleteEntity(e);
            }
        }
    }

    private void updateGrid(ShapeInt shape, PositionInt pos) {
        for (int i = 0; i < shape.shape.length; i++) {
            for (int j = 0; j < shape.shape[i].length; j++) {
                if (shape.shape[i][j] == 1) {
                    int gx = pos.x + j;
                    int gy = pos.y + i;
                    if ((gy >= 0 && gy < grid.length && gx >= 0 && gx < grid[0].length))
                        grid[gy][gx] = 1;
                }
            }
        }
    }
}
