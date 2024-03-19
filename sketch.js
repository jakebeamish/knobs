function setup() {
  createCanvas(windowWidth, windowHeight);
  // console.log("Canvas size:", windowWidth, windowHeight);
  // noFill();
  // noSmooth();
  // noLoop();
}

function draw() {
  clear();

  background(255);
  strokeWeight(1);

  const knob = new Knob(width/2, height/2, 200, 0, PI*1.6, 0, true, 0.7);

  knob.value = 1 - ((cos(frameCount * 0.02) + 1) / 2);

  // knob.radius = 50 + (knob.value * 20);

  knob.draw();

}

class Knob {
  constructor(x, y, radius, rotation, range, value, hasTop, topSize) {
    this.position = createVector(x, y);
    this.radius = radius;
    this.rotation = rotation;
    this.range = range;
    this.value = value;
    this.angleOffset = (TAU - this.range) / 2;
    this.hasTop = hasTop;
    this.topSize = this.hasTop? topSize * this.radius : 0;
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);

    rotate(this.rotation);
    noFill();
    circle(0, 0, this.radius * 2);
    arc(0, 0, this.radius * 2.2, this.radius * 2.2, PI/2 + this.angleOffset, PI/2 - this.angleOffset)
    
    rectMode(CENTER)
    fill(0)
    textSize(this.radius / 4)
    textAlign(CENTER)
    text(this.value.toFixed(2), 0, this.radius * 1.3)

    rotate(this.angleOffset + PI);

    for (let i = 0; i <= 10; i++) {
      push();
      rotate((i/10) * this.range)
      line(0,-this.radius * 1.1, 0, -this.radius * 1.2)
      pop();
    }
    noFill();
    rotate(this.value * this.range)
    circle(0, 0, this.topSize * 2)
    line(0, -this.topSize, 0, -this.radius);
    pop();
  }
}
