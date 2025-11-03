package kfs.ecs.tetis;

import kfs.ecs.tetris.Tetris;

import java.io.IOException;
import java.io.InputStream;


public class InputTty implements Runnable {

    private final Tetris tetris;

    InputTty(Tetris tetris) {
        this.tetris = tetris;
    }

    public void run() {
        try {
            InputStream in = System.in;
            while (!tetris.isGameOver()) {
                int c = in.read();
                if (c == -1) break;
                // map keys:
                if (c == 'j' || c == 'J') tetris.move(true); // left
                else if (c == 'l' || c == 'L') tetris.move(false); // right
                else if (c == 'i' || c == 'I') tetris.rotate(); // rotate
                else if (c == 'k' || c == 'K') tetris.moveDown(true); // soft drop
                // consume escape sequences (arrows) optionally
                else if (c == 27) { // ESC
                    in.mark(2);
                    int n1 = in.read();
                    if (n1 == 91) {
                        int n2 = in.read();
                        if (n2 == 67) tetris.move(false); // right arrow
                        else if (n2 == 68) tetris.move(true); // left arrow
                        else if (n2 == 65) tetris.rotate(); // up arrow
                        else if (n2 == 66) tetris.moveDown(true); // down arrow
                    } else {
                        in.reset();
                    }
                }
            }
        } catch (IOException e) {
            // ignore
        }
    }

}
