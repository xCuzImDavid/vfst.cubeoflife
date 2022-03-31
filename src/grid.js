class Grid {
    constructor(cols, rows) {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
        }
        this.arr = arr;
        this.numcols = cols;
        this.numrows = rows;
    }

    insertAt(cols, rows, value) {
        this.assertCellexists(cols,rows);
        this.arr[cols][rows] = value;
    }

    assertCellexists(cols,rows) {
        if(cols >= this.numcols || cols < 0) {
          throw 'Versuche auf Spalte' + cols + 'zuzugreifen habe nur' + this.numcols + 'Spalten';
        }

        if (rows >= this.numrows || rows < 0) {
          throw 'Versuche auf Reihe' + rows + 'zuzugreifen habe nur' + this.numrows + 'Reihen';
        }
    }

    apply(callback) {
        for (let c = 0; c < this.numcols; c++) {
            for (let r = 0; r < this.numrows; r++) {
                let v = this.get(c,r);
                this.insertAt(c,r,callback(c,r,v));
            }
        }
    }

    each(callback) {
        for (let c = 0; c < this.numcols; c++) {
            for (let r = 0; r < this.numrows; r++) {
                let v = this.get(c,r);
                callback(c,r,v);
            }
        }
    }

    countNeighbors(cols, rows) {
        let sum = 0;
        for(var c = -1; c <= 1; c++) {
            for (var r = -1; r <= 1; r++) {
                let col = cols + c;
                let row = rows + r;
                if (this.has(col, row)) {
                    sum += this.get(col, row);
                }
            }
        }
        sum -= this.get(cols,rows);
        return sum;
    }

    has(cols,rows) {
        return (cols < this.numcols && cols >= 0) && (rows < this.numrows && rows >= 0);
    }

    iterateGameframe() {
        let next = new Grid(this.numcols, this.numrows);

        // Compute next based on grid
        for (let cols = 0; cols < this.numcols; cols++) {
            for (let rows = 0; rows < this.numrows; rows++) {
                let state = this.get(cols,rows);
                // Count live neighbors!
                let sum = 0;
                let neighbors = this.countNeighbors(cols, rows);

                if (state === 0 && neighbors === 3) {
                    next.insertAt(cols,rows,1);
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    next.insertAt(cols,rows,0);
                } else {
                    next.insertAt(cols,rows,state);
                }

            }
        }

        return next;

    }

    get(cols,rows) {
      this.assertCellexists(cols,rows);
          return this.arr[cols][rows];
    }
}
