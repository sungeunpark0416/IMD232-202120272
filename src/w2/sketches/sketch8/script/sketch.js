function setup() {
  setCanvasContainer('canvas-goes-here', 500, 500);
  // setCanvasContainer('canvas-goes-here', 1, 1, true);
  background('white');
}

function draw() {
  background(255, 249, 234);
  fill(255);
  rectMode(CORNER);

  //   천장
  fill('#E4DFD0');
  rect(0, 0, 1000, 20);

  // 바닥
  fill('#A7938A');
  rect(0, 395, 1000, 20);
  fill('#B5A59D');
  rect(0, 400, 1000, 100);
  fill('#AE9E94');
  rect(0, 485, 1000, 20);

  //   창문
  rectMode(CENTER);

  fill('#787878');
  rect(270, 150, 200, 200);
  fill('#505050');
  rect(270, 150, 180, 180);

  fill('#C5F9F9');
  rect(270, 150, 170, 170);
  fill('#B8D3AE');
  rect(270, 205, 170, 60);

  fill('#505050');
  rect(270, 150, 170, 10);
  rect(270, 150, 10, 170);

  //침대
  rectMode(CORNER);

  fill('#E7002A');
  rect(300, 330, 500, 30);
  fill('#D8B88A');
  rect(300, 350, 500, 30);
  fill('#D8B88A');
  rect(300, 350, 15, 80);
  fill('#B29973');
  rect(300, 350, 500, 5);

  fill('#B29973');
  rect(300, 380, 15, 5);

  // 책장
  rectMode(CENTER);
  fill('#D9D9D9');
  rect(30, 330, 200, 15);
  fill('#C9C2C2');
  rect(30, 335, 200, 5);

  fill('#D9D9D9');
  rect(30, 250, 200, 15);
  fill('#C9C2C2');
  rect(30, 255, 200, 5);

  fill('#D9D9D9');
  rect(30, 170, 200, 15);
  fill('#C9C2C2');
  rect(30, 175, 200, 5);

  fill('#D9D9D9');
  rect(30, 90, 200, 15);
  fill('#C9C2C2');
  rect(30, 95, 200, 5);

  rectMode(CORNER);
  fill('#D9D9D9');
  rect(120, 82, 15, 350);

  // 화분
  rectMode(CENTER);
  fill('#798C69');
  rect(80, 130, 10, 18, 2, 2);
  fill('#B28B76');
  rect(80, 150, 25, 30, 4, 4);

  fill('#798C69');
  rect(20, 130, 10, 18, 2, 2);
  fill('#B28B76');
  rect(20, 150, 25, 30, 4, 4);

  // 책
  fill('#E6AF00');
  rect(10, 215, 20, 60, 4, 4);
  fill('#DC326E');
  rect(30, 215, 20, 60, 4, 4);
  fill('#0096FF');
  rect(50, 215, 20, 60, 4, 4);
  fill('#869D82');
  rect(70, 215, 20, 60, 4, 4);
  fill('#CB6596');
  rect(90, 215, 20, 60, 4, 4);

  // 옷
  fill('#ffffff');
  rect(70, 312, 90, 20, 8, 8);
  fill('#ffffff');
  rect(70, 292, 90, 20, 8, 8);
  fill('#ffffff');
  rect(-20, 312, 90, 20, 8, 8);
  fill('#ffffff');
  rect(-20, 292, 90, 20, 8, 8);
}
