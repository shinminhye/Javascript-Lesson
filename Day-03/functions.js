/**
 * 함수
 * 
 */


function func01() {
    console.log('func01');
}

const func02 = function() {
    console.log('func02');
}

function func03(a, b) { // parameter -> 매개변수
    // // console.log(a + b);
    // console.log(arguments.length);
    // if(arguments.length!==2){
    //     console.warn('invalid arguments');
    // }
    return a + b; // 결과값 반환
}


// func03(1, 3); // arguments -> 전달인자
// func03();
// func03(null);
// const kldsflk = func03(1, 2);
// console.log(kldsflk);

function new_scope() {
    var new_value = 2;


    if (1 == 1) {
        var new_value = 1;
    }

    console.log(new_value);
}


/**
 * hoisting => 위로올린다.
 * 
 * 같은 스코프 (블록) 안에서
 *  모든 선언은 위로 끌어 올려진다.
 *  선언하지 않고 사용하는 정의는 존재된것으로 간주한다.
 * 
 */

function createFunc() {
    return function() {
        console.log('success 1');
    }
}

function test(runnable) {
    runnable();
}

// console.log();

// test(createFunc());


function func1(a, b, c) {
    return a + b + c;
}

const func2 = function(a, b, c) {
    return a + b + c;
}

const func3 = (a, b, c) => {
    return a + b + c;
}

const func4 = (a, b, c) => func3(a, b, c);

const func5 = (a) => {
    return a + 1;
}

const func6 = a => a + 1;

function func7(a) {
    return a + 1;
}

// console.log(func1(1, 2, 3));
// console.log(func2(1, 2, 3));
// console.log(func6(1));
// console.log(func7(1));



const logSkyColor = () => {
    var color;
    const dust = true;
    color = 'blue';
    if (dust) {
        color = 'grey';
        console.log(color);  /**/
    }
    console.log(color);      /**/
}

logSkyColor();

/*
grey
blue
*/


// function <함수이름>(<인자이름>, <인자이름>, <인자이름> ... ) {
//     let a;
//     /// 처리 내용
//     /// 처리 내용
//     /// 처리 내용
//     /// 처리 내용
//     return a;
//     // </반환>/return;
// }

function thisIsFunction(arg){
    console.log(arg);
}

////////////////////////////
thisIsFunction(1);
thisIsFunction(2);
