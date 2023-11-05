const cNum = 8; //열
const rNum = 8; //행
let angleBegin = 0; //현재회전각도
let angleBeginVel = 1; //각 프레임마다 더해지는 각도단위
let angleStep = 15; // 각 열의 각도 간격
const propellerLen = 25;
let circleRadius = 10;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  angleMode(DEGREES); // 각도를 도 단위로 사용
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  let circleCount = 0;
  for (let r = 0; r < rNum; r++) {
    //행
    for (let c = 0; c < cNum; c++) {
      //열
      push();
      translate(((c + 0.5) * width) / cNum, ((r + 0.5) * height) / rNum); // 그리드 내에서 중심 위치 계산
      rotate(angleBegin + circleCount * angleStep); // angleBegin, 열 번호, 및 행 번호를 고려하여 회전

      drawGraphic();

      pop();
      circleCount++;
      // console.log(circleCount);
    }
  }

  angleBegin += angleBeginVel;
}

function drawGraphic() {
  // 원 중앙에 프로펠러가 고정됩니다.

  ellipse(0, 0, 50);

  stroke(0);
  strokeWeight(1);
  // 프로펠러의 line은 원 중앙에 고정됩니다.
  let lineLength = circleRadius * 2;
  line(0, 0, lineLength, 0);

  strokeWeight(2);
  // 원 중앙에서 거리를 두고 원을 그립니다.
  fill('black');
  circle(lineLength * 1.2, 0, 13);
}
