class Attractor {
  constructor(x, y, mass) {
    this.pos = creativeVector(x, y);
    this.mass = mass;
  }

  attract(mover) {
    let dirVectr = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    let force = (this.mass * mover.mass) / distance ** 2;
    return dirVectr.setMag(stregth);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
