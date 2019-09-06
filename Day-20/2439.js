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
    /********** */
    // console.log(input);
    const N = Number(input);
    for (let i = 1; i <= N; i++) {
        for (let s = 1; s<=N-i; s++) {
            write(' ');
        }
        for (let j = 1; j <= i; j++) {
            write('*');
        }
        write('\n');
    }
}

main();