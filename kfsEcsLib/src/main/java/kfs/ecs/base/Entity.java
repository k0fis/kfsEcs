package kfs.ecs.base;

public class Entity {

    private final long id;

    public Entity(long id) {
        this.id = id;
    }

    public long id() {
        return id;
    }

    @Override public boolean equals(Object o){
        if(this==o) return true;
        if(!(o instanceof Entity)) return false;
        return id == ((Entity)o).id;
    }
    @Override public int hashCode(){ return Long.hashCode(id); }
}
