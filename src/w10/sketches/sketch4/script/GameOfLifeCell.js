class RPSCell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = 0; // 초기값 0, (0주먹, 1보, 2가위)
    this.nextState = this.state;
    this.neighbors = [];
  }

  // 현재 셀의 이웃
  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }
  // 계산
  calcNextState() {
    const opponentState = [2, 0, 1]; // 각 상태에 대응하는 이길 수 있는 상대 상태
    const opponentCount = this.neighbors.reduce((count, neighbor) => {
      if (neighbor && neighbor.state === opponentState[this.state]) {
        return count + 1;
      }
      return count;
    }, 0);

    if (opponentCount <= 2) {
      this.nextState = this.state; // 방어 : 현재 상태 유지
    } else {
      // 점령당함 -> 상대의 상태로 바뀜
      const winningNeighbor = this.neighbors.find(
        (neighbor) => neighbor && neighbor.state === opponentState[this.state]
      );

      if (winningNeighbor) {
        this.nextState = winningNeighbor.state;
      } else {
        this.nextState = this.state; // 내가 이기면 현재 상태 유지
      }
    }
  }

  update() {
    this.state = this.nextState;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(colorMapping[this.state]);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
