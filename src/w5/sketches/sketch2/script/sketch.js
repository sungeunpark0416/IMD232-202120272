// const cNum = 8;
// const rNum = 8;
// let gridC;
// let gridR;
// let angleBegin = 0;
// let angleBeginVel;
// let angleStep;

// function setup() {
//   setCanvasContainer('canvas', 1, 1, true);

//   colorMode(HSL, 360, 100, 100, 100);
//   background(360, 0, 100);
// }

// function draw() {
//   background(360, 0, 100);

//   for (let r = 0; r < rNum; r++) {
//     for (let c = 0; c < cNum; c++) {
//       push();
//       translate();
//       rotate();
//       pop();
//     }
//   }

//   angleBegin += angleBeginVel;
// }

const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel = 1; // 각도 증가 속도
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  angleMode(DEGREES); // 각도를 도 단위로 사용
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);

  angleStep = 360 / cNum; // 한 그래픽당 회전 각도
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      translate(((c + 0.5) * width) / cNum, ((r + 0.5) * height) / rNum); // 그리드 내에서 중심 위치 계산
      rotate(angleBegin + c * angleStep); // 각도 회전
      drawGraphic(); // 그래픽을 그리는 함수 호출
      pop();
    }
  }

  angleBegin += angleBeginVel;
}

function drawGraphic() {
  //   fill(random(360), 80, 80); // 무작위 HSL 색상
  ellipse(0, 0, 50);
}
