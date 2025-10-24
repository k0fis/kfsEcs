package kfs.ecs.base.model;

import kfs.ecs.base.World;

public interface InputKeyCallback {
    void keypress(World world, boolean pressed, String key);
}
