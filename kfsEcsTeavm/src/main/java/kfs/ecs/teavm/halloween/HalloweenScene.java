package kfs.ecs.teavm.halloween;

import kfs.ecs.base.SystemBaseOutputPart;
import kfs.ecs.base.World;
import org.teavm.jso.canvas.CanvasGradient;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

import java.util.Random;

public class HalloweenScene implements SystemBaseOutputPart<CanvasRenderingContext2D> {

    private Star stars[] = null;

    private final double width;
    private final double height;
    private final long startTime;

    public HalloweenScene(double width, double height) {
        this.width = width;
        this.height = height;
        this.startTime = System.currentTimeMillis();
    }

    public void updateStars(int count) {
        Star newstars[] = new Star[count];
        Random rnd = new Random();
        for (int i = 0; i < newstars.length; i++) {
            newstars[i] = new Star(
                    rnd.nextDouble() * width - width / 2.0,
                    rnd.nextDouble() * height - height / 2.0,
                    rnd.nextDouble() * 1.5 + 0.3,
                    rnd.nextDouble()
            );
        }
        stars = newstars;
    }

    Star [] getStars() {
            if (stars == null) {
                updateStars(50);
            }
            return stars;
    }

    @Override
    public void draw(World world, CanvasRenderingContext2D g) {
        long now = System.currentTimeMillis();
        long elapsed = now - startTime;

        double cx = width / 2;
        double cy = height / 2;

        // Rotace oblohy za 10 minut (600000 ms)
        double rotation = (elapsed / 600000.0) * 2 * Math.PI;

        g.save();
        g.setFillStyle("#2a2a4a");
        g.fillRect(0, 0, width, height);

        g.translate(cx, cy);
        g.rotate(rotation);

        for (Star s : getStars()) {
            double alpha = 0.6 + Math.sin((elapsed / 500.0) + s.phase) * 0.4;
            g.setGlobalAlpha(alpha);
            g.setFillStyle("white");
            g.beginPath();
            g.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            g.fill();
        }

        double moonOrbit = 300;
        double moonAngle = rotation * 4;
        double moonX = cx-moonOrbit + Math.cos(moonAngle) * moonOrbit;
        double moonY = cy+Math.sin(moonAngle) * moonOrbit;

        g.setGlobalAlpha(0.3);
        CanvasGradient gradient = g.createRadialGradient(moonX - 10, moonY - 10, 5, moonX, moonY, 30);
        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(1, "#ddd");
        g.setFillStyle(gradient);
        g.beginPath();
        g.arc(moonX, moonY, 25, 0, Math.PI * 2);
        g.fill();

        g.restore();

        drawChurchSilhouette(120, height, 1.5, g);
        drawGraveyard(200, height, 1.2, g);
        drawGraveyard(350, height, .7, g);
        drawGraveyard(450, height, 1.0, g);
    }

    void drawChurchSilhouette(double x, double y, double scale, CanvasRenderingContext2D g) {
        g.save();
        g.translate(x, y);
        g.scale(scale, scale);
        g.setFillStyle("#111"); // temně šedá (ne čistě černá, aby trochu vystoupila na tmavém pozadí)

        g.beginPath();
        // hlavní budova
        g.moveTo(-20, 0);
        g.lineTo(-20, -30);
        g.lineTo(20, -30);
        g.lineTo(20, 0);
        g.closePath();
        g.fill();

        // věž
        g.beginPath();
        g.moveTo(-10, -30);
        g.lineTo(-10, -70);
        g.lineTo(10, -70);
        g.lineTo(10, -30);
        g.closePath();
        g.fill();

        // kříž
        g.setStrokeStyle("#111");
        g.setLineWidth(3);
        g.beginPath();
        g.moveTo(0, -75);
        g.lineTo(0, -85);
        g.moveTo(-5, -80);
        g.lineTo(5, -80);
        g.stroke();

        g.restore();
    }

    void drawGraveyard(double x, double y, double scale, CanvasRenderingContext2D g) {
        g.save();
        g.translate(x, y);
        g.scale(scale, scale);
        g.setStrokeStyle("#111");
        g.setLineWidth(2);

        for (int i = 0; i < 6; i++) {
            double gx = i * 15 + Math.sin(i * 1.3) * 2;
            double gy = Math.cos(i) * 2;

            // základ hrobu
            g.beginPath();
            g.moveTo(gx - 3, gy);
            g.lineTo(gx + 3, gy);
            g.stroke();

            // kříž
            g.beginPath();
            g.moveTo(gx, gy);
            g.lineTo(gx, gy - 10 - Math.random() * 5);
            g.moveTo(gx - 3, gy - 6);
            g.lineTo(gx + 3, gy - 6);
            g.stroke();
        }

        g.restore();
    }
}
