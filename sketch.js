function setup() {
  createCanvas(800, 800);
     background("red");

}

function draw() {
 
  stroke("green");
  fill ("blue");
 
  if(mouseIsPressed){
    circle(mouseX, mouseY, 50, 40);
  }
}