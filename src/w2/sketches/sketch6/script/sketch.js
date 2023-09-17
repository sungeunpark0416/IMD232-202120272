function setup() {
  let canvas;
  canvas = createCanvas(420, 297);
  let canvasParent;
  canvasParent = select('#canvas-goes-here');
  canvas.parent(canvasParent);
  background('white');
}

function draw() {
  background('white');
  circle(mouseX, mouseY, 20);
}
