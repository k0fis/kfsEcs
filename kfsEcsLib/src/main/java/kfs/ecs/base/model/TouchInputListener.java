package kfs.ecs.base.model;

import kfs.ecs.base.World;

public interface TouchInputListener {
    void updateDirection(World world, boolean up, boolean down, boolean left, boolean right);
}
