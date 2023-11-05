const cNum = 8;
const rNum = 8;
let angleBegin = 0;
let angleBeginVel = 1; // 각도 증가 속도
let angleStep;
const propellerLen = 25;
let circleRadius = 10;

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
  // 원 중앙에 프로펠러가 고정됩니다.
  //   ellipse(0, 0, circleRadius * 2);
  ellipse(0, 0, 50);

  stroke(0);
  strokeWeight(1);
  // 프로펠러의 line은 원 중앙에 고정됩니다.
  let lineLength = circleRadius * 2;
  line(0, 0, lineLength, 0);
  strokeWeight(2);
  //   circle(0, 0, 10);
  strokeWeight(2);
  fill('black');
  circle(lineLength * 1.2, 0, 13);
}
