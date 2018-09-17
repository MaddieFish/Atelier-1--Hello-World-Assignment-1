//Sketch 4

function setup(){
	createCanvas(800, 800);
}

function draw(){
	background(100, 30, 80);
	translate(width/2, height/2);

	for(var n = 0; n < 30; n++){
		//Switches between different colour fills and starting with
		//a different number of seperate groups of shapes the 3+ and 10+ changes the initial grouping formation
		if(mouseIsPressed){
			rotate(3+(PI/sqrt(mouseX)));
			fill(n*20, 100, mouseY);

		}else{
			rotate(10+(PI/sqrt(mouseY)));
			fill(mouseX, 100, n*10);

		}

		design();
	}

}

//A seperate design function to clean up and seperate the code
function design(){
	strokeWeight(5);
	line(30, 20, mouseX, mouseY);
	for(var k = 0; k< 5; k++){
		noStroke();
		rect(mouseX, 0, 50, 10 + mouseY, k*10);
		rect(mouseX, 50, k*10, 10 + mouseY, k*10);
	}
}

//ERROR MESSAGE
//p5.js:51485 Uncaught DOMException: Failed to execute 'arcTo' on 'CanvasRenderingContext2D': The radius provided (-4) is negative.
//at p5.Renderer2D.rect 