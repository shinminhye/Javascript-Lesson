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
    const input = readInput(); // 10 10
    /********** */
    const Num = Number(input);

/**
 * 90 <= Num && Num <= 100
 * A AND B
 *      Num은 90이상 100 이하이다.
 * A -> 90 <= Num
 *      Num이 90 이상이다.
 * B -> Num <= 100
 *      Num이 100 이하이다.
 */

    if (90 <= Num && Num <= 100) {
        write("A");
    } else if (80 <= Num && Num <= 89) {
        write("B");
    } else if (70 <= Num && Num <= 79) {
        write("C");
    } else if (60 <= Num && Num <= 69) {
        write("D");
    } else {
        write("F");
    }
}

main();