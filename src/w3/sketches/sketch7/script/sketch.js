let acceleration = 100; // 가속도
let velocity = 10; // 속도
let radious = 30;

let Ball;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  Ball = new Ball(width / 2, height / 2);

  let anInstance = new Ball();
  anInstance = new Ball();
}

function draw() {
  background('white');

  Ball.update();
  Ball.display();
  Ball.show();
  anInstance.update();
  anInstance.checkEdges();
  anInstance.display();
  anotheranInstance = update();
  anotheranInstance = checkEdges();
  anotheranInstance = display();
  instanceArray.forEach((eachInstance) => {
    eachInstance.update();
    eachInstance.checkEdges();
    eachInstance.display();
  });
}
