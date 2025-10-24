package kfs.ecs.base.model;

import kfs.ecs.base.Entity;
import kfs.ecs.base.World;

public interface CollisionListener {
    void collision(World world, Entity e1, Entity e2);
}
