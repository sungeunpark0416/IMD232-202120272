class Vehicle {
  //화살표의 속성, 초기 설정
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y); //위치
    this.vel = p5.Vector.random2D(); //속도 - 랜덤으로
    this.acc = createVector(); //가속도
    this.mass = mass; //질량
    this.rad = rad; //반지름
    this.speedMx = speedMx; //최대속도
    this.forceMx = forceMx; //최대힘
    this.neighborhooodRad = 50; //주위에 있는 화살표 인식 반경
    this.color = color; //색상
  }

  cohesion(others) {
    //주위에 있는 화살표들과 응집하려는 행동
    let cnt = 0; // 주변 화살표의 수를 세는 변수 초기화
    const steer = createVector(0, 0); // 합산된 힘 벡터 초기화
    others.forEach((each) => {
      if (each !== this) {
        // 현재 화살표 자신이 아닌 경우에만 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; // 현재 화살표와 주변 화살표 간의 거리 제곱 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 거리 제곱이 인식 반경 제곱보다 작은 경우
          steer.add(each.pos); // 주변 화살표의 위치를 합산
          cnt++; // 주변 화살표의 수 증가
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt); // 주변 화살표 위치의 평균을 계산
      steer.sub(this.pos); // 현재 화살표에서 평균 위치로 향하는 벡터 계산
      steer.setMag(this.speedMx); // 최대 속도로 설정
      steer.sub(this.vel); // 현재 화살표의 속도와의 차이 계산
      steer.limit(this.forceMx); // 최대 힘으로 제한
    }
    return steer; // 계산된 힘 벡터 반환
  }

  align(others) {
    // 주위 화살표들과 방향 일치하려는 행동
    let cnt = 0; // 주변 화살표의 수를 세는 변수 초기화
    const steer = createVector(0, 0); // 합산된 힘 벡터 초기화
    others.forEach((each) => {
      if (each !== this) {
        // 현재 화살표를 자기 자신과 비교하지 않도록 확인
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; // 거리의 제곱 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 거리 제곱이 인식 반경 제곱보다 작은 경우
          steer.add(each.vel); // 주변 화살표의 속도를 합산
          cnt++; // 주변 화살표의 수 증가
        }
      }
    });

    if (cnt > 0) {
      steer.div(cnt); // 주변 화살표들의 평균 속도를 계산
      steer.setMag(this.speedMx); // 최대 속도로 설정
      steer.sub(this.vel); // 현재 화살표의 속도와의 차이 계산
      steer.limit(this.forceMx); // 최대 힘으로 제한
    }
    return steer; // 계산된 힘 벡터 반환
  }

  separate(others) {
    //다른 화살표들과의 부딫힘을 피하려는 행동
    let cnt = 0; // 부딫힘을 피하기 위해 다른 화살표들과의 거리가 충돌 가능한 경우를 세는 변수 초기화
    const steer = createVector(0, 0); // 합산된 힘 벡터 초기화
    others.forEach((each) => {
      if (each !== this) {
        // 현재 화살표를 자기 자신과 비교하지 않도록 확인
        const dist = this.pos.dist(each.pos); // 현재 화살표와 다른 화살표 사이의 거리 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          // 거리가 0보다 크고, 두 화살표의 반지름 합보다 작은 경우 (충돌 가능한 범위)
          const distNormal = dist / (this.rad + each.rad); // 거리를 정규화
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); // 다른 화살표에서 현재 화살표로 향하는 벡터 생성
          towardMeVec.setMag(1 / distNormal); // 벡터의 크기를 조절하여 다른 화살표로 향하도록 함
          steer.add(towardMeVec); // 향하는 벡터를 합산
          cnt++; // 충돌한 화살표의 수 증가
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt); // 합산된 힘을 충돌한 화살표의 수로 나누어 평균 계산
      steer.setMag(this.speedMx); // 최대 속도로 설정
      steer.sub(this.vel); // 현재 화살표의 속도와의 차이 계산
      steer.limit(this.forceMx); // 최대 힘으로 제한
    }
    return steer; // 계산된 힘 벡터 반환
  }

  applyForce(force) {
    //화살표의 힘에 p5함수 적용
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass); // 주어진 힘을 화살표의 질량으로 나누어 가속도에 추가
  }

  update() {
    // 화살표의 위치, 한계, 속도 업데이트
    this.vel.add(this.acc); // 속도에 가속도 추가
    this.vel.limit(this.speedMx); // 속도를 최대 속도로 제한
    this.pos.add(this.vel); // 위치를 현재 속도에 따라 업데이트
    this.acc.mult(0); // 가속도 초기화 (0으로 설정)
  }

  borderInfinite() {
    // 화면을 벗어난 화살표를 반대편으로 이동시키는 함수
    if (this.pos.x < -infiniteOffset) {
      // 만약 화살표가 왼쪽 화면 경계를 벗어난 경우
      this.pos.x = width + infiniteOffset; // 오른쪽 화면 반대편으로 이동
    } else if (this.pos.x > width + infiniteOffset) {
      // 만약 화살표가 오른쪽 화면 경계를 벗어난 경우
      this.pos.x = -infiniteOffset; // 왼쪽 화면 반대편으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      // 만약 화살표가 위쪽 화면 경계를 벗어난 경우
      this.pos.y = height + infiniteOffset; // 아래쪽 화면 반대편으로 이동
    } else if (this.pos.y > height + infiniteOffset) {
      // 만약 화살표가 아래쪽 화면 경계를 벗어난 경우
      this.pos.y = -infiniteOffset; // 위쪽 화면 반대편으로 이동
    }
  }

  display() {
    // 화살표 그리기 함수
    push(); // 상태 저장
    translate(this.pos.x, this.pos.y); // 현재 위치로 이동
    rotate(this.vel.heading()); // 속도 방향에 따라 회전
    noStroke(); // 외곽선 없음
    fill(this.color); // 지정된 색상으로 채움

    beginShape(); // 다각형 그리기 시작
    vertex(0, -this.rad * 1.4); // 다각형의 첫 번째 꼭짓점
    bezierVertex(
      this.rad * 1.5,
      -this.rad * 1.4,
      this.rad * 2,
      -this.rad * 0.6,
      0,
      this.rad * 1.2
    ); // bezier에 곡선을 사용하여 다각형 그리기
    bezierVertex(
      -this.rad * 2,
      -this.rad * 0.6,
      -this.rad * 1.5,
      -this.rad * 1.4,
      0,
      -this.rad * 1.4
    ); // bezier에 곡선을 사용하여 다각형 그리기
    endShape(CLOSE); // 다각형 그리기 종료 및 닫기

    pop(); // 그래픽 상태 복원
  }
}
