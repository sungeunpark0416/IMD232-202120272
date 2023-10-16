let mover;
let gravity;
let mVec;
let pMVec;
let maxThrowingForce = 10; // Adjust this value for maximum throwing force
let isDragging = false;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(width / 2, height / 2, 20); // Create a Mover object
  gravity = createVector(0, 0.5);
  mVec = createVector();
  pMVec = createVector();
  background(255);
}

function draw() {
  background(255);

  if (!isDragging) {
    mover.applyForce(gravity); // Apply gravity force to the mover
    mover.update(); // Update the mover's position and velocity
  }

  mover.display(); // Display the mover
}

function mousePressed() {
  const d = dist(mouseX, mouseY, mover.pos.x, mover.pos.y);
  if (d < mover.radius) {
    isDragging = true;
    mover.isDragging = true;
    mover.draggingOffset.x = mover.pos.x - mouseX;
    mover.draggingOffset.y = mover.pos.y - mouseY;
  }
}

function mouseReleased() {
  if (isDragging) {
    pMVec.set(pmouseX, pmouseY);
    mVec.set(mouseX, mouseY);

    // Calculate the throwing force vector (from previous frame to current frame)
    const throwingForce = p5.Vector.sub(pMVec, mVec);

    // Calculate the force magnitude and limit it to the maximum value
    const forceMagnitude = constrain(throwingForce.mag(), 0, maxThrowingForce);

    // Normalize the throwing force vector and then scale it by the force magnitude
    throwingForce.normalize().mult(forceMagnitude);

    mover.applyForce(throwingForce); // Apply the throwing force to the mover
    mover.isDragging = false; // Stop dragging the mover
    isDragging = false; // Stop dragging state
  }
}
