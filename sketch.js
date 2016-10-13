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
  fill(249, 242, 14)
  triangle(x,y,x-22.5,y+25,x+45,y);
  
  //light?
  size(100, 100, P3D);
  background(0);
  noStroke();
  // Sets the default ambient 
  // and directional light
  lights();
  translate(20, 50, 0);
  sphere(30);
  translate(60, 0, 0);
  sphere(30);
}
