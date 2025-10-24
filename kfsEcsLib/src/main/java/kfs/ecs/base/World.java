package kfs.ecs.base;

import kfs.ecs.base.system.AOutputSystem;

import java.util.*;

public class World {

    private final Map<Class<? extends Component>, Map<Entity, Component>> components = new HashMap<>();
    private final List<SystemBase> updatableSystemBaseList = new ArrayList<>();

    private boolean stopTheWorld = false;
    private long nextId = 0;
    private final long sleepTime;
    private double deltaTime;
    private Entity base;

    private AOutputSystem<?> outputSystem;

    public World() {
        this(30);
    }

    public World(long sleepTime) {
        this.sleepTime = sleepTime;
        this.base = createEntity();
    }

    public void reset() {
        nextId = 0;
        base = createEntity();
        components.clear();
    }

    public Entity base() {
        return base;
    }

    public synchronized Entity createEntity() {
        return new Entity(nextId++);
    }

    public void deleteEntity(Entity entity) {
        for (Map.Entry<Class<? extends Component>, Map<Entity, Component>> entry : components.entrySet()) {
            entry.getValue().remove(entity);
        }
    }

    public <T extends Component> void removeComponent(Entity e, Class<T> componentClass) {
        components
                .computeIfAbsent(componentClass, k -> new HashMap<>())
                .remove(e);
    }

    public <T extends Component> void addComponent(Entity e, T component) {
        components
                .computeIfAbsent(component.getClass(), k -> new HashMap<>())
                .put(e, component);
    }

    public <T extends Component> T getComponent(Entity e, Class<T> type) {
        return type.cast(components.getOrDefault(type, Map.of()).get(e));
    }

    public List<Entity> getEntitiesWith(Class<? extends Component> c1) {
        return new ArrayList<>(components.getOrDefault(c1, Map.of()).keySet());
    }

    public List<Entity> getEntitiesWith(Class<? extends Component> c1, Class<? extends Component> c2) {
        Set<Entity> ids1 = components.getOrDefault(c1, Map.of()).keySet();
        Set<Entity> ids2 = components.getOrDefault(c2, Map.of()).keySet();

        List<Entity> result = new ArrayList<>();
        for (Entity id : ids1) {
            if (ids2.contains(id)) result.add(id);
        }
        return result;
    }

    public List<Entity> getEntitiesWith(Class<? extends Component> c1, Class<? extends Component> c2, Class<? extends Component> c3) {
        Set<Entity> ids1 = components.getOrDefault(c1, Map.of()).keySet();
        Set<Entity> ids2 = components.getOrDefault(c2, Map.of()).keySet();
        Set<Entity> ids3 = components.getOrDefault(c3, Map.of()).keySet();

        List<Entity> result = new ArrayList<>();
        for (Entity id : ids1) {
            if (ids2.contains(id) && ids3.contains(id))
                result.add(id);
        }
        return result;
    }

    public void add(SystemBase updatableSystemBase) {
        updatableSystemBaseList.add(updatableSystemBase);
    }

    public void remove(SystemBase updatableSystemBase) {
        updatableSystemBaseList.remove(updatableSystemBase);
    }

    public Iterable<SystemBase> getSystems() {
        return updatableSystemBaseList;
    }

    public <T> List<T> getSystems(Class<T> type) {
        List<T> lst = new ArrayList<>();
        for (SystemBase systemBase : updatableSystemBaseList) {
            if (type.isAssignableFrom(systemBase.getClass())) {
                lst.add((T) systemBase);
            }
        }
        return lst;
    }

    public <T> T getSystem(Class<T> type) {
        for (SystemBase system : updatableSystemBaseList) {
            if (type.isAssignableFrom(system.getClass())) {
                return (T) system;
            }
        }
        return null;
    }


    public boolean isStopTheWorld() {
        return stopTheWorld;
    }

    public void setStopTheWorld(boolean stopTheWorld) {
        this.stopTheWorld = stopTheWorld;
    }

    public AOutputSystem<?> getOutputSystem() {
        return outputSystem;
    }

    public void setOutputSystem(AOutputSystem<?> outputSystem) {
        this.outputSystem = outputSystem;
    }

    public void deltaTime(double deltaTime) {
        this.deltaTime = deltaTime;
    }
    public double deltaTime() {
        return deltaTime;
    }

    public void init() {
        if (outputSystem != null) {
            outputSystem.init();
        }
        for (SystemBase systemBase : updatableSystemBaseList) {
            systemBase.init();
        }
    }

    public void run() {
        try {
            long lastTime = System.nanoTime();
            while (!isStopTheWorld()) {
                long now = System.nanoTime();
                deltaTime = (now - lastTime) / 1_000_000_000.0;
                lastTime = now;

                for (SystemBase system : updatableSystemBaseList) {
                    system.update();
                }
                if (outputSystem != null) {
                    outputSystem.update();
                }
                try {
                    Thread.sleep(sleepTime);
                } catch (InterruptedException ignored) {
                }
            }
        } finally {
            for (SystemBase system : updatableSystemBaseList) {
                system.done();
            }
            if (outputSystem != null) {
                outputSystem.done();
            }
        }
    }
}
