//Sketch 5
function setup(){
	createCanvas(800, 800, WEBGL)
	angleMode(DEGREES);
}

function draw(){
	//Mapping the mouse values to 360 deg of rotation
	var degX = map(mouseX, 0, 800, 0, 360);
	var degY = map(mouseY, 0, 800, 0, 360);


	background(0);
	// stroke(255);
	// noFill();
	// drawCircle(400, 400, 400);
	rotateX(degY);
	rotateY(degX);

	createSphere(0, 0, 0, 100, 6);
}

// function drawCircle(x, y, d){
// 	ellipse(x, y, d)
// 	if(d > 2){
// 		drawCircle(x + d * 0.5, y, d*0.5);
// 		drawCircle(x - d * 0.5, y, d*0.5);

// 	}
//}

function createSphere(x, y, z, r, level){
	//For each new recursive level the opacity of the created spheres becomes darker and darker
	var c = 15 * level;
	fill(255, c);

	push();
	translate(x, y, z);
	sphere(r);
	pop();
	//Levels for recursive functions was referenced from the p5.js example:
	//https://p5js.org/examples/structure-recursion.html 
	if(r > 4 || level > 1){
		level = level -1;
		push();
		createSphere(x + r * 1.75, y + r * 1.5, z, r * 0.5, level);
		pop();
		push();
		createSphere(x - r * 1.75, y - r * 1.5, z, r * 0.5, level);
		pop();

		if(r>4||level>1){
			push();
			createSphere(x , y, z + r * 1.75, r * 0.5, level);
			pop();
			push();
			createSphere(x , y, z - r * 1.75, r * 0.5, level);
			pop();
		}
	}
}







