let accelerationMagnitude = 0.1; // Desired acceleration magnitude
let velocity = createVector(0, 0);

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  Mover = new Mover(width / 2, height / 2);
}

function draw() {
  background('white');
  let target = createVector(mouseX, mouseY); // Target position (mouse position)
  let acceleration = p5.Vector.sub(target, Mover.position); // Vector from Mover to target
  acceleration.setMag(accelerationMagnitude); // Set the magnitude to the desired value
  mouse = createVector();
  Mover.acceleration = acceleration; // Update the Mover's acceleration
  Mover.update();
  Mover.show();
}
