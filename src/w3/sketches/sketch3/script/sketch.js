function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
}

function draw() {
  background('orange');
  fill('0');
  //   if (mouseX > width / 2) {
  //     rect(width / 2, 0, width / 2, height);
  //   } else {
  //     rect(0, 0, width / 2, height);
  //   }

  // if (mouseX > width / 2) {
  //   if (mouseY > height / 2) {
  //     rect(width / 2, height / 2, width / 2, height / 2);
  //   } else {
  //     rect(width / 2, 0, width / 2, height / 2);
  //   }
  // } else {
  //   if (mouseY > height / 2) {
  //     rect(0, height / 2, width / 2, height / 2);
  //   } else {
  //     rect(0, 0, width / 2, height / 2);
  //   }
  // }

  if (mouseX > (2 / 3) * width) {
    // 2/3보다 커?
    rect(width * (2 / 3), 0, width / 3, innerHeight);
  } else if (mouseX > (1 / 3) * width) {
    // 3/1보다 커?
    rect(width / 3, 0, width / 3, height);
  }
  // 3/1보다 작은 경우
  else {
    rect(0, 0, width / 3, height);
  }
}
