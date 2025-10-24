package kfs.ecs.base.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Position;
import kfs.ecs.base.comp.Movement;

public class MovementSystem implements SystemBase {
    private final World world;

    public MovementSystem(World world) {
        this.world = world;
    }

    @Override
    public void update() {
        for (Entity e : world.getEntitiesWith(Position.class, Movement.class)) {
            Position p = world.getComponent(e, Position.class);
            Movement m = world.getComponent(e, Movement.class);
            if ((p != null) && (m != null)) {
                if (m.left) {
                    p.setX(p.getX() - m.speed());
                }
                if (m.right) {
                    p.setX(p.getX() + m.speed());
                }
                if (m.up) {
                    p.setY(p.getY() - m.speed());
                }
                if (m.down) {
                    p.setY(p.getY() + m.speed());
                }
            }
        }
    }

}
