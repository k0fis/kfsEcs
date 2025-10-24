package kfs.ecs.kfsgm001;

import kfs.ecs.base.Entity;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.*;
import kfs.ecs.base.model.*;
import kfs.ecs.base.system.*;
import kfs.ecs.base.utils.DoubleRange;
import kfs.ecs.base.utils.IntRange;
import kfs.ecs.teavm.*;
import kfs.ecs.teavm.halloween.*;


public class Main implements
        InputKeyCallback,
        TouchInputListener,
        TickEventListener,
        ExplosionListener,
        CollisionListener
{

    public static void main(String[] args) {
        (new Main()).world.run();
    }

    private final World world;

    Main() {
        world = new World(40);
        OutputTeavmSystem outGSys = new OutputTeavmSystem(world);
        world.setOutputSystem(outGSys);

        world.add(new InputKeysTeavmSystemBase(world, "wsadc", this));
        world.add(new InputTouchTeavmSystemBase(world, this));
        world.add(new MovementSystem(world));
        world.add(new VelocitySystem(world));
        world.add(new TickEventSystem(world, this));
        world.add(new ExplosionSystem(world, world.deltaTime(), this));
        world.add(new CollisionSystem(world, this));

        // remove exposion after finois -> update event (activate)

        HalloweenScene scene = new HalloweenScene(outGSys.width(), outGSys.height());

        outGSys.addPartOutputSystem(scene);
        outGSys.addPartOutputSystem(new HalloweenSpookaGSys());
        outGSys.addPartOutputSystem(new ExplosionGSys());

        createSpooka(SpookaType.pumpkin, new DoubleRange(-1.4, 1.4), new DoubleRange(-1.4, 1.4));
        createSpooka(SpookaType.bat, new DoubleRange(-2.4, 2.4), new DoubleRange(-2, 2));
        createSpooka(SpookaType.bat, new DoubleRange(-2.4, 2.4), new DoubleRange(-2, 2));
        createSpooka(SpookaType.bat, new DoubleRange(-2.4, 2.4), new DoubleRange(-2, 2));
        createSpooka(SpookaType.bat, new DoubleRange(-2.4, 2.4), new DoubleRange(-2, 2));
        createSpooka(SpookaType.cat, new DoubleRange(-0.2, 0.2), new DoubleRange(-0.0001, 0.0001));
        createSpooka(SpookaType.spider, new DoubleRange(-.0001, 0.0001), new DoubleRange(-0.6, 0.6));


        world.init();
    }


    @Override
    public void keypress(World world, boolean pressed, String key) {
        for (Entity e : world.getEntitiesWith(Movement.class)) {
            Movement movement = world.getComponent(e, Movement.class);
            if (movement != null) {
                switch (key) {
                    case "w":
                        movement.up = pressed;
                        break;
                    case "s":
                        movement.down = pressed;
                        break;
                    case "a":
                        movement.left = pressed;
                        break;
                    case "d":
                        movement.right = pressed;
                        break;
                    case "e":
                        // fire?
                        break;
                }
            }
        }
    }

    @Override
    public void updateDirection(World world, boolean up, boolean down, boolean left, boolean right) {
        for (Entity e : world.getEntitiesWith(Movement.class)) {
            Movement movement = world.getComponent(e, Movement.class);
            if (movement != null) {
                movement.up = up;
                movement.down = down;
                movement.left = left;
                movement.right = right;
            }
        }
    }

    @Override
    public void updateOnTick(World world, Entity e) {
        Velocity velocity = world.getComponent(e, Velocity.class);
        if (velocity != null) {
            velocity.random();
        }
    }

    @Override
    public void explosionFinished(World world, Entity entity, Explosion explosion) {
        if (world.getComponent(entity, Position.class) == null) {
            world.addComponent(entity, explosion.getPosition().randomPosition());
        }
    }

    @Override
    public void collision(World world, Entity e1, Entity e2) {
        Spooka spooka1 = world.getComponent(e1, Spooka.class);
        Position p1 = world.getComponent(e1, Position.class);
        Spooka spooka2 = world.getComponent(e2, Spooka.class);
        Position p2 = world.getComponent(e2, Position.class);

        if (p1 != null && p2 != null && (spooka1 != null) && (spooka2 != null)) {
            world.addComponent(e1, new Explosion(p1, 13, "red"));
            world.removeComponent(e1, Position.class);

            world.addComponent(e2, new Explosion(p2, 12, "orange"));
            world.removeComponent(e2, Position.class);
        }
    }

    //
    void createSpooka(SpookaType type, DoubleRange velocityRangeX, DoubleRange velocityRangeY) {
        Entity spooka = world.createEntity();
        world.addComponent(spooka, new Position(10, 10, new DoubleRange(10, world.getOutputSystem().width()-10), new DoubleRange(10, world.getOutputSystem().height()-10)).randomPosition());
        world.addComponent(spooka, new Velocity(velocityRangeX, velocityRangeY));
        world.addComponent(spooka, new Spooka(type.ordinal()));
        world.addComponent(spooka, new Collision(15));
        world.addComponent(spooka, new TickEvent(new IntRange(15, 75)));
    }
}