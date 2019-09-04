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
    let i = 1;
    for (i = 1; i <= 9; i++) {
        //console.log(i);
        write(Num + ' * ' + i + ' = ' + Num * i + '\n');
    }

    console.log(i);
}

main();