let accMg = 0.1; // Desired acceleration magnitude
let velocity;
let Mover;

function setup() {
  createCanvas(400, 400);
  background('white');
  Mover = new Mover(width / 2, height / 2);
  velocity = createVector(0, 0);
}

function draw() {
  background('white');
  let target = createVector(mouseX, mouseY); // Target position (mouse position)
  let acceleration = p5.Vector.sub(target, Mover.position); // Vector from Mover to target

  if (mouseIsPressed) {
    normalizeVector(acceleration);
    acceleration.mult(accMg); // Set the magnitude to the desired value
    Mover.acceleration = acceleration; // Update the Mover's acceleration
  } else {
    // If not clicked, reset acceleration to zero
    Mover.acceleration = createVector(0, 0);
  }

  Mover.update();
  Mover.show();
}

function normalizeVector(vector) {
  vector.normalize();
}
