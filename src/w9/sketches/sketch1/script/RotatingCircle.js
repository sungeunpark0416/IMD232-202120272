class RotatingCircle {
  constructor(x, y, radius, angle, circleColor) {
    this.origin = createVector(x, y);
    this.position = createVector(x, y - radius);
    this.radius = radius;
    this.angle = angle; // 시작 각도
    this.angularVelocity = 0.02; // 각속도
    this.color = circleColor; // 원의 색상
  }

  update() {
    this.angle += this.angularVelocity;
  }

  display() {
    this.position.x = this.origin.x + this.radius * cos(this.angle);
    this.position.y = this.origin.y + this.radius * sin(this.angle);

    fill(this.color);
    ellipse(this.position.x, this.position.y, 2 * this.radius);
  }
}
