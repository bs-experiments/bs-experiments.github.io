var levelhistory = [];
var energybass;
var sims;
var cam;
var img;
var value = 0;

var options, option1, option2;
var oioi;


var cols, rows;
var scl = 10;
var w = 1000;
var h = 1000;
var inc = 0;

var flying = 0;

var terrain = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cols = w / scl;
    rows = h / scl;
    
    img = loadImage("verde.jpg");

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
        cam.hide();

    
    sims = loadModel('sims.obj');
    

    
   


}

function draw() {
    background(0);

    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let v = createVector(dx, -dy, 0);
    v.div(500);

    camera(-200,0,500*energybass);

    var level = mic.getLevel();
    var spectrum = fft.analyze();

    var energybass = fft.getEnergy('bass');
    var energylowmid = fft.getEnergy('lowMid');
    var energymid = fft.getEnergy('mid');
    var energyhighmid = fft.getEnergy('highMid');
    var energytreble = fft.getEnergy('treble');

    var maplevel = map(level, 0, 1, 0, 255);
    var pos = map(level, 0, 1, 0, 500);
//    var freq = map(spectrum, 0, 1, 0, 500);

    var sound = (energybass*2 + energyhighmid)*0.4;
    orbitControl();


    inc += 0.001;
push();
    flying -= 0.05;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -sound-1.3, sound*1.3);
            xoff += 0.05;
        }
        yoff += 0.06;
    }
    
    push();
    rotateY(60);
    rotateX(90);
    rotateZ(0);
    translate(300, 100);
//    rotateX(-PI / 7);
    translate(-windowWidth / 2, -windowHeight / 2, 100);

    fill('rgba(80%,80%,50%,0.1)');

    
    strokeWeight(50);
    
    beginShape(LINES);
    for (var y = 0; y < rows - 1; y++) {
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
    }
    
    endShape();
    
   pop();
    
    
    
    
    
    
    
    push();
    
   
    translate(-200,-350,-000);
    rotateZ(-150);
    rotateX(250+inc*5);
    rotateY(-50);
    scale(1,0.2);
    texture(cam);
    torus(400,200);
        
    pop();
    
    
    push();
    
   
    translate(-200,+350,-000);
    rotateZ(0);
    rotateX(250+inc*5);
    rotateY(-50);
    scale(1,0.2+inc*2);
    texture(cam);
    torus(200,200);
        
    pop();
   
    
    
    

    
//    ______________________-
    
    
    
var angle = 0;
var angleX = 0;
var angleY = 0;
    
options = 20;

    
let vvv = createVector(dx,dy,0);
    v.normalize();
    
directionalLight(15,15,15, 0,-500,2500);
//directionalLight(60,60,60,0.1,0,20,600);
//pointLight(0,0,255,6,v);

//    orbitControl();
//    let fov = PI/2;
//    perspective(fov, width/height,0,);
   
    var side = 10000;
    if (keyIsDown(ENTER)) {
        var side = -225;
    }
    
    rectMode(CENTER);
    ambientMaterial(250);

    //TRANSLATES ARE GOOD FOR MOVEMENT
    texture(img);
    translate(side,0);
    push();
//    box(100,100,100);
//    sphere(150*energybass);
    rotateY(frameCount * 0.02);
    scale(20);
    model(sims);
    pop();
    
    
//    push();
//    translate(side,0);
////    blendMode(LIGHTEST);
//    fill(0)
//    rect(5000,3000);
//    
//    
//    pop();
    
    angleX += dy/1000;
    angleY += dx/1000;
    
    
}





 