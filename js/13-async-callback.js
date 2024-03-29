function logicA() {
    console.log("begin logic A");

    setTimeout(() => {
        console.log("callbackA called");
        console.log("begin logicB");
        setTimeout(() => {
            console.log("callbackB called");     
        }, 2000);
        console.log("end logicB");
    }, 2000); // 2초 후에 콜백 함수 실행

    console.log("end logicA");
}
// logicA();

function logicPromise() {
    console.log("begin logicPromise");

    // 비동기 처리를 위한 Promise 객체 생성
    return new Promise((resolve, reject) => {
        // resolve: 성공시 값 전달
        // reject: 실패시 사유 전달
        setTimeout(() => {
            resolve("Success");
            // 비동기 처리에 성공하면 resolve 함수 실행
            reject("REJECTED:")
        }, 2000);
        console.log("end logicPromise");
    });
}

function testLogicPromise() {
    console.log("Test logic Promise");
    logicPromise()
        .then(value => {
            // 성공했을 때
            console.log("PROMISE SUCCESS:", value);
        })
        .catch(reason => {
            // 실패했을 때
            console.error("PROMISE FAILED:", reason);
        })
}

testLogicPromise();

// async/await는 Promise를 좀 더 쉽게 다룰 수 있도록 해줌
async function asyncFunc() {
    console.log("async function");
    return "SUCCESS";
}

// async 함수는 항상 Promise를 리턴함
asyncFunc()
.then(value => {
    console.log(value);
}); 