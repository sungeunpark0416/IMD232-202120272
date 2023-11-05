let traffic; //변수설정
let infiniteOffset = 80; //화면을 벗어난 화살표가 화면 반대편으로 나타날 때까지 이동하는 값

function setup() {
  setCanvasContainer('canvas', 3, 2, true); //캔버스 설정
  colorMode(HSL, 360, 100, 100, 100); //컬러모드설정 HSL
  background('white'); //백그라운드 색상 설정
  traffic = new Traffic(); // traffic 변수의 인스턴스 생성
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  } //처음 10개의 화살표를 무작위 위치에 배정
}

function draw() {
  background('white'); //백그라운드 색상 설정 (매 프레임마다)
  traffic.run(); //traffic변수의 run 함수 호출
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
} //마우스를 클릭-드래그 할 때마다 마우스에 화살표 위치 추가
