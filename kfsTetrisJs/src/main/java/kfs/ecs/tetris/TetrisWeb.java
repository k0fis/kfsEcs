package kfs.ecs.tetris;

import org.teavm.jso.JSBody;
import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.KeyboardEvent;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;

public class TetrisWeb {

    private static final int WIDTH = 10;
    private static final int HEIGHT = 23;
    private static final int CELL = 30;

    private final Tetris tetris;

    private final RenderWebSystem render;
    private final HTMLCanvasElement canvas;
    private final CanvasRenderingContext2D ctx;


    private final EventListener<Event> reset = new EventListener<Event>() {

        @Override
        public void handleEvent(Event evt) {
            if (render.isGameOver()) tetris.reset();
        }
    };

    TetrisWeb() {
        this.tetris = new Tetris(WIDTH, HEIGHT);
        HTMLDocument doc = Window.current().getDocument();
        doc.addEventListener("keydown", keydown);
        doc.addEventListener("keyup", keyup);
        HTMLElement btn = doc.getElementById("down");
        btn.addEventListener("touchstart", touchDown);
        btn.addEventListener("touchend", touchDownRelease);
        btn.addEventListener("mousedown", mouseDown);
        btn.addEventListener("mouseup", mouseDownRelease);
        btn = doc.getElementById("rotate");
        btn.addEventListener("touchstart", touchRotate);
        btn.addEventListener("mousedown", mouseRotate);
        btn = doc.getElementById("left");
        btn.addEventListener("touchstart", touchLeft);
        btn.addEventListener("mousedown", mouseLeft);
        btn = doc.getElementById("right");
        btn.addEventListener("touchstart", touchRigth);
        btn.addEventListener("mousedown", mouseRigth);

        canvas = (HTMLCanvasElement) doc.getElementById("game");
        canvas.addEventListener("click", reset);
        canvas.addEventListener("touchstart", reset);
        ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
        render = new RenderWebSystem(tetris.world(), canvas, ctx, CELL,
                tetris.grid(), WIDTH, HEIGHT);
        tetris.world().add(render);
    }

    private final EventListener<KeyboardEvent> keydown = new EventListener<KeyboardEvent>() {

        @Override
        public void handleEvent(KeyboardEvent evt) {
            switch (evt.getKey()) {
                case "ArrowUp":
                case "i":
                    tetris.rotate();
                    break;
                case "DownArrow":
                case "k":
                    tetris.moveDown(true);
                    break;
                case "LeftArrow":
                case "j":
                    tetris.move(true);
                    break;
                case "RightArrow":
                case "l":
                    tetris.move(false);
                    break;
            }
            evt.preventDefault();
        }
    };
    private final EventListener<KeyboardEvent> keyup = new EventListener<KeyboardEvent>() {

        @Override
        public void handleEvent(KeyboardEvent evt) {
            switch (evt.getKey()) {
                case "DownArrow":
                case "k":
                    tetris.moveDown(false);
                    break;

            }
            evt.preventDefault();
        }
    };

    private final EventListener<Event> touchDown = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.moveDown(true);
            evt.preventDefault();
        }
    };

    private final EventListener<Event> touchDownRelease = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.moveDown(false);
            evt.preventDefault();
        }
    };

    private final EventListener<Event> mouseDown = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.moveDown(true);
        }
    };
    private final EventListener<Event> mouseDownRelease = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.moveDown(false);
        }
    };

    private final EventListener<Event> touchRotate = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.rotate();
            evt.preventDefault();
        }
    };
    private final EventListener<Event> mouseRotate = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.rotate();
        }
    };

    private final EventListener<Event> touchLeft = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.move(true);
            evt.preventDefault();
        }
    };
    private final EventListener<Event> mouseLeft = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.move(true);
        }
    };

    private final EventListener<Event> touchRigth = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.move(false);
            evt.preventDefault();
        }
    };
    private final EventListener<Event> mouseRigth = new EventListener<>() {
        @Override
        public void handleEvent(Event evt) {
            tetris.move(false);
        }
    };

    public static void main(String[] args) {
        (new TetrisWeb()).tetris.world().run();
    }

}