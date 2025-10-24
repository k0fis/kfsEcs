package kfs.ecs.base.system;


import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Position;
import kfs.ecs.base.comp.Velocity;


public class VelocitySystem implements SystemBase {

    private final World world;

    public VelocitySystem(World world) {
        this.world = world;
    }

    @Override
    public void update() {
        for (Entity e : world.getEntitiesWith(Position.class, Velocity.class)) {
            Position p = world.getComponent(e, Position.class);
            Velocity v = world.getComponent(e, Velocity.class);
            if ((p != null) && (v != null)) {
                p.add(v.dx(), v.dy());
            }
        }
    }
}
