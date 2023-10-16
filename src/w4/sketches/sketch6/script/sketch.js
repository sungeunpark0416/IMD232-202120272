// let moverA;
// let gravity;
// let isDragging = false;
// let clickOffset;
// let wallCoefficient = 0.5; // 벽에 대한 반발력 계수

// let mVec; // 현재 프레임의 마우스 좌표 벡터
// let pMVec; // 이전 프레임의 마우스 좌표 벡터

// let lastMouseX; // 이전 프레임의 마우스 X 좌표
// let lastMouseY; // 이전 프레임의 마우스 Y 좌표
// let dragForceMultiplier = 0.1; // 힘의 초기값 설정
// let dragSpeedThreshold = 5; // 드래그 속도 임계값

// function setup() {
//   setCanvasContainer('canvas', 3, 2, true);
//   background(255);
//   moverA = new Mover(width / 2, height / 2, 10);
//   gravity = createVector(0, 0.1);

//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

// function draw() {
//   background(255);

//   let gravityA = createVector(gravity.x, gravity.y);
//   gravityA.mult(moverA.mass);

//   if (!isDragging) {
//     moverA.applyForce(gravityA);
//     moverA.update();
//     checkWallCollision();
//   }

//   moverA.display();
//   moverA.displayVectors();
// }

// function checkWallCollision() {
//   if (moverA.pos.x - moverA.radius < 0) {
//     moverA.pos.x = moverA.radius;
//     moverA.vel.x *= -wallCoefficient;
//   } else if (moverA.pos.x + moverA.radius > width) {
//     moverA.pos.x = width - moverA.radius;
//     moverA.vel.x *= -wallCoefficient;
//   }
//   if (moverA.pos.y + moverA.radius > height) {
//     moverA.pos.y = height - moverA.radius;
//     moverA.vel.y *= -wallCoefficient;
//   }
// }

// function mousePressed() {
//   let distance = dist(mouseX, mouseY, moverA.pos.x, moverA.pos.y);
//   if (distance < moverA.radius) {
//     isDragging = true;
//     clickOffset = createVector(mouseX - moverA.pos.x, mouseY - moverA.pos.y);
//     moverA.vel.set(0, 0);
//   }
// }

// function mouseReleased() {
//   if (isDragging) {
//     let throwForce = p5.Vector.sub(createVector(mouseX, mouseY), moverA.pos);
//     throwForce.mult(0.05);
//     moverA.applyForce(throwForce);
//     isDragging = false;
//   }
// }

// // function mouseDragged() {
// //   if (isDragging) {
// //     // 클릭한 상태에서 드래그 중일 때는 공의 위치를 즉각적으로 업데이트
// //     moverA.pos.x = mouseX - clickOffset.x;
// //     moverA.pos.y = mouseY - clickOffset.y;

// //     // 이 부분에서 applyForce와 update를 일시적으로 비활성화
// //     // applyForce와 update는 드래그 중에는 작동하지 않음

// //     // 현재 프레임의 마우스 좌표 벡터
// //     mVec = createVector(mouseX, mouseY);

// //     // 이전 프레임에서 현재 프레임으로 향하는 드래그 방향 벡터
// //     let dragDirection = p5.Vector.sub(mVec, pMVec);

// //     // 드래그 방향 벡터의 크기를 조절하여 힘을 제어
// //     let dragSpeed = dist(mouseX, mouseY, lastMouseX, lastMouseY);

// //     // 드래그 속도에 따라 힘의 크기 동적으로 조절
// //     if (dragSpeed > dragSpeedThreshold) {
// //       dragForceMultiplier = map(dragSpeed, dragSpeedThreshold, 10, 0.1, 1.0); // 더 작은 값으로 조절
// //     } else {
// //       dragForceMultiplier = map(dragSpeed, 0, dragSpeedThreshold, 0.01, 0.1); // 더 작은 값으로 조절
// //     }

// //     dragDirection.mult(dragForceMultiplier);

// //     // 공에 힘을 적용
// //     moverA.applyForce(dragDirection);

// //     // 이전 프레임의 마우스 좌표 업데이트
// //     pMVec = mVec;
// //   }

// function mouseDragged() {
//   if (isDragging) {
//     // 클릭한 상태에서 드래그 중일 때는 공의 위치를 즉각적으로 업데이트
//     moverA.pos.x = mouseX - clickOffset.x;
//     moverA.pos.y = mouseY - clickOffset.y;

//     // applyForce와 update는 드래그 중에만 작동
//     if (isDragging) {
//       moverA.applyForce(throwForce);
//       moverA.update();
//     }

//     // 드래그 중에만 힘을 적용하여 던지도록 함
//     let throwForce = p5.Vector.sub(
//       createVector(mouseX, mouseY),
//       createVector(pmouseX, pmouseY)
//     );
//     throwForce.mult(0.05);
//     moverA.applyForce(throwForce);

//     // 드래그 속도 계산
//     dragSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
//   }

//   // 마우스의 현재 위치를 저장
//   lastMouseX = mouseX;
//   lastMouseY = mouseY;
// }

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
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 10);
  gravity = createVector(0, 0.1);

  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function draw() {
  background(255);

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

function mouseReleased() {
  if (isDragging) {
    let throwForce = p5.Vector.sub(createVector(mouseX, mouseY), moverA.pos);

    // 드래그 속도에 따라 힘의 크기 동적으로 조절
    let dragSpeed = dist(mouseX, mouseY, lastMouseX, lastMouseY);
    // throwForce.mult(dragSpeed * 0.01);

    moverA.applyForce(throwForce);
    isDragging = false;
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
