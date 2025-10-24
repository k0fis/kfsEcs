package kfs.ecs.teavm.halloween;

import kfs.ecs.base.Entity;
import kfs.ecs.base.SystemBaseOutputPart;
import kfs.ecs.base.World;
import kfs.ecs.base.comp.Position;
import kfs.ecs.base.comp.Spooka;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

public class HalloweenSpookaGSys implements SystemBaseOutputPart<CanvasRenderingContext2D> {

    @Override
    public void draw(World world, CanvasRenderingContext2D g) {
        for (Entity e : world.getEntitiesWith(Spooka.class, Position.class)) {
            Spooka spooka = world.getComponent(e, Spooka.class);
            Position pos = world.getComponent(e, Position.class);
            if ((spooka != null) && (pos != null)) {
                if (spooka.type == SpookaType.spider.ordinal()) {
                    drawSpider(pos.getX(), pos.getY(), 0.6, g);
                } else if (spooka.type == SpookaType.pumpkin.ordinal()) {
                    drawPumpkin(pos.getX(), pos.getY(), 1, g);
                } else if (spooka.type == SpookaType.ghost.ordinal()) {
                    drawGhost(pos.getX(), pos.getY(), 1, g);
                } else if (spooka.type == SpookaType.bat.ordinal()) {
                    drawBat(pos.getX(), pos.getY(), .6, System.currentTimeMillis() / 150.0, g);
                } else if (spooka.type == SpookaType.cat.ordinal()) {
                    drawCatAnimated(pos.getX(), pos.getY(), 1.0, System.currentTimeMillis() / 450.0, g);
                }
            }
        }
    }

    public void drawPumpkin(double x, double y, double size, CanvasRenderingContext2D g) {
        g.save();
        g.translate(x, y);
        g.scale(size, size);

        // tělo (elipsa)
        g.save();
        g.scale(1.3, 1.0);
        g.setFillStyle("orange");
        g.beginPath();
        g.arc(0, 0, 40, 0, Math.PI * 2);
        g.fill();
        g.restore();

        // stonek
        g.setFillStyle("green");
        g.fillRect(-8, -55, 16, 10);

        // oči
        g.setFillStyle("black");
        drawTriangle( -25, -10, 15, 15, true, g);
        drawTriangle( 10, -10, 15, 15, true, g);

        // pusa
        g.beginPath();
        g.moveTo(-30, 15);
        g.lineTo(-15, 30);
        g.lineTo(0, 15);
        g.lineTo(15, 30);
        g.lineTo(30, 15);
        g.closePath();
        g.fill();

        g.restore();
    }

    public void drawGhost(double x, double y, double size, CanvasRenderingContext2D g) {
        g.save();
        g.translate(x, y);
        g.scale(size, size);

        g.setFillStyle("white");
        g.beginPath();
        g.arc(0, -10, 25, Math.PI, 0, false);
        g.lineTo(25, 30);
        g.lineTo(15, 25);
        g.lineTo(5, 30);
        g.lineTo(-5, 25);
        g.lineTo(-15, 30);
        g.lineTo(-25, 25);
        g.closePath();
        g.fill();

        g.setFillStyle("black");
        g.beginPath();
        g.arc(-10, -10, 3, 0, Math.PI * 2);
        g.arc(10, -10, 3, 0, Math.PI * 2);
        g.fill();

        g.restore();
    }

    public void drawBat(double x, double y, double size, double time, CanvasRenderingContext2D g) {
        g.save();
        g.translate(x, y);
        g.scale(size, size);

        double flap = Math.sin(time * 4) * 0.7; // rozsah mávání křídel

        g.setFillStyle("black");
        g.beginPath();
        g.arc(0, 0, 10, Math.PI, 0, false); // hlava

        // levé křídlo
        g.save();
        g.rotate(-flap);
        g.arc(-20, 0, 15, 0, Math.PI, false);
        g.restore();

        // pravé křídlo
        g.save();
        g.rotate(flap);
        g.arc(20, 0, 15, 0, Math.PI, false);
        g.restore();

        g.closePath();
        g.fill();

        g.restore();
    }

