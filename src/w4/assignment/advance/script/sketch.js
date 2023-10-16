let moverA;
let gravity;
let isDragging = false;
let clickOffset;
let wallCoefficient = 0.5;

let mVec;
let pMVec;

let lastMouseX;
let lastMouseY;
let dragForceMultiplier = 0.1;
let dragSpeedThreshold = 5;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);

  moverA = new Mover(width / 2, height / 2, 100);
  gravity = createVector(0, 0.5);

  lastMouseX = mouseX;
  lastMouseY = mouseY;

  mVec = createVector();
  pMVec = createVector();
}

function draw() {
  background(255);

  // const force = p5.Vector.mult(gravity, mover.mass);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);

  if (!isDragging) {
    moverA.applyForce(gravityA);
    moverA.update();
    checkWallCollision();
  }

  moverA.display();
  moverA.displayVectors();
}

function checkWallCollision() {
  if (moverA.pos.x - moverA.radius < 0) {
    moverA.pos.x = moverA.radius;
    moverA.vel.x *= -wallCoefficient;
  } else if (moverA.pos.x + moverA.radius > width) {
    moverA.pos.x = width - moverA.radius;
    moverA.vel.x *= -wallCoefficient;
  }
  if (moverA.pos.y + moverA.radius > height) {
    moverA.pos.y = height - moverA.radius;
    moverA.vel.y *= -wallCoefficient;
  }
}

function mousePressed() {
  let distance = dist(mouseX, mouseY, moverA.pos.x, moverA.pos.y);
  if (distance < moverA.radius) {
    isDragging = true;
    clickOffset = createVector(mouseX - moverA.pos.x, mouseY - moverA.pos.y);
    moverA.vel.set(0, 0);
  }
}

function mouseDragged() {
  if (isDragging) {
    moverA.pos.x = mouseX - clickOffset.x;
    moverA.pos.y = mouseY - clickOffset.y;

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
}

function mouseReleased() {
  if (isDragging) {
    let throwingForce = p5.Vector.sub(createVector(mouseX, mouseY), moverA.pos);

    let dragSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);

    if (dragSpeed > dragSpeedThreshold) {
      throwingForce.mult(map(dragSpeed, dragSpeedThreshold, 10, 0.1, 0.5));
    } else {
      throwingForce.mult(map(dragSpeed, 0, dragSpeedThreshold, 0.01, 0.1));
    }

    moverA.applyForce(throwingForce);
    isDragging = false;
    // pMVec.set(pmouseX, pmouseY);
    // mVec.set(mouseX, mouseY);
  }
}
