/**
 *  Celcious to Kelbin
 * 
 * 인자 하나로 섭씨온도를 입력 받고 절대온도 K값을 리턴한다.
 * 변환이 불가능 할경우에는 값을 리턴하지 않는다.
 * 
 * 
 * 
 function <함수이름>(<인자이름>, <인자이름>, <인자이름> ... ) {
     return <반환 값>;
     return;
 }
 */

// 1. 숫자로 입력받은 C를 적절한 연산을 통해서 숫자 K로 변환해서 반환
// 2. C에 273.15를 더하면 숫자 K가 된다
// 3. K = C + 273.15 
// 4. f(C) = C + 273.15
// 5. 만약 K가 0보다 작으면 애러이다.
// 6. if (K < 0) {}
// 7. C가 숫자가 아니면 에러이다.
// 8. if (typeof C  ===  'string')

const K = 'this is kelin';

function cToK(C) {
    if(typeof C !== 'number' || isNaN(C)) {
        throw new Error('숫자만 가능합니다.')
    }
    if (C < -273.15) {
        throw new Error('K cannot be smaller then 0.');
    }
    return C + 273.15;
}

//function cToK(ceilcious) {
// isNumber

// kelbin is valid

    //     const ceilcious = -273.20;
    
    //     if (typeof ceilcious !== 'number') {
    //         console.error('Celicious is not number');
    //     }
    //     else {
    //         let kelbin = ceilcious + 273.15;
    
    //         if (ceilcious < -273.15) {
    //             console.error('Invalid temperature C');
    //         }
    //         else {
    //             console.log('Celcious ' + ceilcious + 'c is in kelbin ' + kelbin + 'K');
    //         }
    //     }
//}

console.assert(cToK(-273.15) === 0, "-273.15c should be 0K");
console.assert(cToK(0) === 273.15, "0c should be 273.15K");
// console.assert(isNaN(cToK(-273.25)), "-273.25 cannot converted to kelbin");

try {
    isNaN(cToK(-273.25))
    console.error('Should not be executed.');
}catch(e){}

try {
    cToK('asdasdasd');
    console.error('Should not be executed.');
}catch(e){}

try {
    console.log(cToK(NaN));
    console.log(cToK({}));
    console.log(cToK(undefined));
    console.error('Should not be executed.');
}catch(e){}
