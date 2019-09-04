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

    const tokens = input.split(' ');// ['10','10']
    //console.log(tokens);

    let H = Number(tokens[0]); // 10
    let M = Number(tokens[1]); // 10

    /**
     * 4              5              6
     * 0       45     0        45    0
     */
    /*
    if (M < 45) {
        if (H === 0) {
            write(23 + ' ' + ((60 - 45) + M));
        } else {
            write((H - 1) + ' ' + ((60 - 45) + M));
        }
        // write ((H-1) + ' ' + ((60-45)+M));
        // write (23 + ' ' + ((60-4;5)+M))
    } else {
        write(H + ' ' + (M - 45));
    }

    M = M-45;
   
    M -= 45;
    M += 1;
    M *= 45;
    M /= 3;

    M++;
    M--;

    */
    M -= 45;
    if (M < 0) {
        M += 60;
        // H -= 1;
        H--;
    }

    if (H < 0) {
        H += 24;
    }

    write(`${H} ${M}`);
}

main();