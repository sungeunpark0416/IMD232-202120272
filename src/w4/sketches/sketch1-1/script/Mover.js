// class Mover {
//   constructor(x, y, radius) {
//     this.pos = createVector(x, y);
//     this.vel = createVector(0, 0);
//     this.acc = createVector(0, 0);
//     this.radius = radius;
//     this.mass = radius ** (1 / 2);
//   }

//   applyForce(force) {
//     let dividedForce = p5.Vector.div(force, this.mass);
//     this.acc.add(dividedForce);
//   }

//   update() {
//     this.vel.add(this.acc);
//     this.pos.add(this.vel);
//     this.acc.mult(0);
//   }

//   edgeBounce() {
//     if (this.pos.x < 0 + this.radius || this.pos.x > width - this.radius) {
//       this.vel.x *= -1;
//     }
//     if (this.pos.y < 0 + this.radius || this.pos.y > height - this.radius) {
//       this.vel.y *= -1;
//     }
//   }
// }

class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  applyForce(force) {
    let dividedForce = p5.Vector.div(force, this.mass);
    this.acc.add(dividedForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  //   edgeBounce() {
  //     if (this.pos.x < 0 + this.radious) {
  //       let delta = this.pos.x - (0 + this.radious);
  //       this.pos.x += -2 * delta;
  //       this.vel.x *= -1;
  //     } else if (this.pos.x > height - 1 - this.radious) {
  //       let delta = this.pos.x - (height - 1 - this.radious);
  //       this.pos.x += -2 * delta;
  //       this.vel.x *= -1;
  //     }
  //     if (this.pos.y > height - 1 - this.radious) {
  //       let delta = this.pos.y - (height - 1 - this.radious);
  //       this.pos.y += -2 * delta;
  //       this.vel.y *= -1;
  //     }
  //   }

  //   edgeBounce() {
  //     if (this.pos.x < 0 + this.radius) {
  //       this.pos.x = 0 + this.radius;
  //       this.vel.x *= -1;
  //     } else if (this.pos.x > width - this.radius) {
  //       this.pos.x = width - this.radius;
  //       this.vel.x *= -1;
  //     }

  //     if (this.pos.y > height - this.radius) {
  //       this.pos.y = height - this.radius;
  //       this.vel.y *= -0.7;
  //     }
  //   }

  edgeBounce() {
    if (this.pos.x < 0) {
      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }

  display() {
    fill('blue');
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}
