function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("Canvas size:", windowWidth, windowHeight);
}

function draw() {
  clear();

  let position = createVector(windowWidth / 2, windowHeight / 2);
  circle(position.x, position.y, 100);
  line(position.x, position.y, position.x, position.y - 50)
}
