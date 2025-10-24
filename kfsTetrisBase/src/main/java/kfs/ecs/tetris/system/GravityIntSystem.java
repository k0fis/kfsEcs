package kfs.ecs.tetris.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.tetris.comp.Gravity;
import kfs.ecs.base.comp.PositionInt;
import kfs.ecs.tetris.comp.ShapeInt;

public class GravityIntSystem implements SystemBase {

    private final World world;

    public GravityIntSystem(World world) {
        this.world = world;
    }

    @Override
    public void update() {
        for (Entity e : world.getEntitiesWith(Gravity.class, PositionInt.class, ShapeInt.class)) {
            Gravity g = world.getComponent(e, Gravity.class);
            if (g.add(world.deltaTime())) {
                PositionInt pos = world.getComponent(e, PositionInt.class);
                ShapeInt shape = world.getComponent(e, ShapeInt.class);
                if (world.getSystem(CollisionIntSystem.class).canMove(pos, shape, 0, 1)) {
                    pos.y++;
                }
            }
        }
    }
}
