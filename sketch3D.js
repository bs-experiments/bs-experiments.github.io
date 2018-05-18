var scribble = new Scribble();
levelhistory = [];
var energybass;
var rhino;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    rhino = loadModel('Rhino.obj');
    frameRate(60);

}


function draw() {
    background(2);

    camera(0, 0, 1000, 0, 0, frameCount * 0.2);

    cursor(HAND);

    var angle = 0;
    var angleX = 0;
    var angleY = 0;
    var cam;


    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let v = createVector(dx, dy, 0);
    let ligh = createVector(0, 0, -600);
    let lig = createVector(-1000, 0, -300);
    ligh.normalize();
    lig.normalize();
    v.div(1000);

    directionalLight(250, 250, 250, ligh);
    directionalLight(150, 150, 250, lig);
    pointLight(250, 0, 0, dx, dy);

    var radius = width * 1.5;

    //drag to move the world.
    orbitControl();

    push();
    translate(0, 0, 0);
    plane(500, 500);
    specularMaterial(1500);
    fill(0,0,155);
    translate(500, -500, -1500);
    rotateY(15);
    rotateX(15);
    plane(3000, 2000);

    pop();

    //    translate(0, 0, -600);
    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            push();
            var a = j / 12 * PI;
            var b = i / 8 * PI;
            translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
            if (j % 2 === 0) {
                push();
                rotateY(angleY);
                rotateZ(angleX * 0.1);
                ambientMaterial(100);
                sphere(150);
                rotateY(frameCount * 0.02);
                rotateX(frameCount * 0.02);
                translate(500, 0, 0);
                fill(255);
                specularMaterial(10250);
                box(150);
                //    scale(12);
                //    model(sims);
                pop();
                push();
                rotateX(15);
                rotateY(15);
                translate(-500, -200, 0);
                cone(150, 400);
                pop();
            } else {
                push();

                rotateY(frameCount * -0.02);
                rotateX(frameCount * -0.02);
                translate(500, 0, 0);

                specularMaterial(10250);
                scale(50);
                //                translate(dx,dy,0);
                model(rhino);

                pop();

            }
            pop();
        }
    }
    rotateX(PI / 4);
    translate(0, 0, 2500);
    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            push();
            var a = j / 12 * PI;
            var b = i / 8 * PI;
            translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
            if (j % 2 === 0) {
                push();
                rotateY(angleY);
                rotateZ(angleX * 0.1);
                ambientMaterial(100);
                sphere(150);
                rotateY(frameCount * 0.02);
                rotateX(frameCount * 0.02);
                translate(500, 0, 0);
                fill(255);
                specularMaterial(10250);
                box(150);
                //    scale(12);
                //    model(sims);
                pop();
                push();
                rotateX(15);
                rotateY(15);
                translate(-500, -200, 0);
                cone(150, 400);
                pop();
            } else {
                push();

                rotateY(frameCount * -0.02);
                rotateX(frameCount * -0.02);
                translate(500, 0, 0);

                specularMaterial(10250);
                scale(50);
                //                translate(dx,dy,0);
                model(rhino);

                pop();

            }
            pop();
        }
    }
}

//function draw() {
// background(200);
//// var level = mic.getLevel();
//// var spectrum = fft.analyze();
//// var energybass = fft.getEnergy('bass');
//// var energylowmid = fft.getEnergy('lowMid');
//// var energymid = fft.getEnergy('mid');
//// var energyhighmid = fft.getEnergy('highMid');
//// var energytreble = fft.getEnergy('treble');
//// var col = map(level, 0, 1, 0, 255);
//// var pos = map(level, 0, 1, 0, 500);
//// var freq = map(spectrum, 0, 1, 0, 500);
////
////
//////ultralowered settings
//// if(col > 230){
////  background(252, 181+col*2, 127+col*2);
//// }
//// else if(col <= 70){
////  background(252-col*3, 181+col, 127 + col*2);
////  }
//// else if(col <= 150 && col > 70){
////  background(252-col*3, 181+col*2, 127 + col);
////  }
//// else if(col > 150 && col <149){
////  background(252-col*3,181+col*3, 127-col);
//// }
//
//    
//}
//    
//
//
//function draw(){
////    background(244,92,66);
//    
//var angle = 0;
//var angleX = 0;
//var angleY = 0;
//var cam;
//
//        camera(+250,150,0)
//
//
////    background(155,0,250);
//    let dx = mouseX - width/2;
//    let dy = mouseY - height/2;
//    let v = createVector(dx,dy,0);
//    v.div(1000);
//    
//directionalLight(100,(50+frameCount * 0.2),0,0.1,v);
//pointLight(250, 250, 250, dx, dy, 50);
//
//    orbitControl();
//    
////    let fov = PI/2;
////    perspective(fov, width/height,0,);
//    rectMode(CENTER);
////    normalMaterial();
//    ambientMaterial(250);
////    texture(scribble);
////    noStroke();
//    //TRANSLATES ARE GOOD FOR MOVEMENT
//    //translate(mouseX-width/2, mouseY-height/2);    
//    push();
//    rotateY(angleY);
//    rotateZ(angleX*0.1);
////    box(100,100,100);
//    sphere(150);
//    rotateY(frameCount * 0.02);
//    translate(500,0,0);
//    fill(255);
//    specularMaterial(10250);
//    box(150);
////    scale(12);
////    model(sims);
//    pop();
//    push();
//    rotateX(15);
//    rotateY(15);
//    translate(-500,-200,0);
//    cone(150, 400);
//    pop();
//  
//    
//    rotateX(90);
//    translate(500, 5000,0);
//    push();
//    rotateY(angleY);
//    rotateZ(angleX*0.1);
////    box(100,100,100);
//    sphere(150);
//    rotateY(frameCount * 0.02);
//    translate(500,0,0);
//    fill(255);
//    specularMaterial(10250);
//    box(150);
////    scale(12);
////    model(sims);
//    pop();
//    push();
//    rotateX(15);
//    rotateY(15);
//    translate(-500,-200,0);
//    cone(150, 400);
//    pop();
//    
//    
//    
////    angle += 0.2;
////    angle += (mouseX+mouseY)/1000;
//    angleX += dy/1000;
//    angleY += dx/1000;
//}
// 
//
