package kfs.ecs.teavm;

import kfs.ecs.base.SystemBaseOutputPart;
import kfs.ecs.base.system.AOutputSystem;
import kfs.ecs.base.World;
import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;

public class OutputTeavmSystem extends AOutputSystem<CanvasRenderingContext2D> {

    private int height;
    private int width;
    private CanvasRenderingContext2D g;
    private HTMLCanvasElement canvas;

    public OutputTeavmSystem(World world) {
        this(world, 400, 800);
    }

    public OutputTeavmSystem(World world, int height, int width) {
        super(world);
        this.height = height;
        this.width = width;
    }

    private final EventListener<Event> resize = new EventListener<Event>() {

        @Override
        public void handleEvent(Event evt) {
            width = canvas.getWidth();
            height = canvas.getHeight();
            for (SystemBaseOutputPart<CanvasRenderingContext2D> s: getPartOutputSystems()) {
                s.onResize(width, height);
            }
        }
    };

    @Override
    public void init() {
        HTMLDocument document = Window.current().getDocument();
        canvas = (HTMLCanvasElement) document.createElement("canvas");
        canvas.setWidth(width);
        canvas.setHeight(height);
        canvas.addEventListener("resize", resize);
        document.getBody().appendChild(canvas);
        g = (CanvasRenderingContext2D) canvas.getContext("2d");

        for (InputTouchTeavmSystemBase s : world.getSystems(InputTouchTeavmSystemBase.class)){
            s.init(canvas);
        }
        for (SystemBaseOutputPart<CanvasRenderingContext2D> s: getPartOutputSystems()) {
            s.onResize(width, height);
            s.init(world, g);
        }
    }

    @Override
    public double width() {
        return width;
    }

    @Override
    public double height() {
        return height;
    }

    @Override
    public void update() {
        super.draw(world, g);
    }
}
