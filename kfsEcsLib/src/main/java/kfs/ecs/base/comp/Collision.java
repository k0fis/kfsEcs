package kfs.ecs.base.comp;

import kfs.ecs.base.Component;

public class Collision implements Component {

    private final double radius;

    public Collision(double radius) {
        this.radius = radius;
    }

    public double radius() {
        return radius;
    }
}
