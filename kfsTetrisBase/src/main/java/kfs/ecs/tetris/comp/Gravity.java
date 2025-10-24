package kfs.ecs.tetris.comp;

import kfs.ecs.base.Component;

public class Gravity implements Component {
    public static final double FI_NORMAL = 0.5;
    public static final double FI_FAST = 0.005;

    public double fallInterval;
    public double timer;

    public Gravity() {
        this.fallInterval = FI_NORMAL;
    }

    public boolean add(double delta) {
        timer += delta;
        if (timer >= fallInterval) {
            timer = 0;
            return true;
        }
        return false;
    }
}
