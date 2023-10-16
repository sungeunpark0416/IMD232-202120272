let moverA;
let gravity;
let isDragging = false;
let clickOffset; // 클릭한 위치와 공의 위치 간의 오프셋

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 10);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);

  if (!isDragging) {
    moverA.applyForce(gravityA);
    moverA.update();
  }

  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();
}

function mousePressed() {
  // 마우스를 클릭하면 드래그 상태를 활성화하고
  // 클릭한 위치와 공의 위치 간의 오프셋을 계산하여 clickOffset에 저장
  let distance = dist(mouseX, mouseY, moverA.pos.x, moverA.pos.y);
  if (distance < moverA.radius) {
    isDragging = true;
    clickOffset = createVector(mouseX - moverA.pos.x, mouseY - moverA.pos.y);
    moverA.vel.set(0, 0); // 클릭하면 공의 속도 초기화
  }
}

function mouseReleased() {
  // 마우스 클릭을 해제하면 드래그 상태를 비활성화
  isDragging = false;
}

function mouseDragged() {
  // 마우스 드래그 중인 동안, 공을 드래그하도록 위치 업데이트
  if (isDragging) {
    moverA.pos.x = mouseX - clickOffset.x;
    moverA.pos.y = mouseY - clickOffset.y;
  }
}
