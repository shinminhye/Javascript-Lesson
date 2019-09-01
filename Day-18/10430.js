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
    const input = readInput(); // 1 
    let result = '';
    /********** */

    const tokens = input.split(' ');// ['1','4']
    //console.log(tokens);

    let A = Number(tokens[0]); // 1
    let B = Number(tokens[1]);
    let C = Number(tokens[2]); // 4


    /***********/
    write((A + B) % C);
    write('\n');
    write((A % C + B % C) % C);
    write('\n');
//     write(A*B)%C
}

main();
