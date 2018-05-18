var angle = 0;
var angleX = 0;
var angleY = 0;
var angleO = 0;
var cam;

var fov = 1.5;


var hi;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
//    cam = createCapture(VIDEO);    
//    cam.size(320, 240);
//    cam.hide();
    frameRate(60);
    mic = new p5.AudioIn();
    fft = new p5.FFT();
  mic.start();
    fft.setInput(mic);
    
}


function draw() {
    background(250,250,155);
    
    
    
    var level = mic.getLevel();
 var spectrum = fft.analyze();
 var energybass = (fft.getEnergy('bass'))/2;
 var energylowmid = fft.getEnergy('lowMid');
 var energymid = (fft.getEnergy('mid'))/2;
 var energyhighmid = fft.getEnergy('highMid');
 var energytreble = (fft.getEnergy('treble'))/2;
 var hi = map(level, 0, 1, 0, 255);
 var pos = map(level, 0, 1, 0, 360);
 var freq = map(spectrum, 0, 1, 0, 360);

    
    
    
    
    
    
    
    let dx = mouseX - width/2;
    let dy = mouseY - height/2;
    let v = createVector(dx,-dy,0);
    v.div(500);
    
pointLight(255,0,0,v);
//pointLight(255,255,255,100-windowWidth, 100-windowHeight);
    

    perspective(fov, width/height,0,100);
    push();
    rectMode(CENTER);
//    normalMaterial();
//    ambientMaterial(255, 255, 100);
//    texture(cam);
    noStroke();
    //TRANSLATES ARE GOOD FOR MOVEMENT
//    translate(windowWidth/2,windowHeight/2);    
    translate(mouseX-windowWidth/2,mouseY-windowHeight/2,0);
    rotateZ(angle);
    rotateY(angle);
//    sphere(200,60);
    pop()
    
    push();
    beginShape(LINES);
    rectMode(CENTER);
//    rotateZ(angle);
    rotateY(angle);
    rotateX(PI/3);
//    rotateZ(angleX*0.1);
////    box(100,100,100);
//    fill(255);
    normalMaterial(255);
    strokeWeight(5);
    
    vertex(-200,0,0);
    vertex(-150,50,energybass*1.5);
    vertex(-150,50,energybass*1.5);
    vertex(-50,150,energybass*-1.5);
    vertex(-50,150,energybass*-1.5);
    vertex(0,200,0);
    
    vertex(-100,-100,0);
    vertex(-60,-60,energymid*1.5);
    vertex(-60,-60,energymid*1.5);
    vertex(-20,-20,energymid);
    vertex(-20,-20,energymid);
    vertex(20,20,energymid*-1.5);
    vertex(20,20,energymid*-1.5);
    vertex(60,60,energymid);
    vertex(60,60,energymid);
    vertex(100,100,0);
    
    vertex(200,0,0);
    vertex(150,-50,energytreble*1.5);
    vertex(150,-50,energytreble*1.5);
    vertex(100,-100,energytreble*-1.5);
    vertex(100,-100,energytreble*-1.5);
    vertex(50,-150,energytreble*1.5);
    vertex(50,-150,energytreble*1.5);
    vertex(0,-200,0);
    endShape();
    
    angle += 0.0015;
    fov -= 0.0002;
//    console.log(fov);
    pop();
    
////    angle += (mouseX+mouseY)/1000;
//    angleX += dy/1000;
//    angleY += dx/1000;
//    

    
}