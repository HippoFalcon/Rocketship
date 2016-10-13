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
  triangle( mouseX+40 , mouseY+30 , mouseX-40 , mouseY+30, mouseX , mouseY-40);
}
