package kfs.ecs.base.comp;

import kfs.ecs.base.Component;
import kfs.ecs.base.utils.DoubleRange;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Explosion implements Component {

    public class Particle {
        public double x, y, vx, vy, life, maxLife;
        public String color;

        public Particle(double x, double y, double vx, double vy, double life, String color) {
            this.x = x; this.y = y;
            this.vx = vx; this.vy = vy;
            this.life = this.maxLife = life;
            this.color = color;
        }

        boolean alive() { return life > 0; }
    }

    private final List<Particle> parts = new ArrayList<>();
    private final double x;
    private final double y;
    private final DoubleRange xRange;
    private final DoubleRange yRange;

    // "orange"
    public Explosion(Position position, int count, String color) {
        this.x = position.getX();
        this.y = position.getY();
        this.xRange = position.getXRange();
        this.yRange = position.getYRange();

        Random rnd = new Random();
        for (int i = 0; i < count; i++) {
            double angle = rnd.nextDouble() * 2 * Math.PI;
            double speed = 1 + rnd.nextDouble() * 2;
            parts.add(new Particle(
                    x, y,
                    Math.cos(angle) * speed,
                    Math.sin(angle) * speed,
                    2.0 + rnd.nextDouble(),
                    color
            ));
        }
    }

    public Iterable<Particle> particles() {
        return parts;
    }

    public Position getPosition() {
        return new Position(x, y, xRange, yRange);
    }

    public void update(double dt) {
        for (Particle p : parts) {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.97;
            p.vy *= 0.97;
            p.life -= Math.max(dt, 0.03);
        }
    }

    public boolean finished() {
        for (Particle p : parts) {
            if (p.alive()) return false;
        }
        return true;
    }
}
