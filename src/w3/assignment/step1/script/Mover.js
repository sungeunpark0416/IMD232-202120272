class Mover {
  constructor(x, y) {
    this.position = createVector(width / 2, height / 2);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.radius = 30;
  }

  update() {
    const randomAcceleration = p5.Vector.random2D();
    this.acceleration = randomAcceleration;

    // this.velocity = createVector(0, 1);
    // this.velocity.rotate(random(TAU));

    this.acceleration.mult(1);

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

  show() {
    // 가속도 벡터
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.acceleration.x * acceleration,
      this.position.y + this.acceleration.y * acceleration
    );

    // 속도 벡터
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocity.x * velocity,
      this.position.y + this.velocity.y * velocity
    );

    // 마우스에서 벡터 계산
    let vectorX = mouseX - this.position.x;
    let vectorY = mouseY - this.position.y;

    // 움직이는 Mover
    fill('salmon');
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2);

    // 마우스에서 Mover
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
