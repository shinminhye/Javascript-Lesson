const process = require('process');
const fs = require('fs');

/**
 * @returns {string}
 */
function readInput() {
    try {
        const size = fs.fstatSync(process.stdin.fd).size;

        let input = '';

        if (size > 0) {
            const buffer = Buffer.alloc(size);
            fs.readSync(process.stdin.fd, buffer, 0, size);
            input = buffer.toString();
        }

        return input;
    } catch (e) { return ''; }
}

/**
 * @param {string} string 출력 데이터
 */
function write(string) {
    const buffer = Buffer.from(String(string));
    fs.writeSync(process.stdout.fd, buffer, 0, buffer.length);
}

function main() {
    let input = readInput(); // 10 10
    // console.log({input});
    const lines = input.split('\n');
    const line2 = lines[1];
    const numArr = line2
        .split(' ')
        .map(num => Number(num));

    // let min = 1000000;
    // let max = -1000000;
    let min = numArr[0];
    let max = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        let current = numArr[i];
        // let isCurrentSmallerThenMin = current < min;
        // let isCurrentSmallerThenMax = current > max;
        if (current < min) {
            min = current;
        };
        if (current > max) {
            max = current;
        };
    }
    write(min + ' ' + max);
    //    console.log(line2);
/*
              //  Math.min.call(null, ...numArr);
    const min = Math.min.apply(null, numArr);
    const max = Math.max.apply(null, numArr);
    write(min + ' ' + max);*/
}

main();