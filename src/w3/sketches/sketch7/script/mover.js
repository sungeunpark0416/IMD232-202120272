class Ball {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
  }

  update() {
    const randomAcceleration = p5.Vector.random2D();
    this.acceleration.mult(1);
    this.acceleration = randomAcceleration;
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(10);
    this.acceleration.limit(2);

    this.checkEdges();

    return this;
  }

  checkEdges() {
    if (this.position.x < 0) {
      this.position.x = width;
    } else if (this.position.x > width) {
      this.position.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
    } else if (this.position.y > height) {
      this.position.y = 0;
    }
  }

  display() {
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.acceleration.x * acceleration,
      this.position.y + this.acceleration.y * acceleration
    );

    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocity.x * velocity,
      this.position.y + this.velocity.y * velocity
    );

    let vectorX = mouseX - this.position.x;
    let vectorY = mouseY - this.position.y;

    fill('salmon');
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2);

    stroke(0);
    line(
      this.position.x,
      this.position.y,
      this.position.x + vectorX,
      this.position.y + vectorY
    );
    return this;
  }
}
