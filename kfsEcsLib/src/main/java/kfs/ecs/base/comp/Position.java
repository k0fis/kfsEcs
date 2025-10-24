package kfs.ecs.base.comp;

import kfs.ecs.base.Component;
import kfs.ecs.base.utils.DoubleRange;

public class Position implements Component {
    private final DoubleRange xRange;
    private final DoubleRange yRange;
    private double x;
    private double y;

    public Position(double x, double y, DoubleRange xRange, DoubleRange yRange) {
        this.xRange = xRange;
        this.yRange = yRange;
        setX(x);
        setY(y);
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        Position position = (Position) o;
        return x == position.x && y == position.y;
    }

    @Override
    public int hashCode() {
        return (int) (31.28 * x + y);
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        if (xRange != null) {
            x = xRange.fit(x);
        }
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        if (yRange != null) {
            y = yRange.fit(y);
        }
        this.y = y;
    }

    public DoubleRange getXRange() {
        return xRange;
    }
    public DoubleRange getYRange() {
        return yRange;
    }

    public Position add(double dx, double dy) {
        setX(x + dx);
        setY(y + dy);
        return this;
    }

    public Position randomPosition() {
        setX(xRange.random());
        setY(yRange.random());
        return this;
    }
}
