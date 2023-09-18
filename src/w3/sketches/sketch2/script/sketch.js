// let pos;
// let vel;
// let acc;
// let radious = 25;

// function setup() {
//   setCanvasContainer('canvas', 3, 2, true);
//   background(255);

//   pos = createVector(width / 2, height / 2);
//   vel = createVector(3, 5);
//   acc = createVector(3, 5);

//   // createVector()의 괄호 안에 값이 들어가지 않아도 됨
//   // createVector의 역할은 컴퓨터에게 벡터역할을 할 수 있는 기능보유를 알려줌
//   // 벡터는 이름 지을 수 없음 -> pos.X, pos.Y 이 꼴로 정해져 있음

//   console.log(pos);
//   console.log(vel);
//   ellipse(pos.X, pos.Y, 50);
// }

// function draw() {
//   background(255);
//   pos.add(vel);

//   // pos.add(vel);의 기능 : pos에 vel의 값을 더해 줌
// ----
//   // if (pos.x < 0) {
//   //   vel.x *= -1;
//   // } else if (pos.x > width) {
//   // }
//   // 밑의 코드로 줄여 쓸 수 있다
// -----
//   if (pos.X - radius < 0 || pos.X + radius > width) {
//     vel.X *= -1;
//   }
//   if (pos.Y - radius < 0 || pos.Y + radius > height) {
//     vel.Y *= -1;
//   }
//   ellipse(pos.X, pos.Y, 2 * radius);
// }

let pos;
let vel;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoseHere', 3, 2, true);

  background(255);
  //값이 있진 않지만 벡터를 쓸 수 있는 상태라도 만들기 위해()를 비워라도 쓰긴해야함but채우면좋음
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  //중앙을 보여주고 싶을때
  //계산을 ellipse보다 먼저하면 중앙에 있을떄가 보이지 않으므로
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);

  acc = p5.Vector.random2D();
  acc.mult(2);
  val.add(acc);
  pos.add(vel);

  //벡터로 만들어서 벡터서 정의한 add 사용 ok

  //if (pos.x < 0) {
  //  vel.x *= -1;
  //} else if (pos.x > width) {
  //  vel.x *= -1;
  //}
  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }
  ellipse(pos.x, pos.y, 2 * radius);
}
