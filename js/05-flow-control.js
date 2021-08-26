// 연습문제 1
// 2단부터 9단까지 구구단 출력하기
// (for문, while문)

console.log("---- for 구구단");
for (let dan = 2; dan <= 9; dan++) {
    //  단 루프
    console.log(dan + "단");
    for (let num = 1; num <= 9; num++) {
        console.log(`${dan} * ${num} = ${dan * num}`);
    }
    console.log();
}

console.log("----- while 구구단");
let dan = 2;
while(dan <= 9) {
    //  단 루프
    let num = 1;
    console.log(dan + "단");
    while(num <= 9) {
        console.log(`${dan} * ${num} = ${dan * num}`);
        num ++;
    }
    console.log();
    dan++;
}

// 연습문제 2
// 별표 그리기
// (for문, while문)
// *****
// ****
// ***
// **
// *

console.log("---- for 별표 그리기");
for (let count = 5; count >= 1; count--) {
    let stars = "";
    for (let col = 1; col <= count; col++) {
        stars += "*";
    }
    console.log(stars);
}

console.log("----- while 별표 그리기");
let count = 5;
while(count > 0) {
    let stars = "";
    let col = 1;
    while (col <= count){ // col변수가 count 이전까지 별표 추가
        stars += "*";
        col++;
    }
    console.log(stars);
    count--;
} 

// ES6: for ... in: 객체의 속성(프로퍼티)를 순회
// ES6: for ... of: 순회 객체의 값을 순회
let obj = {
    name: "홍길동",
    age: 28,
    job: "도적",
    gender: "남성"
}

console.log("----- for...in");
for (let key in obj) {
    // for...in : 객체의 속성을 순회
    console.log(key, "->", obj[key]);
}

const arr = [5, 1, 4, 3, 2, 9, 8, 0];
for (let key in arr) {
    console.log(key);
}

console.log("----- for...of");
for (let value of arr) {
    // for...of: 반복 가능 객체에서 요소를 하나씩 꺼낸다
    console.log(value);
}

// for...of는 순회객체(배열 등)에서만 사용
// for (let value of obj) {
//     console.log(value);
// } // -> ERROR: obj는 순회객체가 아님

// 주의!
// for...in과 for...of를 구분해서 사용