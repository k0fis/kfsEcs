package kfs.ecs.base.system;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.TickEvent;
import kfs.ecs.base.model.TickEventListener;

public class TickEventSystem implements SystemBase {

    private final World world;
    private final TickEventListener listener;

    public TickEventSystem(World world, TickEventListener listener) {
        this.world = world;
        this.listener = listener;
    }

    @Override
    public void update() {
        for (Entity e : world.getEntitiesWith(TickEvent.class)) {
            TickEvent rte = world.getComponent(e, TickEvent.class);
            if (rte.tick()) {
                listener.updateOnTick(world, e);
            }
        }
    }

}
