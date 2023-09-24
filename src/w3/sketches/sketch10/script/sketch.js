let accMg = 0.1;
let velocity = createVector(0, 0);

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  Mover = new Mover(width / 2, height / 2);
}

function draw() {
  background('white');
  let target = createVector(mouseX, mouseY);
  let acceleration = p5.Vector.sub(target, Mover.position);
  normalizeVector(acceleration);

  acceleration.mult(accMg);
  mouse = createVector();
  Mover.acceleration = acceleration;

  Mover.update();
  Mover.show();
}
function normalizeVector(vector) {
  vector.normalize();
}
