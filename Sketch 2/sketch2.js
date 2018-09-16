//Sketch 2

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    //create canvas size based of the window's dimensions
    ellipseMode(CENTER);
    //The first two parameters will be interpreted as the center point of the ellipse
}

function draw() {
  // put drawing code here
    background(0, 10); 
    //The second variable in the background is the alpha, which effects the opacity of a colour value in functions like background and fill. It creates a fading out effect.
    fill(mouseX, mouseY, 80); 
    strokeWeight(0);
    push();
    translate(mouseX, mouseY); 
    //The origin point is translated according to mouse movements
    rotate(frameCount/20);
    for(var i = 0; i < 10; i++){
         ellipse(-29, 50, 50, 50);
         ellipse(58, 0, 50);
         ellipse(-29, -50, 50, 50);
         //Trig was used to translate the ellipses in an equilateral triangle formation around the mouse
    }
    pop();
}