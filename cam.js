
function preLoad() {
    maskImage = loadImage('mask.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    cam = createCapture(VIDEO);
    cam.size(windowWidth, windowHeight);
    
}

function draw() {
    background(0);
    
    cam.mask(maskImage);
    fill(cam);  
    rect(30, 20, 55, 55);
    
    
    
}