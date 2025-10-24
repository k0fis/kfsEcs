package kfs.ecs.base.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Explosion;
import kfs.ecs.base.model.ExplosionListener;

public class ExplosionSystem implements SystemBase {

    private final World world;
    private final double deltaTime;
    private final ExplosionListener listener;

    public ExplosionSystem(World world, double deltaTime, ExplosionListener listener) {
        this.world = world;
        this.deltaTime = deltaTime;
        this.listener = listener;
    }

    @Override
    public void update() {
        for (Entity e : world.getEntitiesWith(Explosion.class)) {
            Explosion explosion = world.getComponent(e, Explosion.class);
            if (explosion != null) {
                if (!explosion.finished()) {
                    explosion.update(deltaTime);
                } else {
                    world.removeComponent(e, Explosion.class);
                    if (listener != null) {
                        listener.explosionFinished(world, e, explosion);
                    }
                }
            }
        }
    }
}
