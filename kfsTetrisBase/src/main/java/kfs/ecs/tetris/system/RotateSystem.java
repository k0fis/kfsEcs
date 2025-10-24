package kfs.ecs.tetris.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.comp.Rotate;
import kfs.ecs.tetris.comp.ShapeInt;

public class RotateSystem implements SystemBase {

    private final World world;

    public RotateSystem(World world) {
        this.world = world;
    }

    @Override
    public void update() {
        for (Entity e : world.getEntitiesWith(Rotate.class, ShapeInt.class, PositionInt.class)) {
            PositionInt pos = world.getComponent(e, PositionInt.class);
            ShapeInt shape = world.getComponent(e, ShapeInt.class);
            int[][] original = shape.shape;
            shape.rotate();
            if (!world.getSystem(CollisionIntSystem.class).canMove(pos, shape, 0, 0)) {
                shape.shape = original;
            }
            world.removeComponent(e, Rotate.class);
        }
    }
}
