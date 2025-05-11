let quantSketch = function(p) {
    let img;
    let quality = 50;
    
    p.preload = function() {
        img = p.loadImage('https://upload.wikimedia.org/.../sample.jpg');
    };
    
    p.setup = function() {
        let canvas = p.createCanvas(800, 400);
        canvas.parent('quant-demo');
        // ... resto del codice ...
    };
    
    // ... tutte le funzioni dello sketch ...
};
new p5(quantSketch);
