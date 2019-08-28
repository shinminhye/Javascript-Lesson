/**
 *  Celcious to Kelbin
 */

if (false) {
    const ceilcious = -273.20;

    if (typeof ceilcious !== 'number') {
        console.error('Celicious is not number');
    }
    else {
        let kelbin = ceilcious + 273.15;

        if (ceilcious < -273.15) {
            console.error('Invalid temperature C');
        }
        else {
            console.log('Celcious ' + ceilcious + 'c is in kelbin ' + kelbin + 'K');
        }
    }
}



/**
 * 승자 정하기
 **/

function rand3() {
    return Math.floor(Math.random() * 10);
}

const a = rand3();
const b = rand3();
// const c = Math.random();

console.log(`A: ${a}, B: ${b}`);

if (a > b) {
    console.log("a가 이겼따");
}
else if (a < b) {
    console.log("b가 이겼따");
}
else {
    console.log("비겼따");
}



// if (kelbin >= 0) {
//     console.log('Celcious '+ ceilcious+'c is in kelbin ' + kelbin+'K');
// } else {
//     console.error('Invalid temperature K');    
// }


// // ceilcious + 273.15

// let kelbin;



// 


// const kelbin = 0;

// let ceilcious = kelbin - 273.15;
// console.log(ceilcious);
