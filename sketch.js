function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("Canvas size:", windowWidth, windowHeight);
}

function draw() {
  clear();

  let position = createVector(windowWidth / 2, windowHeight / 2);
  drawKnob(position, 50, PI/4);
}

function drawKnob(position, radius, rotation) {
  translate(position.x, position.y);
  rotate(rotation);
  circle(0, 0, radius * 2);
  line(0, 0, 0, radius)
}