class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1; // Mass of the ball
    this.radius = radius; // Radius of the ball
    this.isHover = false;
    this.isDragging = false;
    this.draggingOffset = createVector();
  }

  applyForce(force) {
    const f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    // Prevent the ball from going off the canvas
    this.pos.x = constrain(this.pos.x, this.radius, width - this.radius);
    this.pos.y = constrain(this.pos.y, this.radius, height - this.radius);
  }

  display() {
    if (this.isDragging) {
      fill(150);
    } else {
      fill(0);
    }
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}
