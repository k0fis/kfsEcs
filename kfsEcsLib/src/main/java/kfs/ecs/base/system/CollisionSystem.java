package kfs.ecs.base.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Collision;
import kfs.ecs.base.comp.Position;
import kfs.ecs.base.model.CollisionListener;

import java.util.List;

public class CollisionSystem implements SystemBase {

    private final World world;
    private final CollisionListener collisionListener;

    public CollisionSystem(World world, CollisionListener collisionListener) {
        this.world = world;
        this.collisionListener = collisionListener;
    }

    @Override
    public void update(){
        List<Entity> lst = world.getEntitiesWith(Position.class, Collision.class);
        for (Entity e1: lst)
            for (Entity e2: lst)
                if (e1.id() != e2.id()) {
                    Position p1 = world.getComponent(e1, Position.class);
                    Collision r1 = world.getComponent(e1, Collision.class);
                    Position p2 = world.getComponent(e2, Position.class);
                    Collision r2 = world.getComponent(e2, Collision.class);
                    if (p1 != null && p2 != null && r1 != null && r2 != null) {
                        double dx = p1.getX() - p2.getX();
                        double dy = p1.getY() - p2.getY();
                        double dist2 = dx * dx + dy * dy;
                        double radius = r1.radius() + r2.radius();
                        if (dist2 < (radius * radius)) {
                            collisionListener.collision(world, e1, e2);
                        }
                    }
                }
    }
}
