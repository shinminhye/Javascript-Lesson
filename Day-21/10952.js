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
    /**
     * @type [number, number][];
     */
    const stream = input
        .split('\n')
        .map(it => it.replace(/\r/g, ''))
        .map(it => it.split(' ').map(v => Number(v)));
    ;

    // console.log(stream);
    let idx = 0;
    while (true) {
        const line = stream[idx++];
        if (line[0] === 0) {
            break
        }
        const sum = line[0] + line[1];
        write(sum + '\n');
        // write(`$\n`);
    }
}

main();