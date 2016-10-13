function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {

  background(0,0,0);
  var x = mouseX;
  var y = mouseY; 
  
  //Rectangular Body
  fill(198, 196, 192);
  noStroke();
  rect(x, y, 45, 100);
  
  //triangular cone piece
  fill(249, 242, 14);
  triangle(x,y,x+22.5,y-25,x+45,y);
  
  //circular window
  fill(193, 191, 197);
  ellipse(x+22.5,y-22.5,-45,45);
}
