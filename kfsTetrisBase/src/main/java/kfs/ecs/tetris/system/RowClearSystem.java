package kfs.ecs.tetris.system;

import kfs.ecs.base.SystemBase;

public class RowClearSystem implements SystemBase {

    private final int width;
    private final int height;
    private final int[][] grid;

    public RowClearSystem(int width, int height, int[][] grid) {
        this.width = width;
        this.height = height;
        this.grid = grid;
    }

    public void update() {
        for (int y = height - 1; y >= 0; y--) {
            boolean full = true;
            for (int x = 0; x < width; x++) {
                if (grid[y][x] == 0) {
                    full = false;
                    break;
                }
            }
            if (full) {
                // Posuň vše nad tím o 1 dolů
                for (int yy = y; yy > 0; yy--) {
                    System.arraycopy(grid[yy - 1], 0, grid[yy], 0, width);
                }
                for (int x = 0; x < width; x++) grid[0][x] = 0;
                y++; // zkontroluj znovu stejnou řadu
            }
        }
    }
}
