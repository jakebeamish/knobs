function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("Canvas size:", windowWidth, windowHeight);
}

function draw() {
  clear();

  const knob = new Knob(width/2, height/2, 50, PI/4);
  knob.draw();

}

class Knob {
  constructor(x, y, radius, rotation) {
    this.position = createVector(x, y);
    this.radius = radius;
    this.rotation = rotation;
  }

  draw() {
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    circle(0, 0, this.radius * 2);
    line(0, 0, 0, this.radius);
  }
}