package kfs.ecs.teavm;

import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.model.TouchInputListener;
import org.teavm.jso.dom.events.MouseEvent;
import org.teavm.jso.dom.events.Touch;
import org.teavm.jso.dom.events.TouchEvent;
import org.teavm.jso.dom.html.HTMLCanvasElement;

import java.util.List;

public class InputTouchTeavmSystemBase implements SystemBase {

    private final World world;
    private final TouchInputListener listener;

    public InputTouchTeavmSystemBase(World world, TouchInputListener listener) {
        this.world = world;
        this.listener = listener;
    }

    private double touchBaseX;
    private double touchBaseY;

    private boolean touching = false;
    private int direction = -1;

    private static final List<Integer> upDirections = List.of(5, 6, 7);
    private static final List<Integer> rightDirections = List.of(7,0,1);
    private static final List<Integer> downDirections = List.of(1,2,3);
    private static final List<Integer> leftDirections = List.of(3,4,5);

    public void init(HTMLCanvasElement canvas) {
        canvas.addEventListener("mousedown", evt -> {
            MouseEvent e = evt.cast();
            touchBaseX = e.getClientX();
            touchBaseY = e.getClientY();
            touching = true;
            e.preventDefault();
        });

        canvas.addEventListener("mousemove", evt -> {
            if (touching) {
                MouseEvent e = evt.cast();
                updateDirectionD(e.getClientX() - touchBaseX, e.getClientY() - touchBaseY);
            }
        });

        canvas.addEventListener("mouseup", evt -> {
            touching = false;
            direction = -1;
            updateDirection();
        });

        canvas.addEventListener("touchstart", evt -> {
            TouchEvent e = evt.cast();
            Touch t = e.getTouches().get(0);
            touchBaseX = t.getClientX();
            touchBaseY = t.getClientY();
            touching = true;
            e.preventDefault();
        });

        canvas.addEventListener("touchmove", evt -> {
            TouchEvent e = evt.cast();
            if (touching) {
                Touch t = e.getTouches().get(0);
                updateDirectionD(t.getClientX() - touchBaseX, t.getClientY() - touchBaseY);
            }
            e.preventDefault();
        });

        canvas.addEventListener("touchend", evt -> {
            touching = false;
            direction = -1;
            updateDirection();
        });
    }

    private void updateDirectionD(double dx, double dy) {
        double angle = Math.atan2(dy, dx);
        double dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 10) {
            double step = Math.PI / 4;
            double a = angle + step / 2;
            if (a < 0) a += 2 * Math.PI;
            direction = (int) Math.floor(a / step) % 8;
        } else {
            direction = -1;
        }
        updateDirection();
    }
    private void updateDirection() {
        listener.updateDirection(world,
                upDirections.contains(direction),
                rightDirections.contains(direction),
                downDirections.contains(direction),
                leftDirections.contains(direction));
    }
}
