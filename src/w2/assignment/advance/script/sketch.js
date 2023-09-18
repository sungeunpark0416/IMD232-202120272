// 방법 1 Math.min 사용

// let contentWidth;
// let contentHeight;

// function setup() {
//   setCanvasContainer('canvas-goes-here', 1, 1, true);
//   background('white');
//   contentWidth = width;
//   contentHeight = height;
// }

// function draw() {
//   let resizableWidth = width;
//   let resizableHeight = height;

//   let scaleRatio = Math.min(
//     resizableWidth / contentWidth,
//     resizableHeight / contentHeight
//   );
//   scale(scaleRatio);}

// 방법 2
let setup_width;
let setup_height;
let resized_width;
let resized_height;

function setup() {
  // setCanvasContainer('canvas-goes-here', 500, 500);
  setCanvasContainer('canvas-goes-here', 1, 1, true);
  background('white');
  // 최초 폭
  setup_width = width;
  // 최초 높이
  setup_height = height;
}

function draw() {
  // 특정시점의 폭
  resized_width = width;
  // 특정시점의 높이
  resized_height = height;

  // 스케일 비율 설정을 = 줄어든 폭 / 원래 폭으로 계산하고
  let scale_ratio = resized_width / setup_width;

  // 몇 프로 줄어들었는지 비율이 나타나고 그 것이 스케일 값
  scale(scale_ratio);

  background('#FFF5DB');
  fill(255);
  rectMode(CORNER);

  // ->> setup에서 얻은 width의 값을 가지고 비율을 줄이거나 넓힐 수 있는 scale 함수를 사용

  fill(255, 249, 234);
  triangle(500, 0, 500, 390, 0, 20);
  //   천장
  fill('#E4DFD0');
  rect(0, 0, 1000, 20);

  // 바닥
  fill('#A7938A');
  rect(0, 395, 1000, 20);
  fill('#B5A59D');
  rect(0, 400, 1000, 100);
  fill('#AE9E94');
  rect(0, 485, 1000, 20);

  // 카페트
  fill('#3D6724');
  ellipse(400, 455, 400, 100);

  //   창문
  rectMode(CENTER);

  fill('#787878');
  rect(270, 150, 200, 200);
  fill('#505050');
  rect(270, 150, 180, 180);

  fill('#C5F9F9');
  rect(270, 150, 170, 170);
  fill('#B8D3AE');
  rect(270, 205, 170, 60);

  fill('#505050');
  rect(270, 150, 170, 10);
  rect(270, 150, 10, 170);

  //침대
  rectMode(CORNER);

  fill('#E7002A');
  rect(300, 330, 500, 30, 8);
  fill('#D8B88A');
  rect(300, 350, 500, 30);
  fill('#D8B88A');
  rect(300, 350, 15, 80);
  fill('#B29973');
  rect(300, 350, 500, 5);

  fill('#B29973');
  rect(300, 380, 15, 5);

  // 책장
  rectMode(CENTER);
  fill('#D9D9D9');
  rect(30, 330, 200, 15);
  fill('#C9C2C2');
  rect(30, 335, 200, 5);

  fill('#D9D9D9');
  rect(30, 250, 200, 15);
  fill('#C9C2C2');
  rect(30, 255, 200, 5);

  fill('#D9D9D9');
  rect(30, 170, 200, 15);
  fill('#C9C2C2');
  rect(30, 175, 200, 5);

  fill('#D9D9D9');
  rect(30, 90, 200, 15);
  fill('#C9C2C2');
  rect(30, 95, 200, 5);

  rectMode(CORNER);
  fill('#D9D9D9');
  rect(120, 82, 15, 350);

  // 화분
  rectMode(CENTER);
  fill('#798C69');
  rect(80, 130, 10, 18, 2, 2);
  fill('#B28B76');
  rect(80, 150, 25, 30, 4, 4);

  fill('#798C69');
  rect(20, 130, 10, 18, 2, 2);
  fill('#B28B76');
  rect(20, 150, 25, 30, 4, 4);

  // 책
  fill('#E6AF00');
  rect(10, 215, 20, 60, 4, 4);
  fill('#DC326E');
  rect(30, 215, 20, 60, 4, 4);
  fill('#0096FF');
  rect(50, 215, 20, 60, 4, 4);
  fill('#869D82');
  rect(70, 215, 20, 60, 4, 4);
  fill('#CB6596');
  rect(90, 215, 20, 60, 4, 4);

  // 옷
  fill('#ffffff');
  rect(70, 312, 90, 20, 8, 8);
  fill('#ffffff');
  rect(70, 292, 90, 20, 8, 8);
  fill('#ffffff');
  rect(-20, 312, 90, 20, 8, 8);
  fill('#ffffff');
  rect(-20, 292, 90, 20, 8, 8);

  noStroke();
}
