/**
 * 객체
 * 
 */

const person = {
    'name': 'John',
    age: 9,
    'born in': 'Korea'
};

console.log(person);


// 프로퍼티
// 접근시에는 . 연산자, [] 브라켓 연산자

console.log(person.name);
console.log(person['born in']);

function a(){};

person[a] = 'value of function key';

console.log(person);
console.log(person[a]);

// 프로퍼티 대입
person.name = 'Jihun';
console.log(person);
person.name = 9;
console.log(person);
person['born in'] = 'kkk';
console.log(person);

// 메소드, method
// 호출가능한 멤버
const methodContainingObject = {
    fun1: function(){
        console.log('called');
        return 1;
    },
    fun2(){
        console.log('fun2')
    }
};

//console.log(methodContainingObject.fun1());
//console.log(methodContainingObject['fun1']());

methodContainingObject.fun2();

const nestedObject = {
    child1: {
        kk: 'vv'
    },
    child2: [
        methodContainingObject
    ]
};

console.log(nestedObject);

const spaceShip = {
    fuelPercent: 99,
    crew: [
        {role : '캡틴', name : '세온'},
        {aa:14},
    ]
};

console.log (spaceShip.fuelPercent);

const tmp = {
    a: 0
}

console.log (spaceShip.crew[0].name);

// add, delete

const empty = {};

empty['name'] = '세온';
console.log(empty);
delete empty.name;
console.log(empty);

console.log(spaceShip);

spaceShip.crewNumber = spaceShip.crew.length;

console.log(spaceShip);


/**
 * call by reference 
 */
function printShip(ship) {
    ship = {};
    ship.fuelPercent = 10;
}

console.log(spaceShip);
printShip(spaceShip);
console.log(spaceShip);

let value = 0;
/*
call by value
primitive type / 원시타입
문자열, 숫자, 참/거짓
*/
function change(outV) {
    console.log('inside',outV);
    outV++;
    console.log('inside',outV);
}

console.log('outside', value);
change(value);
console.log('outside',value);

 /**
  * 
  * 
  * 
  * 
  */

//    [0001]      0001
const arr =       [];

console.log(arr);
function bb(bb_arr){
    bb_arr = [];
    console.log(bb_arr);
    bb_arr[0] = 100;
    console.log(bb_arr);
}
bb(arr);
console.log(arr);


/**
 * 객체
 * 
 * 1. Key, value
 * 2. value => property -> 실행 가능한것들을 method
 * 3. literal
 *     {
 *       [key: string;]: any;
 *     }
 * 4. 추가 , 제거 가능
 * 5. {func(){}} === {"func":function(){}}
 *    {asd: "asd"} === {"asd":"asd"}
 * 6. nested object => 중첩된 객체 => 객체 하위에 value로 다른 객체를 가질수 있다.
 * 7. call-by-reference => 객체를 함수의 인자로 넘겼을때 객체의 주소가 전달된다.
 */