    // 🕷️ Pavouk
    public void drawSpider(double x, double y, double size, CanvasRenderingContext2D g) {
        g.save();
        g.translate(x, y);
        g.scale(size, size);

        g.setFillStyle("black");
        g.beginPath();
        g.arc(0, 0, 10, 0, Math.PI * 2);
        g.fill();

        g.setStrokeStyle("black");
        for (int i = 0; i < 4; i++) {
            double yOffset = (i - 1.5) * 5;
            g.beginPath();
            g.moveTo(-10, yOffset);
            g.lineTo(-25, yOffset - 5);
            g.stroke();

            g.beginPath();
            g.moveTo(10, yOffset);
            g.lineTo(25, yOffset - 5);
            g.stroke();
        }

        g.restore();
    }

    // 🐱 Kočka
    void drawCatAnimated(double x, double y, double size, double time, CanvasRenderingContext2D g) {
        g.save();
        g.translate(x, y);
        g.scale(size, size);

        // tělo
        g.setFillStyle("black");
        g.beginPath();
        g.arc(0, 0, 20, 0, Math.PI * 2);
        g.fill();

        // --- ocas (houpe se) ---
        double tailAngle = Math.sin(time * 2) * 0.4; // ±0.4 rad
        g.save();
        g.translate(18, 10); // umístění ocasu
        g.rotate(tailAngle);
        g.setStrokeStyle("black");
        g.setLineWidth(4);
        g.beginPath();
        g.moveTo(0, 0);
        g.quadraticCurveTo(15, -10, 25, 5); // zakřivený ocas
        g.stroke();
        g.restore();

        // --- hlava ---
        g.setFillStyle("black");
        g.beginPath();
        g.arc(0, -25, 15, 0, Math.PI * 2);
        g.fill();

        // --- uši ---
        g.beginPath();
        g.moveTo(-10, -35);
        g.lineTo(-3, -50);
        g.lineTo(3, -35);
        g.moveTo(10, -35);
        g.lineTo(3, -50);
        g.lineTo(-3, -35);
        g.fill();

        // --- oči (mrkání + záře) ---
        double blink = Math.abs(Math.sin(time * 3)); // 0–1
        double eyeHeight = 3 * blink + 0.5;
        double glow = (Math.sin(time * 5) + 1) / 2;  // jas (0–1)
        String color = "rgba(255,255,0," + (0.4 + 0.6 * glow) + ")";
        g.setFillStyle(color);

        // levé oko
        g.save();
        g.translate(-6, -25);
        g.scale(1, eyeHeight / 3.0);  // místo ellipse
        g.beginPath();
        g.arc(0, 0, 3, 0, Math.PI * 2);
        g.fill();
        g.restore();

        // pravé oko
        g.save();
        g.translate(6, -25);
        g.scale(1, eyeHeight / 3.0);
        g.beginPath();
        g.arc(0, 0, 3, 0, Math.PI * 2);
        g.fill();
        g.restore();

        // --- pusa (zívnutí) ---
        double yawn = Math.max(0, Math.sin(time * 0.8));
        if (yawn > 0.9) {
            double mouthOpen = (yawn - 0.9) * 20;
            g.save();
            g.translate(0, -15);
            g.scale(1, mouthOpen / 3.0 + 0.3);
            g.setFillStyle("black");
            g.beginPath();
            g.arc(0, 0, 4, 0, Math.PI * 2);
            g.fill();
            g.restore();
        }

        g.restore();
    }

    void drawTriangle(double x, double y, double w, double h, boolean up, CanvasRenderingContext2D g) {
        g.beginPath();
        if (up) {
            g.moveTo(x, y + h);
            g.lineTo(x + w / 2, y);
            g.lineTo(x + w, y + h);
        } else {
            g.moveTo(x, y);
            g.lineTo(x + w / 2, y + h);
            g.lineTo(x + w, y);
        }
        g.closePath();
        g.fill();
    }
}
