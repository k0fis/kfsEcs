package kfs.ecs.base;

public interface SystemBase {

    default void init() {}
    default void done() {}

    default void update() {}
}
