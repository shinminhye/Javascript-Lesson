/**
 * Object.assign()
 */

a = 1;

b = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        a: 1,
        a1:{
            c1:{}
        }
    }
};
c = {
    a: 2,
    b: 2,
    d: {
        c: 1,
        a1:{
            c1:{},
            d1:{a:1}
        }
    }
};
/*

console.log(b);
console.log(c);
Object.assign(b, c);
console.log(b);

// shallow copy
const newObject = Object.assign({}, b);

console.log(newObject);

// Object.keys
// 객체의 키값을(문자열)을 담은 배열을 리턴

let obj = {
    a:11,
    b:22,
    c:33
};
///const r = Object.keys(obj);
const keys = Object.keys(obj);
keys.forEach((v) => {
    console.log(obj[v]);
})
*/
function deepCopy(dst, src){
    Object.keys(src)
    .forEach((key) => {
        if(typeof dst[key] === 'object'){
            deepCopy(dst[key], src[key]);
        } else {
            dst[key] = src[key];
        }
    });
}

console.log('init');
console.log(b);
console.log(c);
// Object.assign(b, c);
deepCopy(b, c);

console.log('assign');
console.log(b);
console.log(c);

b.d.c = 'X';
console.log('asign x');
console.log(b);
console.log(c);

/**
 * Function.prototype.call
 */

function getA(){
    console.log(this.a);
}

const objA = {a:'this is obj a'};
const objB = {a:'this is obj B'};

getA.call(objA);
getA.call(objB);
