package kfs.ecs.base.comp;

import kfs.ecs.base.Component;

public class PositionInt implements Component {

    public int x, y;

    public PositionInt(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
