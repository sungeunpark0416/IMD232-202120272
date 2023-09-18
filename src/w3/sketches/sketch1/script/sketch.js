let posX;
let posY;
let posXAdd = 3;
let posYAdd = 5;

// setup의 특징 : 한번만 실행 됨
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  // 화면 중앙에 놓는 방법 - 변수 = width/height /2;
  posX = width / 2;
  posY = height / 2;
}

// funcion의 특징 : 루프로 계속 실행 됨
function draw() {
  background(255);
  ellipse(posX, posY, 50);
  posX += 5;
  posY += 3;

  // posX += posXAdd;
  // posY += posYAdd;
  // 숫자로 냅두는 것 보다 변수를 활용해서 사용하면 더 편리

  // X에 1를 더하는 방법

  // posX++;
  // posX = posX + 1;
  // posX += 1;
}
