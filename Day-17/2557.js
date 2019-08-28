const process = require('process');
const fs = require('fs');

/**
 * @returns {string}
 */
function readInput() {
    const size = fs.fstatSync(process.stdin.fd).size;

    let input = '';

    if (size > 0) {
        const buffer = Buffer.alloc(size);
        fs.readSync(process.stdin.fd, buffer, 0, size);
        input = buffer.toString();
    }

    return input;
}

/**
 * @param {string} string 출력 데이터
 */
function write(string) {
    const buffer = Buffer.from(String(string));
    fs.writeSync(process.stdout.fd, buffer, 0, buffer.length);
}

function main() {
    const input = readInput(); // 1 
    /********** */
    let result = 'Hello World!'
    /********** */
    write(result);
}

main();