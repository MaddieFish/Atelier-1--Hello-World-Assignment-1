/*Sketch 3 
This code was originally a processing code that I created
When I transfered it over to p5.js, I had to change a lot of code to make it work
Interestingly enough, a lot of code that was important in the processing version, really didn't do anything in the p5.js version
*/
var a = 0; //for rotating animation

function setup(){
	//WEBGL is a renderer that must be used to use 3 dimensions
    createCanvas(1200, 800, WEBGL);
}

function draw(){
	//draw screen
    background(30, 150, 230);
    //pushes the default origin point farther back along the z-axis to allow the spinner to remain completely in the confinements of the canvas
    translate(0, 0, -400);
    //animates the top along a circular path (in 3D)
    rotateY(PI/8+a/100);

    push();
    spinner();
    pop();

    //variable for changing the speed of the spinner
    a = a + 2;
    
}

function spinner(){
   beginShape();
   noFill();
   stroke(255);
   strokeWeight(10)
   //translation moves the custom shape
   translate(width/8, 0, -300);
   //animates the spin of the top
   rotateY(PI/8+a);
   //translation allows the spinner shape to rotate along its vertical line (y-axis) of symmetry
   translate(-width/2, -height/2, 0);
   //custom 2D shape
	  curveVertex(600, 0);
	  curveVertex(640, 280);
	  curveVertex(680, 360);
	  curveVertex(760, 420);
	  curveVertex(920, 480);
	  curveVertex(720, 560);
	  curveVertex(600, 800);
	  curveVertex(480, 560);
	  curveVertex(280, 480);
	  curveVertex(440, 420);
	  curveVertex(520, 360);
	  curveVertex(560, 280);
	  curveVertex(600, 0);
	  curveVertex(640, 280);
	  curveVertex(680, 360);
	  curveVertex(760, 420);
	endShape();
}