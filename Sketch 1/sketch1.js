//Sketch 1
//Referenced painting with pixels by David Shiftman: 
//https://www.youtube.com/watch?v=0V3uYA1hafk

//Lights referenced from the p5.js example:
//https://p5js.org/examples/3d-multiple-lights.html

//Mic Input refrenced from p5.js:
//https://p5js.org/examples/sound-mic-input.html

var capture;
//video-capture scale
var cScale = 16
//Array to hold particle objects
var particles = [];
//Slider for opacity of background
var slider;

function setup() {

	createCanvas(720, 480, WEBGL);
	//Having the background in setup, provides the cool effect of having the particles draw onto the background
	// background(0);

	slider = createSlider(0, 255, 100);
    slider.position(10, 10);
    slider.style('width', '80px');

	pixelDensity(1);
	capture = createCapture(VIDEO);
	capture.size(width/cScale, height/cScale);

	mic = new p5.AudioIn();
	fft = new p5.FFT();
	fft.setInput(mic);
	mic.start();
}

function draw() {
	//Function with background fill

	//Rotate allows you to move around the 3D space 
	//If the background is in the setup. rotate can be used to control where the particles "paint" next
	var degX = map(mouseX, 0, 800, 0, TWO_PI);
	var degY = map(mouseY, 0, 800, 0, TWO_PI);

	//Get the overall volume (from 0 to 1)
  	var vol = mic.getLevel();
  	//Mapping the volume to particle creation, the louder it is the smaller amout of particles
  	var n = map(vol, 0, 1, 50, 500);
  	
  	//The picture needs to be translated because in 3D, it went off the canvas
	translate(-width/2, -height/2, -10);
	
	if(mouseIsPressed){
		//For painting effect
	}else{
		greyScale();

		//Worked in earlier builds. Not working now.
		push();
		rotateX(degX);
		rotateY(degY);
		pop();
	}

	  //Create multiple particles at a time
	for(var i = 0; i < n; i++) {
	  	//The articles are spawned at the mouse
	 	particles[i] = new Particle(mouseX, mouseY, 0);

	 	//Particles are spawned in the centre of the canvas
	 	//particles[i] = new Particle(width/2, height/2, 0);
 	}

	picture();

	}

function Particle(x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;

	this.update = function(){
		this.x += random(-10, 10);
		this.y += random(-10, 10);
		this.z += random(-10, 10);
	}

	this.show = function(){
		noStroke();
		var px = floor(this.x/cScale); //Floor removes the decimal, leaving an integer
		var py = floor(this.y/cScale);
		var color = capture.get(px, py);
		console.log(color);
		
		//The colour of the video's pixels gets transfered over to the particles
		fill(color[0], color[1], color[2]);
		
		//ellipse(this.x, this.y, 24, 24);
		
		//Instead of using ellipses, I wanted to try creating something in 3D
		push();
		translate(this.x, this.y, this.z);
		//switches between spheres and boxes
		if(mouseIsPressed){
		sphere(random(5, 10));
		} else {
		box(random(5, 10));
		}
		pop();

	}
}

function picture(){
	capture.loadPixels();

	for(var i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
	}
}

function greyScale(){
	//Originally, with the slider I wanted to create a transparent effect with the background
	//instead it changes the background colour
	var val = slider.value();
  	// background(0, val);
  	 background(val);
}