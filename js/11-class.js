// 원래 JavaScript는 Object-Based Language
// 공유 영역인 protype 기반 상속
// ES6에서는 class 문법 추가 -> OOP 방식을 구현할 수 있다
class Shape {
    // 정적 메소드: static -> new 하지 않고도 클래스명. 메소드명으로 접근 가능
    static create(x, y) { return new Shape(x, y) }
    // 생성자: constructor
    constructor(x, y) {
        this.name = "Shape"; // 속성: 앞에는 this키워드
        this.move(x, y);
    }
    // 메소드
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}

// 클래스의 사용
let s = new Shape(0, 0); // new를 이용한 인스턴스 생성
let s2 = Shape.create(10, 20); // static 메소드는 new 없이 사용 가능

console.log(s);
console.log(s.area());
console.log(s2, s2.area());

// 부모 클래스 상속
class Circle extends Shape {
    // 생성자
    constructor(x, y, radius) {
        super(x, y); // 부모 생성자 호출
        // 자신만의 속성 설정
        this.radius = radius; // this -> 자신
    }
    // 메소드 오버라이드
    area() {
        if (this.radius === 0) {
            return super.area(); // super -> 부모의 메소드 호출
        }
        return this.radius ** 2 * Math.PI;
    }
}

let c = new Circle(0, 0, 10);
console.log(c, c.area());
