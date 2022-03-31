// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Game of Life
// Video: https://youtu.be/FWSR_7kZuYg

let grid;
let cols;
let rows;
let resolution = 10;

function setup() {
    createCanvas(700, 600);
    cols = width / resolution;
    rows = height / resolution;
    drawer = new GridDraw2D(resolution);
    frameRate(100);



    grid = new Grid(width/resolution, height/resolution);

    grid.apply(function (c, r, v) {
        return floor(random(2));
    })
}

function draw() {
    background(0);
    drawer.draw(grid);

grid = grid.iterateGameframe();
//exit();
//exit();
}

