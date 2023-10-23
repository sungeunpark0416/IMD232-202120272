let particles = [];
let emitter;
let gravity;
let verticalSpeed = 2;
let colors = [
  '#FF5733',
  '#FFC300',
  '#C70039',
  '#900C3F',
  '#581845',
  '#157F1F',
  '#3B3B98',
  '#44BFC3',
  '#F9DC5C',
  '#FF3864',
];

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
  emitter = new Emitter(width / 2, -20);
  gravity = createVector(0, 0.1);
  background('white');
}

function draw() {
  background('white');
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // if (particles[i].isOffScreen()) {
    //   particles.splice(i, 1);
    // }

    if (random(1) < 0.5) {
      let x = random(width);
      let p = new Particle(x, 0);
      // let color = random(colors);
      particles.push(p);
    }
  }

  console.log('현재 파티클 갯수: ' + particles.length);
}

// function emitParticles(minNum, maxNum) {
//   // 랜덤한 파티클 개수를 생성
//   // let num = Math.floor(random(minNum, maxNum + 1));
//   if (random(1) < 0.5) {
//     let x = random(width);
//     let p = new Particle(x, 0);
//     // let color = random(colors);
//     particles.push(p);
//   }
//   // for (let i = 0; i < num; i++) {
//   //   let x = random(width);
//   //   let color = random(colors);
//   //   let p = new Particle(x, 0);
//   //   particles.push(p);
//   // }
// }

class Emitter {
  constructor(x, y) {
    this.position = createVector(x, y);
  }
}
