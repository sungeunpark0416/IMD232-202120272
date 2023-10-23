class Particle {
  constructor(x, y, verticalSpeed, color) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, verticalSpeed);
    this.size = 10;
    this.rotation = 0;
    this.rotationSpeed = random(-0.1, 0.1);
    this.color = color;
  }

  update() {
    this.pos.add(this.vel);
    this.rotation += this.rotationSpeed;

    if (this.rotation >= TWO_PI) {
      this.rotation -= TWO_PI;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(this.color);
    noStroke();
    rotate(this.rotation);
    rect(0, 0, this.size, this.size);
    pop();
  }

  isOffScreen() {
    return this.pos.y > height;
  }
}
