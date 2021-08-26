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