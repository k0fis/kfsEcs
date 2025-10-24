package kfs.ecs.base.comp;

import kfs.ecs.base.Component;
import kfs.ecs.base.utils.IntRange;

public class TickEvent implements Component {

    private final IntRange tickChangeRange;
    private int tickInt;
    private int tickChange;

    public TickEvent(IntRange tickRange) {
        this.tickInt = 0;
        this.tickChangeRange = tickRange;
        this.tickChange = tickChangeRange.random();
    }
    public TickEvent(int tickChange) {
        this(new IntRange(tickChange, tickChange));
    }

    public boolean tick() {
        long tick  = tickInt;
        tick = (tick + 1) % Integer.MAX_VALUE;
        tickInt = (int)tick;
        boolean result = tick == tickChange;
        if (result) {
            this.tickInt = 0;
            this.tickChange = tickChangeRange.random();
        }
        return result;
    }

}
