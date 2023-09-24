class Mover {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.radius = 30;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(10);
  }

  show() {
    // Draw Mover
    fill('salmon');
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2);

    // Draw a line from Mover to the mouse cursor (red)
    stroke('black');
    line(this.position.x, this.position.y, mouseX, mouseY);

    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocity.x * 10,
      this.position.y + this.velocity.y * 10
    );
    stroke('red');
    let endX = this.position.x + (mouseX - this.position.x) * 0.1;
    let endY = this.position.y + (mouseY - this.position.y) * 0.1;
    line(this.position.x, this.position.y, endX, endY);

    // taeget.normalize();
    // taeget.mult(50);
    // strokeWeight(4);
    // stroke('blue');
    // line(this.position.x, this.position.y, mouseX, mouseY);

    // acceleration.mult(0.5);
    // strokeWeight(4);
    // stroke('lime');
    // line(this.position.x, this.position.y, mouseX, mouseY);
  }
}
