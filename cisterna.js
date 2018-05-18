var scribble = new Scribble();
levelhistory = [];


var cols, rows;
var scl = 20;
var w = 300;
var h = 300;
var inc = 0;

var flying = 0;

var terrain = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cols = w / scl;
    rows = h / scl;

    for (var x = 0; x < cols; x++) {
        terrain[x] = [];
        for (var y = 0; y < rows; y++) {
            terrain[x][y] = 0; //specify a default value for now
        }
    }

    mic = new p5.AudioIn();
    fft = new p5.FFT();
    mic.start();
    fft.setInput(mic);
    frameRate(40);
        cam = createCapture(VIDEO);
        cam.size(1200, 720);
    //    cam.hide();
}

function draw() {
    background(cam);

    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let v = createVector(dx, -dy, 0);
    v.div(500);

    ambientLight(255);
//    perspective(60);
    camera(-10,-00,-400)

    push();
    ambientMaterial(20);
    //    texture(cam);
    //    translate(0-windowWidth/2, 0-windowHeight/2, 0);
    translate(0, 0, 0);
//    box(windowWidth, windowHeight, -50);
    pop();

    var level = mic.getLevel();
    var spectrum = fft.analyze();

    var energybass = fft.getEnergy('bass');
    var energylowmid = fft.getEnergy('lowMid');
    var energymid = fft.getEnergy('mid');
    var energyhighmid = fft.getEnergy('highMid');
    var energytreble = fft.getEnergy('treble');

    var maplevel = map(level, 0, 1, 0, 255);
    var pos = map(level, 0, 1, 0, 500);
    var freq = map(spectrum, 0, 1, 0, 500);

    var sound = (energybass + energytreble) - 0.6;


    stroke(255,0,0);
    
    inc += 0.001;

    flying -= 0.05;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -sound, sound);
            xoff += 0.05;
        }
        yoff += 0.06;
    }

//    rotateY(inc*5);
//    rotateZ(inc*2  );
    translate(0, 0);
//    rotateX(-PI / 7);
    translate(-w / 2, -h / 2, 0);
    fill(200, 0, 0);

    beginShape(LINES);
    for (var y = 0; y < rows - 1; y++) {
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
    }
    endShape();
    
    translate(1,1);
     beginShape(LINES);
    for (var y = 0; y < rows - 1; y++) {
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
    }
    endShape();
    
    translate(-1,-1);
     beginShape(LINES);
    for (var y = 0; y < rows - 1; y++) {
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
    }
    endShape();
    
    translate(10,10);
     beginShape(LINES);
    for (var y = 0; y < rows - 1; y++) {
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
    }
    endShape();
    
    translate(-10,-10);
     beginShape(LINES);
    for (var y = 0; y < rows - 1; y++) {
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
    }
    endShape();




}
