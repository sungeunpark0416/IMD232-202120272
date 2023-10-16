let moverA;
let gravity;
let isDragging = false;
let clickOffset;
let wallCoefficient = 0.5; // 벽에 대한 반발력 계수

let mVec; // 현재 프레임의 마우스 좌표 벡터
let pMVec; // 이전 프레임의 마우스 좌표 벡터

let lastMouseX; // 이전 프레임의 마우스 X 좌표
let lastMouseY; // 이전 프레임의 마우스 Y 좌표
let dragForceMultiplier = 0.1; // 힘의 초기값 설정
let dragSpeedThreshold = 5; // 드래그 속도 임계값

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
    // 클릭한 상태에서 드래그 중일 때는 공의 위치를 즉각적으로 업데이트
    moverA.pos.x = mouseX - clickOffset.x;
    moverA.pos.y = mouseY - clickOffset.y;

    // 이전 프레임의 마우스 좌표 업데이트
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
}

function mouseReleased() {
  if (isDragging) {
    let throwingForce = p5.Vector.sub(createVector(mouseX, mouseY), moverA.pos);

    // 드래그 속도에 따라 힘의 크기 동적으로 조절
    let dragSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);

    // 빠르게 드래그할 때는 더 큰 힘을 가하도록 함
    if (dragSpeed > dragSpeedThreshold) {
      throwingForce.mult(map(dragSpeed, dragSpeedThreshold, 10, 0.1, 0.5));
    } else {
      // 느리게 드래그할 때 작은 힘을 가하도록 함
      throwingForce.mult(map(dragSpeed, 0, dragSpeedThreshold, 0.01, 0.1));
    }

    moverA.applyForce(throwingForce);
    isDragging = false;
    // pMVec.set(pmouseX, pmouseY);
    // mVec.set(mouseX, mouseY);
  }
}
