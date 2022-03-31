class GridDraw2D {
    constructor(width) {
        this.width = width;
    }

    draw(Grid) {
        let width = this.width;
        Grid.each(function (cols, rows, value) {
            let x = cols * width;
            let y = rows * width;
            if (value === 0) {
                fill(255);
                stroke(0);
                rect(x, y, width - 1, width - 1);
            }
        });
    }
}