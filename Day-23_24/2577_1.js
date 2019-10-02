let number = 1515661883;

const result_actual = [

];

// t=0;
while (number !== 0) {
    result_actual.push(number % 10);
    number = Math.floor(number / 10);
}

//  * / + - %

// 1515661883 = 151566188 * 10 + 3;
// 1515661883 % 10 => 3;
// 1515661883 - floor(1515661883 / 10) * 10 



const result_expect = [3, 8, 8, 1, 6, 6, 5, 1, 5, 1];

console.log({
    result_actual, result_expect
})