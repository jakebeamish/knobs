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
  strokeWeight(2);

  const knob = new Knob(width/2, height/2, 200, 0, PI*1.6, 0);

  knob.value = 1 - ((cos(frameCount * 0.02) + 1) / 2);

  // knob.radius = 50 + (knob.value * 20);

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
    push();
    translate(this.position.x, this.position.y);

    rotate(this.rotation);
    noFill();
    circle(0, 0, this.radius * 2);
    arc(0, 0, this.radius * 2.2, this.radius * 2.2, PI/2 + this.angleOffset, PI/2 - this.angleOffset)
    
    rectMode(CENTER)
    // rect(0, this.radius * 1.2, 20, 20);
    fill(0)
    textSize(20)
    textAlign(CENTER)
    text(this.value.toFixed(2), 0, this.radius * 1.2)

    rotate(this.angleOffset + PI);

    for (let i = 0; i <= 10; i++) {
      push();
      rotate((i/10) * this.range)
      line(0,-this.radius * 1.1, 0, -this.radius * 1.2)
      pop();
    }

    rotate(this.value * this.range)
    line(0, -this.radius/2, 0, -this.radius);
    pop();
  }
}
