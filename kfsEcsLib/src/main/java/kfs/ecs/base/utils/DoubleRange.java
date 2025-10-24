package kfs.ecs.base.utils;

import java.util.concurrent.ThreadLocalRandom;

public class DoubleRange {
    private final double min;
    private final double max;

    public DoubleRange(double min, double max) {
        if (min > max) throw new IllegalArgumentException("min > max");
        this.min = min;
        this.max = max;
    }

    public double getMin() { return min; }
    public double getMax() { return max; }

    public double random() {
        if (getMin() == getMax()) return getMax();
        return ThreadLocalRandom.current().nextDouble(getMin(), getMax());
    }

    public boolean contains(double value) {
        return value >= getMin() && value <= getMax();
    }

    public double fit(double value) {
        return fit(value, getMin(), getMax());
    }

    public static double fit(double value, double min, double max) {
        if (value < min) {
            value = min;
        }
        if (value > max) {
            value = max;
        }
        return value;
    }
}
