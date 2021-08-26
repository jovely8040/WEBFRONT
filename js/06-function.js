// 함수 선언 식
function sum(a,b) { //function 함수이름(매개변수 a,b)를 입력받음
    return a + b;
    // return 함수 종료, 출력 데이터를 반환할 수 있음
}

// 함수 호출
console.log("SUM:", sum(10,20));

// 함수 표현 식: 이름이 없는 함수 -> 익명 함수
// 그 자체로 독립된 객체
//  - 변수에 할당될 수 있다
//  - 다른 함수의 매개변수로 전달될 수 있다
const asum = function(a, b) {
    return a + b;
}

// 함수 호출
console.log(typeof asum, asum(10,20));

// 익명 함수의 활용 1. 즉시 실행 함수
let initText;
// 초기화
(function(number) { // {}안 많은 변수 사용 -> 초기화가 끝나면 불필요 -> 임시 변수
    let textList = ["홀수", "짝수"];
    if (number % 2 == 0) {
        initText = textList[1];
    } else {
        initText = textList[0];
    }
    console.log(`인수 ${number}를 이용하여 즉시 실행하였습니다.`);
})(5); // -> 즉시 실행
console.log(initText);
// console.log(textList); // -> ERROR: textList변수는 초기화를 위한 임시변수이므로 스코프가 종료


console.log("----- arguments");
// 함수의 매개 변수
// JavaScript는 선언부의 매개 변수 갯수와 상관없이
// 모든 매개변수가 arguments라는 이름의 배열로 전달
function getNumberTotal() { // 매개변수를 선언하지 않음
    console.log(arguments, arguments.length);  
}

console.log(getNumberTotal()); // 매개변수 없음
console.log(getNumberTotal(1, 2, 3, 4, 5)); // 매개변수 5개
console.log(getNumberTotal(1, 2, "3", 4, 5));