let angle = 0;
let angleVel;
const propellerLen = 100;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  angleVel = (TAU / 360) * 1;

  background(255);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);
  rotate(angle);

  stroke(0);
  strokeWeight(1);
  fill(127);
  line(-propellerLen / 2, 0, propellerLen / 2, 0);

  strokeWeight(2);
  fill(127);
  circle(propellerLen / 2, 0, 16);
  angle += angleVel;
}
