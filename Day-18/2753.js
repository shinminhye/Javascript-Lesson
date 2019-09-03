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
    let year = Number(input);
    // console.log(JSON.stringify(input));
    // console.log(JSON.stringify(year));

    let flag = false;

    if ((year % 4) === 0) {
        flag = true;

        if ((year % 100) === 0) {
            flag = false;

            if ((year % 400) === 0) {
                flag = true;
            }
        }
    }

    // if (flag){
    //     write('1');
    // } else {
    //     write('0');
    // }
    write(flag ? '1' : '0');
    // write('0');
    // write('1');
}

main();
