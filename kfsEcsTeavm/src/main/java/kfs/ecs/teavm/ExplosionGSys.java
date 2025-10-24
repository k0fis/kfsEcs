package kfs.ecs.teavm;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBaseOutputPart;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Explosion;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

public class ExplosionGSys implements SystemBaseOutputPart<CanvasRenderingContext2D> {

    @Override
    public void draw(World world, CanvasRenderingContext2D g) {
        g.save();
        for(Entity e : world.getEntitiesWith(Explosion.class)) {
            Explosion explosion = world.getComponent(e, Explosion.class);
            if (explosion != null) {
                for (Explosion.Particle p : explosion.particles()) {
                    if (p.life > 0.01) {
                        double alpha = Math.max(0.01, p.life / p.maxLife);
                        g.setGlobalAlpha(alpha);
                        g.setFillStyle(p.color);
                        g.beginPath();
                        g.arc(p.x, p.y, 2, 0, 2 * Math.PI);
                        g.fill();
                    }
                }
            }
        }
        g.restore();
    }
}
