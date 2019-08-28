/*

https://www.codecademy.com/learn/introduction-to-javascript

1. 타입

number   0, 1, 0.234
srting   "this is string", 'this is string', `this is stirng`
boolean  true, false

undefined undefined
null      null
NaN       NaN


+, -, *, /    %

*/

// // 산술연산
// console.log(100 + 23);
// console.log(100 - 23);
// console.log(100 * 23);
// console.log(100 / 23);
// console.log(100 % 23);
// console.log('a' / 0);

// // 문자열 연산
// console.log('Result is : ' + 18)


// // property
// var str = {};
// console.log(str);

// console.log(str);
// console.log(str.someProps);

// str.someProps = 1;
// console.log();



// var str = {};

// let a={};

// a = '123';
// a= 1;

// const b='asd';
// b = 1;

// let const;
// let let;
// let 00console;

// let num = 11;

// num = num + 1;    // 산술연산
// num += 1;         // 산술대입연산

// num += 1;
// num++; //증감연산자

// console.log(num);


// num--; //증감연산자

// console.log(num);


let a = 'b';

// console.log(typeof a);
a  = 1;

// console.log(typeof a);

// console.log(a.toUpperCase());


// 조건문

// console.log(typeof a  ===  'string');  // 조건연산
// console.log(typeof a  !==  'string');

// console.log( 1 < 5 );
// console.log( 1 > 5 );

// console.log( 2 <= 2 );
// console.log( 3 >= 3 );


// if (typeof a  ===  'string') {           if..else
//     console.log(a.toUpperCase());
// }
// else {
//     console.log('a is not string');
// }

let num = 5;
// let v = 3;

// if (v<num) {
//     // 
// } else if (v===num){         // else if
//     ///
// } else if (v===num){         // else if
//     ///
// } else if (v===num){         // else if
//     ///
// } else if (v===num){         // else if
//     ///
// } else if (v===num){         // else if
//     ///
// } else if (v===num){         // else if
//     ///
// }else{
//     ///
// }

// num = 99;

// switch(num){
//     default:
//         console.log('unexpected number');
//         break;
//     case 1:
//     case 2:
//         console.log('num is 2');
//         break;
// }

// if (1===1 && 'a'==='a') {             // and
//         console.log('success');
// }

// if (1===0 || 'a'==='a') {            // or
//     console.log('success');
// }

// if ( !(1===0) ) {                        // not
//     console.log('success');
// }

// true && true                 // short-circuit
// true && false
// false && true
// false && false

// if(somea() && someb()) {
    // 
// }


let str = '';

if (str) {        //  Truthy 와 Falsy 
    
}

// Falsy
false
0
undefined
null
NaN
''
""

let username = 'bjh9780913'; //$('input[id="username"]').val()

if(!username){
    // alert
}

let safeUsername = username || 'annon';   // Truthy / Falsy 

console.log(safeUsername);

let mode;

if (id==='root'){
    // exception()
    mode='X';
} else {
    // login()
    mode='P';
}


// 삼항연산자 tenary
// <condition> ? <on true> : <on false>

id==='root' ? exception() : login();



/**
 * 객체
 * 기본적인 값들은 모두 객체이고
 * 객체에는 프로퍼티(속성, attributes) 가 존재하고 
 * 프로터피는 <변수|표현>.<프로퍼티명> 참조할수 있다.
 * 프로퍼티중에는 호출출가능한 아이들이 있고 이를 메소드.
 * 
 * console 객체
 * console 객체의 log 메소드를 통해서 값을 출겨해 볼수 있음.
 * 
 * Types
 * 
 * number(NaN), string, boolean, null, undefined
 * 
 * 변수 (variable)
 * 변수는 값을 가리키는 이름
 * 대입을 통해서 어떤 값을 가리키는지 재정의 가능하고
 *      이를 막기위해서 const 키워드를 통해서 상수를 정의하면된다.
 * var -> let, const
 * 
 * 대입연산자 =
 * 
 * <대상> = <값>
 * 
 * 산술
 * 산술연산자 => +, -, *, /, % (나머지 연산)
 * 산술대입   => (+|-|/|*)=
 * 증감연산자 => ++ / --
 * 
 * 문자열 연산 => + 이용해서 이어붙일수있다.
 * 
 * typeof 키워드
 * 변수의 값의 타입을 리턴
 * 
 * 조건연산
 * 비교연산자    ===, !==, <, >, <=, >=
 * 논리연산자    &&, ||, !
 * 
 * 분기문
 * if
 * if..else
 * else if
 * switch
 *  => break
 * 
 * 삼항연산자
 * <condition> ? <on true> : <on false>
 * 
 * Truthy 와 Falsy
        // Falsy
        false
        0
        undefined
        null
        NaN
        ''
        ""
    위 예외는 모두 truthy
 *
**/