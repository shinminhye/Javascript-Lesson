/**
 * 1, 2, 3, 4, 5
 * 
 * 
 */

const arr_01 = [1, 2, 3, 4, 5];

// console.log(arr_01);

const arr_02 = [1, 'a', {key: 'value'}, arr_01];

// console.log(arr_02);

// 숫자, 문자열, 참거짓와는 다른성질

function test(arr){
    console.log(arr);
    arr.push(123);
}

// test(arr_02);
// console.log(arr_02);

// console.log(arr_02.length);
// console.log(arr_02[4]);



Array.prototype.pop     // 마지막 값을 추출

[1, 2, 3, 4, 5].pop()

Array.prototype.push    // 마지막 인덱스에 값을 삽입

let lastLength = [1, 2, 3, 4, 5].push(9)
// ret 6
// arr [1, 2, 3, 4, 5, 9]
Array.prototype.concat  // 배열을 합쳐서 새오룬 배열을 만든다.

[1, 2, 3].concat([4, 5 ,6])

const a= [].concat([1, 2, 3], [4, 5, 6])

Array.prototype.unshift
Array.prototype.shift

// 랜덤 엑세스
[idx]
Array.prototype.slice
Array.prototype.splice
Array.prototype.indexOf // 배열에서 특정한 값을 찾아 그 인뎃스르 리턴한다.(없으면 -1)

// 정렬
Array.prototype.reverse // 배열의 내용을 역순으로 배열한다. 
Array.prototype.sort

// Iterators

Array.prototype.forEach
Array.prototype.filter
Array.prototype.join
Array.prototype.map

const arr_05 = [
    '1	History',
    '1.1	Beginnings at Netscape',
    '1.2	Server-side JavaScript',
    '1.3	Adoption by Microsoft',
    '1.4	Standardization',
    '1.5	Later developments',
    '2	Trademark',
    '3	Features',
    '3.1	Universal support',
    '3.2	Imperative and structured',
    '3.3	Dynamic',
    '3.4	Prototype-based (object-oriented)',
    '3.5	Functional',
    '3.6	Delegative',
    '3.7	Miscellaneous',
    '3.8	Vendor-specific extensions',
];

const head = [1, 2, 3, 4];
const tail = [7, 8, 0,9 ];
//console.log(head.concat(tail, tail, tail));
//console.log(head, tail);

//console.log(head);
//console.log(head.shift());
//console.log(head);


//console.log(head);
//console.log(head.unshift(0));
//console.log(head);

//console.log(head.indexOf(4));
//console.log(head.indexOf(5)!==-1);

//console.log(head.reverse());
//console.log(head);

function addLi(title){
    console.log(title);
}

// for(let i=0; i<arr_05.length;i++){
//     i++;
//    addLi(arr_05[i]);
// }

// arr_05.forEach(value => addLi(value));

const int_arr = [1, 2, 6, 4, 5, -5]

console.log(
    int_arr
    .slice(2, 4)
);
 //            0  1  2  3  4  5

// console.log(int_arr);

// console.log(int_arr.splice(2, 2, 'x', 'Y'));

// console.log(int_arr);

int_arr.sort();
console.log(int_arr);

const str_arr = [
    'aaaaa',
    'aaaa',
    'baaa',
    'abb',
    'Aaa',
    'aaa'
];

int_arr.sort((a, b) => {
    return b-a;
});
// int_arr.reverse();
// console.log(int_arr);

const obj_arr = [
    {id: 1, title: 'Banana'},
    {id: 2, title: 'Apple'}
];
obj_arr.sort((a, b) => {
    return a.title>b.title ? 1 : -1;
});
// console.log(obj_arr);

// filter
console.log(
arr_05.filter(str => {
    // console.log(, str);
    return str.indexOf('k') !== -1;
})
)

console.log(arr_05[0]);
console.log(arr_05[0].replace(/^([0-9.\s])+/, ''));
// map
console.log(
    arr_05.map(str => {
        return str.replace(/^([0-9.\s])+/, '');
})
)
// join