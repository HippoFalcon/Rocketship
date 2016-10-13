function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  background(0,0,0);
  var x = mouseX;
  var y = mouseY;
  //Rectangular Body
  fill(198, 196, 192)
  noStroke()
  rect(x, y, 45, 100);
  
  //triangular cone piece
  fill(249, 242, 14)
  triangle( x , y , mouseX-45 , mouseY+45, mouseX+35 , mouseY-40);
}
