function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  
  for(int i=0; i<100; i++) {

  float r = random(-50, 50);

  stroke(abs(r*5));

  ellipse(50, i, 50+r, i);

  background(0,0,0);
  var x = mouseX;
  var y = mouseY; 
  
  //Rectangular Body
  fill(198, 196, 192);
  noStroke();
  rect(x, y, 45, 100);
  
  //triangular cone piece
  fill(249, 242, 14)
  triangle(x,y,x-22.5,y+25,x+45,y);
}
