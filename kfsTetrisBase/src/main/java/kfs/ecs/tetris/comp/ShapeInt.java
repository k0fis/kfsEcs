package kfs.ecs.tetris.comp;

import kfs.ecs.base.Component;

public class ShapeInt implements Component {

    public int [][]shape;

    public ShapeInt(int [][]shape){
        this.shape = shape;
    }

    public void rotate() {
        int n = shape.length;
        int m = shape[0].length;
        int[][] rotated = new int[m][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                rotated[j][n - i - 1] = shape[i][j];
            }
        }
        shape = rotated;
    }
}
