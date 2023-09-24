// let cv;
// let mv;

// function setup() {
//   setCanvasContainer('canvas', 3, 2, true);
//   background(255);

//   cv = createVector(width / 2, height / 2);
//   //   mv = createVector();
// }

// function draw() {
//   background(255);

//   strokeWeight(2);
//   stroke('salmon');
//   line(0, 0, cv.x, cv.y);
// }

// ----
let acceleration = 100; // 가속도
let velocity = 10; // 속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  Ball = new Ball(width / 2, height / 2);
}

function draw() {
  background('white');
  Ball.update();
  Ball.display();
}

class Ball {
  constructor(x, y) {
    this.position = createVector(width / 2, height / 2);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.radius = 30;
  }

  update() {
    // Generate random acceleration in a random direction with a maximum length of 2
    const randomAcceleration = p5.Vector.random2D();
    this.acceleration.mult(1);
    this.acceleration = randomAcceleration;

    // Apply acceleration to velocity
    this.velocity.add(this.acceleration);

    // Adjust position and wrap around the screen
    this.position.add(this.velocity);

    // Limit velocity to a maximum length
    this.velocity.limit(10); // You can adjust the maximum velocity here

    // Limit acceleration to a length of 2
    this.acceleration.limit(2);

    this.checkEdges();

    return this;
  }

  checkEdges() {
    if (this.position.x < 0) {
      this.position.x = width;
    } else if (this.position.x > width) {
      this.position.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
    } else if (this.position.y > height) {
      this.position.y = 0;
    }
  }

  display() {
    // Draw acceleration vector
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.acceleration.x * acceleration,
      this.position.y + this.acceleration.y * acceleration
    );

    // Draw velocity vector
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocity.x * velocity,
      this.position.y + this.velocity.y * velocity
    );

    // Calculate the vector components from the center of the Ball to the mouse
    let vectorX = mouseX - this.position.x;
    let vectorY = mouseY - this.position.y;

    // Draw the moving Ball
    fill('salmon');
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2);

    // Draw the vector by adding its components to the Ball's position
    stroke(0);
    line(
      this.position.x,
      this.position.y,
      this.position.x + vectorX,
      this.position.y + vectorY
    );

    return this;
  }
}

//   display() {
//     // Draw line connecting the center point of the Ball to the mouse
//     stroke(0);
//     line(this.position.x, this.position.y, mouseX, mouseY);

//     // Draw acceleration vector
//     stroke('blue');
//     line(
//       this.position.x,
//       this.position.y,
//       this.position.x + this.acceleration.x * acceleration,
//       this.position.y + this.acceleration.y * acceleration
//     );

//     // Draw velocity vector
//     stroke('red');
//     line(
//       this.position.x,
//       this.position.y,
//       this.position.x + this.velocity.x * velocity,
//       this.position.y + this.velocity.y * velocity
//     );

//     // Draw the moving Ball
//     fill('salmon');
//     noStroke();
//     ellipse(this.position.x, this.position.y, this.radius * 2);

//     return this;
//   }
// }
