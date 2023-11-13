const cNum = 8;
const rNum = 8;
let angleBegin = 0;
let angleBeginVel = 1;
let angleStep = 15;
let gridC;
let gridR;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  angleMode(DEGREES);
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);

  gridC = width / (cNum + 1);
  gridR = (height / (rNum + 1)) * 2;
}

function draw() {
  background(360, 0, 100);
  let circleCount = 0;
  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      translate(
        ((c + 1) * width) / (cNum + 1),
        ((r + 1) * height) / (rNum + 1)
      );
      rotate(angleBegin + circleCount * angleStep);

      drawGraphic();
      pop();
      circleCount++;
      console.log(circleCount);

      if (r % 2 == 0) {
        if (c % 2 == 0) {
          stroke('red');
        } else {
          stroke('yellow');
        }
      } else {
        if (c % 2 == 0) {
          stroke('blue');
        } else {
          stroke('green');
        }
      }
    }
  }
  angleBegin += angleBeginVel;
}

function drawGraphic() {
  ellipse(0, 0, 50);
  stroke(0);
  strokeWeight(1);
  line(0, 0, 25, 0);
  fill('black');
  circle(23, 0, 12);
}
