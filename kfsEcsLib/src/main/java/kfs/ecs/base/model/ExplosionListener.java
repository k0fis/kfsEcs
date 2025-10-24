package kfs.ecs.base.model;

import kfs.ecs.base.Entity;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Explosion;

public interface ExplosionListener {
    void explosionFinished(World world, Entity entity, Explosion explosion);
}
