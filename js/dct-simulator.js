let dctSketch = function(p) {
    let blockSize = 8;
    let grid = [];
    
    p.setup = function() {
        let canvas = p.createCanvas(500, 500);
        canvas.parent('dct-demo');
        // ... resto del codice ...
    };
    
    // ... tutte le funzioni dello sketch ...
};
new p5(dctSketch);
