function setup() {
  createCanvas(windowWidth, windowHeight);
  // console.log("Canvas size:", windowWidth, windowHeight);
  noFill();
  // noLoop();
}

function draw() {
  clear();

  const knob = new Knob(width/2, height/2, 50, 0, PI*1.6, 0);

  knob.value = 1 - (cos(frameCount * 0.01) + 1) / 2;

  knob.radius = 50 + (knob.value * 10)

  knob.draw();

}

class Knob {
  constructor(x, y, radius, rotation, range, value) {
    this.position = createVector(x, y);
    this.radius = radius;
    this.rotation = rotation;
    this.range = range;
    this.value = value;
    this.angleOffset = (TAU - this.range) / 2;
  }

  draw() {
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    circle(0, 0, this.radius * 2);
    arc(0, 0, this.radius * 2.2, this.radius * 2.2, PI/2 + this.angleOffset, PI/2 - this.angleOffset)
    rotate(this.angleOffset + PI + (this.value * this.range))
    line(0, 0, 0, -this.radius);
  }
}
