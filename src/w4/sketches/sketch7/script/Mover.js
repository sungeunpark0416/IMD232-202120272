class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.radius = this.mass ** 0.5 * 10;
    this.accDisplay = createVector(0, 0);
    this.isHover;
    this.isDragging;
    this.draggingOffset;
  }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  // checkEdges() {
  //   const bounceFactor = map(this.pos.y, 0, height - 1, 0.2, 1.0); // 위치에 따라 바운스 팩터 조절

  //   if (this.pos.x < 0 + this.radius) {
  //     this.pos.x = this.radius;
  //     this.vel.x *= -bounceFactor;
  //   } else if (this.pos.x > width - 1 - this.radius) {
  //     this.pos.x = width - 1 - this.radius;
  //     this.vel.x *= -bounceFactor;
  //   }
  //   if (this.pos.y > height - 1 - this.radius) {
  //     this.pos.y = height - 1 - this.radius;
  //     this.vel.y *= -bounceFactor;
  //   }
  // }

  edgeBounce() {
    const bounce = -0.7;
    if (this.pos.x < 0 + this.rad) {
      this.pos.x = 0 + this.rad;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.pos.x = width - 1 - this.rad;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.rad) {
      this.pos.y = height - 1 - this.rad;
      this.vel.y *= bounce;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    // stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    // stroke('lime');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }
}
