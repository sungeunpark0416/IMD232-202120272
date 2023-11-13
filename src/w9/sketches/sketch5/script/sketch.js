// Matter.js의 물리 엔진 라이브러리에서 다양한 모듈 불러오깁
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;
Vertices = Matter.Vertices;

// 엔진 생성
var engine = Engine.create(),
  world = engine.world;

// renderer 생성
const elem = document.querySelector('#canvas');

var render = Render.create({
  element: elem,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    showAngleIndicator: true,
    showCollisions: true,
    showVelocity: true,
  },
});

Render.run(render);

// runner 생성, 엔진이 계속해서 업데이트 되도록 실행
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies
var group = Body.nextGroup(true);

var ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
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

var ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
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

// var ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
//   return Bodies.rectangle(x - 20, y, 50, 20, {
//     collisionFilter: { group: group },
//     chamfer: 5,
//   });
// });

var ropeC = Composites.stack(600, 50, 8, 1, 10, 10, function (x, y) {
  // 각 물체의 모양을 정의하는 정점 경로 배열을 선언합니다.
  var shapes = [
    '0 -40 20 -60 40 -40 30 -10 10 -10', // 오각형 1
    '0 -50 25 -70 50 -50 40 -20 20 -20', // 오각형 2
    '0 -30 30 -30 50 0 30 30 0 30', // 오각형 3
    '0 -25 25 -45 50 -25 40 5 20 5', // 오각형 4
    '0 -10 30 -20 30 0 30 20 0 10', // 오각형 5
  ];

  // shapes 배열에서 무작위로 모양을 선택합니다.
  var randomShapePath = shapes[Math.floor(Math.random() * shapes.length)];

  // 경로를 사용하여 정점을 생성합니다.
  var shapeVertices = Vertices.fromPath(randomShapePath);

  // 생성된 정점을 사용하여 물체를 생성합니다.
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

// 정적인 바닥 - 시뮬레이션의 표면 역할
Composite.add(world, [
  ropeA,
  ropeB,
  ropeC,
  Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
]);

// 마우스 컨트롤
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// 렌더 뷰포트 조정 = scene의 특정 영역에 맞게 조정
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: 700, y: 600 },
});
