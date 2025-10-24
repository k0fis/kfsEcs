package kfs.ecs.base.model;

import kfs.ecs.base.Entity;
import kfs.ecs.base.World;

public interface TickEventListener {
    void updateOnTick(World world, Entity e);
}
