let blocksSketch = function(p) {
    let img;
    let blocks = [];
    let selectedBlock = null;
    let blockSize = 8;

    p.setup = function() {
        let canvas = p.createCanvas(600, 400);
        canvas.parent('blocks-demo');
        // ... resto del codice ...
    };

    // ... tutte le funzioni dello sketch ...
};
new p5(blocksSketch);
