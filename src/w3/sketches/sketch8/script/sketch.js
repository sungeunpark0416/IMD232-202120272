let acceleration = 100; // 가속도
let velocity = 10; // 속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  Mover = new Mover(width / 2, height / 2);
}

function draw() {
  background('white');
  Mover.update();
  Mover.checkEdges();
  Mover.show();
}
