package kfs.ecs.base;

public interface SystemBaseOutputPart<D> extends SystemBase {

    default void init(World world, D data) {}
    default void draw(World world, D data) {}
    default void onResize(double width, double height) {}
}
