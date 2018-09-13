function setup() {
  // put setup code here
    createCanvas(500, 500);
}

function draw() {
  // put drawing code here
    background(0, 10); //The second variable in the background is the alpha, which effects the opacity of a colour value in functions like background and fill. It creates a fading out effect.
    
    fill(mouseX, mouseY, 80); 
    strokeWeight(0);
    push();
    translate(mouseX, mouseY);
    rotate(frameCount/20);
    for(var i = 0; i < 10; i++){
         ellipse(50, 50, 50, 50);
         ellipse(-60, 0, 50, 50);
         ellipse(50, -50, 50, 50);
    }
    pop();
}