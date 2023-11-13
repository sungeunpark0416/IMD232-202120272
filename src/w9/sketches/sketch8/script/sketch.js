// Matter.js의 물리 엔진 라이브러리에서 다양한 모듈 불러오기
const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Vertices,
  common,
} = Matter;

const originalWidth = 800;
const originalHeight = 600;

// draw에서 쓸 수 있게 변수 선언
let ropeA;
let ropeB;
let ropeC;
let group;

// 엔진 생성
var engine = Engine.create(),
  world = engine.world;

// runner 생성, 엔진이 계속해서 업데이트 되도록 실행
var runner = Runner.create();

let m;
let mc;

Common.setDecomp(decomp);

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // add bodies
  // 변수 할당 여기서
  group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: group },
    });
  });

  // 제약 조건 - 상호 연결된 로프의 행동 시뮬레이트
  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  // 중간 원 rope
  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //
  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 10, 1, 10, 10, function (x, y) {
    // 각 물체의 모양을 정의하는 정점 경로 배열을 선언.
    var shapes = [
      '0 -40 20 -60 40 -40 30 -10 10 -10', // 오각형 1
      '0 -50 25 -70 50 -50 40 -20 20 -20', // 오각형 2
      '0 -25 25 -45 50 -25 40 5 20 5', // 오각형 3
      '0 -10 30 -20 30 0 30 20 0 10', // 오각형 4
    ];

    // shapes 배열에서 무작위 모양 선택
    var randomShapePath = shapes[Math.floor(Math.random() * shapes.length)];

    // 정점 생성
    var shapeVertices = Vertices.fromPath(randomShapePath);

    // 물체생성
    var shapeBody = Bodies.fromVertices(x, y, shapeVertices, {
      collisionFilter: { group: group },
    });

    return shapeBody;
  });

  Composites.chain(ropeC, 0.5, 0, -0.5, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  // 만든 body를 세계에 추가
  Composite.add(world, [ropeA, ropeB, ropeC]);

  // 마우스 컨트롤
  m = Mouse.create(document.querySelector('.p5Canvas'));
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);

  console.log('ropeA', ropeA);
  console.log('ropeB', ropeB);
  console.log('ropeC', ropeC);

  Runner.run(runner, engine);
  background('white');
}

function draw() {
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  background('white');
  noStroke();

  // ropeA
  fill('salmon');
  ropeA.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / originalWidth) * width,
        (eachVertex.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  // ropeB
  fill('#A6B1F7');
  ropeB.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / originalWidth) * width,
        (eachVertex.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  // ropeC
  fill('#DAF7A6');
  ropeC.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / originalWidth) * width,
        (eachVertex.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });
}
