function setup() {
  createCanvas(windowWidth, windowHeight);
	ellipseMode(CENTER);
  background(0)
}

function draw() {
  background(0,20);
	translate(width/2, height/2);
	fill('hotpink');
	stroke('hotpink');
	let rate = frameCount*0.02;
	let rate1 = frameCount*0.08;
	
	let x = 200*pow(sin(rate),3);
	let y = 150*cos(rate) - 65*cos(2*rate) - 20*cos(3*rate) - 12*cos(4*rate);
	let x1 = 200*pow(sin(rate1),3);
	let y1 = 150*cos(rate1) - 65*cos(2*rate1) - 20*cos(3*rate1) - 12*cos(4*rate1);
	circle(x,-y, 10, 10);
	circle(-x,-y, 10, 10);
	circle(x1,-y1, 10, 10);
	circle(-x1,-y1, 10, 10);
	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
   background(0);
}
