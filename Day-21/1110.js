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
    const N = Number(readInput()); // 10 10
    /********** */
    let A = N;
    let B, cycle = 0;
    // for(let i=0;i<5;i++){
    while (true) {
        let A_10 = Math.floor(A / 10); // floor-버림 ceil-올림 round-반올림
        let A_1 = A - (A_10 * 10); // A % 10;
        B = A_10 + A_1;
        cycle++;// console.log(`${A}\n${B}\n--`);
        let B_1 = B % 10;
        A = A_1 * 10 + B_1;
        if (A === N) {
            break;
        }
    }
    write(cycle);
}

main();