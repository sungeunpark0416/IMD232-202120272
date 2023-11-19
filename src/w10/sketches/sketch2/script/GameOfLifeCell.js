class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;

    this.state = Math.floor(random(3)); // 무작위 숫자 (0, 1, 또는 2)로 초기화
    this.nextState = this.state;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const livingNeighbors = this.neighbors.filter(
      (eachNeighbor) => eachNeighbor?.state
    );
    const livingNum = livingNeighbors.length;
    if (this.state === 0 && livingNum >= 3) {
      this.nextState = 1; // 조건 충족 시 paper로 변경
    } else if (this.state === 1 && livingNum >= 3) {
      this.nextState = 2; // 조건 충족 시 scissors로 변경
    } else if (this.state === 2 && livingNum >= 3) {
      this.nextState = 0; // 조건 충족 시 rock으로 변경
    } else {
      this.nextState = this.state;
    }
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = !this.state;
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    stroke(this.isHover(mx, my) ? 'red' : 'black');
    fill(this.state ? 255 : 64);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
