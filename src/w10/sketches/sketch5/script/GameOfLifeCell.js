class RPSCell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // this.isClickable = isClickable;

    this.state = 0; // 초기값은 Rock
    this.nextState = this.state;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const opponentState = [2, 0, 1]; // 각 상태에 대응하는 이길 수 있는 상대 상태
    const opponentCount = this.neighbors.reduce((count, neighbor) => {
      if (neighbor && neighbor.state === opponentState[this.state]) {
        return count + 1;
      }
      return count;
    }, 0);

    if (opponentCount <= 2) {
      this.nextState = this.state; // 방어
    } else {
      // 점령당함
      const winningNeighbor = this.neighbors.find(
        (neighbor) => neighbor && neighbor.state === opponentState[this.state]
      );

      if (winningNeighbor) {
        this.nextState = winningNeighbor.state;
      } else {
        this.nextState = this.state;
      }
    }
  }

  update() {
    this.state = this.nextState;
  }

  // isHover(mx, my) {
  //   return (
  //     this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
  //   );
  // }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    // stroke(this.isHover(mx, my) ? 'red' : 'black');

    noStroke(); // 선 없애기
    fill(colorMapping[this.state]);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

// function mouseClicked() {
//   for (let idx = 0; idx < tiles.length; idx++)
//     if (tiles[idx].toggleState(mouseX, mouseY)) break;
// }
