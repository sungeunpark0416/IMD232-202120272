class Traffic {
  constructor() {
    this.vehicles = []; //화살표를 저장
  }
  run() {
    // 화살표 시뮬레이션 실행 함수
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles); // 다른 화살표와 부딪힘을 피하려는 힘 계산
      separate.mult(1); // 부딪힘 힘에 가중치 적용
      eachVehicle.applyForce(separate); // 부딪힘 힘을 화살표에 적용

      const align = eachVehicle.align(this.vehicles); // 주위 화살표들과 방향 일치하려는 힘 계산
      align.mult(0.5); // 방향 일치 힘에 가중치 적용
      eachVehicle.applyForce(align); // 방향 일치 힘을 화살표에 적용

      const cohesion = eachVehicle.cohesion(this.vehicles); // 주위 화살표들과 응집하려는 힘 계산
      cohesion.mult(0.5); // 응집 힘에 가중치 적용
      eachVehicle.applyForce(cohesion); // 응집 힘을 화살표에 적용

      eachVehicle.update(); // 화살표의 위치, 한계, 속도 업데이트
      eachVehicle.borderInfinite(); // 화면을 벗어난 화살표를 반대편으로 이동
      eachVehicle.display(); // 화살표 그리기
    });
  }

  addVehicle(x, y) {
    // 새로운 화살표를 생성하고 배열에 추가하는 함수
    const mass = 1; // 질량 설정
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    ); // 새로운 화살표 생성 및 배열에 추가
  }
}
