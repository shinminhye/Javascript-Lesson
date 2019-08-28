/**
 * return
 * condition
 * argumetns
 * 
 * - - y = x + 1
 * 
 * f(x) = x + 1
 * f(x) = x^2 + 3*x +4
 * 
 * f(x, y) = x + y
 * 
 * 
 */

 // 인자 1 / 결과값 1
function add(x) {
    return x + 1;
}

// 인자 2 / 결과값 1
function sum(x, y) {
    return x + y;
}

// 인자 0 / 결과값 1
function one() {
    return 1;
}

// 인자 1 / 결과값 1
function none(x) {
    console.log(x);
    return;
}

function none(x) {
    console.log(x);
}

///////////////////////////////////////

// 1 class citizen
// 상위개념 객체
// c / sturct
// java / Object
// Javascrpt / 모든것이 객체

const a = 1; //<>;

const someValue = none;

someValue(1);

///////////////////////////////////////

// 익명함수

// const someOtherFunction = 
let someOtherFunction = function (){

}

////////////////////////////////////////////

// 화살표 함수 / Arrow function

const aa = (a, b) => {
    return a+b;
}

const bb = (a, b) => a + b;

const arrow_add = a => a + 1;

/////////////////////////////////////////////

// var vs let/const
// var       -> 함수단위
// let       -> 블록단위
// const     -> 블록단위

if (true) {
    function a() {
        if (true) {
            // var c;
            let c;

            {

            }
        } else {
            
        }


    }
}

// 자기호출함수

(function(){
    var c ='asdasdasdadasddasdasdasd';
})();
