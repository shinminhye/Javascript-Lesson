/**
 * 반복문 : loop
 */

const arr_01 = [1, 2, 3, 4, 5];

/*
let idx = 0;

function print(){
    console.log(arr_01[idx]);
    idx++;
}

print();
print();
print();
print();
print();
*/
/**
 * idx = 0; => 초기값
 * idx++; => 변경
 * idx < 5; => 조건
 */

/**
 for (<초기값 초기화>; <조건>; <변경>) {

 }

for(let idx=0;idx < arr_01.length; idx++){
    console.log(arr_01[idx]);
}

 while(<조건>){

 }

let idx = 0;
while(idx < arr_01.length){
    console.log(arr_01[idx]);
    idx++;
}

*/


/**

input = 6;

*
*
*
*
*
*

 */
function vertical_star(input){
    /*
    let i = 0; // 초기값
    while (i < input) { // 조건
        i++; // 변경
    }
    */

    for( let i=0; i < input; i++){
        console.log('*')
    }
}

// vertical_star(9);

/**
 * 
 3
 ***

 6
 ******
 */

function landscape_star(input) {
    let result = '';
    /*
    let i = 0;
    while (i < input){
        result += '*';
        // i++;
        // i = i+1;
        // i+=1;
        i++;
    }
    */

    for (let j = 0; j < input; j++) {
        result += '*';
    }

    console.log(result);
}

// landscape_star(5);

/*

1
*

2
*
**

5
*
**
***
****
*****

*/

function triangle_star(input){
    for (let i = 0; i < input; i++) {
        // i > 0, 1, 2, 3, 4, .... input
        let result = '';

        break;

        for (let j = 0; j < i + 1; j++) {
            result += '*';
            // result = result + '*';
        }
        console.log(result);
    }
}

// triangle_star(5);

// continue, break
/*
let i = 0;
while(true) {
    console.log(i);
    i++;
    if (i >= 5){
            break;
    }
}

for(let i=0;i < 6; i++){
    if(i < 3){
       continue; 
    }
    console.log(i);
}

const str_arr = [
    1, 2, 3, 4, 5, 6
];
// 0 ~ 
// 0~1
// 0 * (str_arr.length - 1) ~ 1 * (str_arr.length - 1)
while(str_arr.length !== 0) {
    var target = Math.floor(Math.random() * str_arr.length);
    // console.log(target);
    let result = str_arr.splice(target, 1)[0];
    if () {

    }
    // console.log(str_arr);
}
*/

/**
 * Iteration
 */

const arr_02 = ['a', 'b', 'c', 'd'];
/*
for (let key in arr_02) {
    console.log(arr_02[key])
}

for (let value of arr_02) {
    console.log(value);
}
*/

function consumer (value, idx, arr) {
    console.log(value, idx, arr);
}

arr_01.forEach(consumer);
arr_02.forEach(consumer);
