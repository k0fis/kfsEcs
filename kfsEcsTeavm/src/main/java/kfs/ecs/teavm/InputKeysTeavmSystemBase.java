package kfs.ecs.teavm;

import kfs.ecs.base.SystemBase;
import kfs.ecs.base.World;
import kfs.ecs.base.model.InputKeyCallback;
import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.KeyboardEvent;

public class InputKeysTeavmSystemBase implements SystemBase {

    private final World world;
    private final InputKeyCallback keyCallback;
    private final String cmds;

    public InputKeysTeavmSystemBase(World world, String cmds, InputKeyCallback keyCallback) {
        this.world = world;
        this.cmds = cmds;
        this.keyCallback = keyCallback;
    }

    EventListener<KeyboardEvent> keydown = new EventListener<KeyboardEvent>() {

        @Override
        public void handleEvent(KeyboardEvent evt) {
            String key = evt.getKey();
            if (cmds.contains(key)) {
                keyCallback.keypress(world,true, key);
            }
        }
    };

    EventListener<KeyboardEvent> keyup = new EventListener<KeyboardEvent>() {

        @Override
        public void handleEvent(KeyboardEvent evt) {
            String key = evt.getKey();
            if (cmds.contains(key)) {
                keyCallback.keypress(world,false, key);
            }
        }
    };

    @Override
    public void init() {
        Window.current().addEventListener("keydown", keydown);
        Window.current().addEventListener("keyup", keyup);
    }

}
