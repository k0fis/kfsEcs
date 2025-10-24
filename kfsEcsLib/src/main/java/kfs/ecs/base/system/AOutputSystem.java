package kfs.ecs.base.system;

import kfs.ecs.base.SystemBaseOutputPart;
import kfs.ecs.base.World;

import java.util.ArrayList;
import java.util.List;

public abstract class AOutputSystem<T> implements SystemBaseOutputPart<T> {

    protected World world;

    private final List<SystemBaseOutputPart<T>> parts = new ArrayList<>();

    protected AOutputSystem(World world) {
        this.world = world;
    }

    public void addPartOutputSystem(SystemBaseOutputPart<T> partOutputSystem) {
        parts.add(partOutputSystem);
    }

    public void removePartOutputSystem(SystemBaseOutputPart<T> partOutputSystem) {
        parts.remove(partOutputSystem);
    }

    protected Iterable<SystemBaseOutputPart<T>> getPartOutputSystems() {
        return parts;
    }

    @Override
    public void init(World world, T data) {
        for (SystemBaseOutputPart<T> partOutputSystem : parts) {
            partOutputSystem.init(world, data);
        }
    }

    @Override
    public void draw(World world, T data) {
        for (SystemBaseOutputPart<T> partOutputSystem : parts) {
            partOutputSystem.draw(world, data);
        }

    }

    public abstract double width();
    public abstract double height();
}
