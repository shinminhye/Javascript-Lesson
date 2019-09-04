const A = 80;
const B = 'a';
const C = 13;
const D = 75;

/**
 * A 90보다 크거나 C가 30보다 작은경우
 * 
 * A가 90 이하이고 C가 30이상이다
 */

function getA(){

}

function getC(){

}

console.log(A > 90); // A가 90보다 크다
console.log(C < 30); // C가 30보다 작다
console.log(getA() > 90 || getC() < 30);

const sub1 = A <= 90;
const sub2 = C >= 30;
console.log(sub1 && sub2);
