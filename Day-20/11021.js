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
    const lines = input.split("\n");
    // console.log(lines);
    const rawT = lines[0].replace("\r", "");

    const T = Number(rawT); // 5
    // console.log(T);

    for (let i = 1; i <= T; i++) {
        const line_input = lines[i];
        const tokens =  line_input.replace('\r', '').split(" ");
        
        let A = Number(tokens[0]);
        let B = Number(tokens[1]);
        // Number('0');

        write('Case #' + i + ": " + (A + B) + '\n');

        // console.log(JSON.stringify());

    }
}

main();