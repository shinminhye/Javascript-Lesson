

const array = [12, 34, 5, 67, 89];
const obj1 = { a: 1 };
const array2 = [12, '123', true, obj1, array];

// console.log(array2);

// console.log(array2[2]);
// console.log(obj1);
// console.log(obj1.a);

// console.log(array2[3].a);
// console.log(array2[3]['a']);
// console.log(array2[4][2]);



// 0   1   2  3   4 
// console.log(array[3]);
// console.log(array[0]);//  + '\n' + array[1] + '\n' + array[2] + '\n' + array[3] + '\n' + array[4]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

const _arr = 4;

// console.log(array[4]);
// console.log(array[_arr]);


for (r = 0; r < array.length; r++) {
    //console.log({
    //    r,
    //    arr: array[r]
    //});
}


const _2d_array = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// console.log(_2d_array);

///////
// _2d_array[1][0] = 3;
// for (i=0; i<3; i++){
//    console.log(_2d_array[i][i]);
//
// }

/*
_2d_array[0][0]='*';

_2d_array[1][0]='*';
_2d_array[1][1]='*';

_2d_array[2][0]='*';
_2d_array[2][1]='*';
_2d_array[2][2]='*';

*/
//           *                 *
// let s = 0;
// for (i=0; i<=s; i++){_2d_array[s][i] = '*';}
// s++;
// for (i=0; i<=s; i++){_2d_array[s][i] = '*';}
// s++;
// for (i=0; i<=s; i++){_2d_array[s][i] = '*';}

for (s = 0; s <= 2; s++) {
    for (i = 0; i <= s; i++) {
        _2d_array[s][i] = '*';
    }
}

///////

for (r = 0; r < _2d_array.length; r++) {
   // console.log(_2d_array[r].join(''));
}
// console.log (_2d_array[0]);
// console.log (_2d_array[1]);
// console.log (_2d_array[2]);
/**
 * [1, 0, 0]
 * [1, 1, 0]
 * [1, 1, 1]
 * 
 * 1,0,0
 * 1,1,0
 * 1,1,1
 */

/**
 * I J V
 * 0 0 1
 * 0 1 0
 * 0 2 0
 * 
 * 1 0 1
 * 1 1 1
 * 1 2 0
 * 
 * 2 0 1
 * 2 1 1
 * 2 2 1
 */

// console.log(_2d_array[0]);
// console.log(_2d_array[1]);
// console.log(_2d_array[2]);

for (i = 0; i < _2d_array.length; i++) {
    // console.log(i, '_2d_array[i]', _2d_array[i]);
    // _2d_array[i] == [1, 0, 0]
}
