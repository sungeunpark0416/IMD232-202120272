let ball;
let ball2;
let gravity;
let wind;
let att;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  ball = new Mover(width / 2, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0); // wind 벡터 정의
}

function draw() {
  // let scaleGravity = p5.Vector.mult(gravity, ball.mass);
  // ball.applyForce(scaleGravity); // gravity를 ball에 적용
  // let scaleGravity2 = p5.Vector.mult(gravity, ball2.mass);
  // ball2.applyForce(scaleGravity2); // gravity를 ball2에 적용

  // if (mouseIsPressed) {
  //   ball.applyForce(wind);
  //   ball2.applyForce(wind);,. i;r;g
  // }
  let force1 = att.attract(ball);
  ball.applyForce(force1);
  let force2 = att.attract(ball2);
  ball.applyForce(force2);

  ball.update();
  ball2.update();
  // ball.edgeBounce();
  // ball2.edgeBounce();
  background('salmon'); // 배경을 먼저 채우기
  fill('white');
  ball.display();
  ball2.display();
  Att.display();
}
