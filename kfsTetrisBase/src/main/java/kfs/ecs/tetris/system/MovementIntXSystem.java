package kfs.ecs.tetris.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.comp.MovementIntX;
import kfs.ecs.tetris.comp.ShapeInt;

public class MovementIntXSystem implements SystemBase {

    private final World world;
    private final int width;

    public MovementIntXSystem(World world, int width) {
        this.world = world;
        this.width = width;
    }

    @Override
    public void update() {
        for (Entity e : world.getEntitiesWith(MovementIntX.class, PositionInt.class, ShapeInt.class)) {
            MovementIntX mov = world.getComponent(e, MovementIntX.class);
            if (mov.xMove != 0) {
                PositionInt pos = world.getComponent(e, PositionInt.class);
                ShapeInt shape = world.getComponent(e, ShapeInt.class);
                int newX = pos.x + mov.xMove;
                if (newX >= 0 && newX < width &&
                        world.getSystem(CollisionIntSystem.class).canMove(pos, shape, mov.xMove, 0)) {
                    pos.x = newX;
                }
                mov.xMove = 0;
            }
        }
    }
}
