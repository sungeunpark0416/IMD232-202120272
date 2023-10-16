let mover;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Mover(width / 3, height / 2, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  let gravity = createVector(gravity.x, gravity.y);
  gravity.mult(mover.mass);
  mover.applyForce(gravity);
  // if (mouseIsPressed && isMouseInsideCanvas()) {
  //   mover.applyForce(wind);
  // }
  if (mover.contactEdge()) {
    let c = 0.01;
    let friction = mover.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    mover.applyForce(friction);
  }

  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
