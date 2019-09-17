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
    const tokens = input
        .split('\n')
        .map((line) => line.replace(/\r/g, ''))
        ;
    // console.log(tokens);
    const line1 = tokens[0]; // N X
    const line2 = tokens[1]; // A
    // console.log(input);
    const line1_tokens = line1
        .split(' ')
        .map((value) => Number(value))
        ;
    // const N = line1_tokens[0];
    const X = line1_tokens[1];
    /*
    const A = line2
        .split(' ')
        .map((value) => Number(value));
    */
    const result = line2
        .split(' ')
        // .map((value) => Number(value))
        /*
        .map(function(value){
            return Number(value);
        })
        */
        // .map((value)=>{return Number(value)})
        // .map(value => {return Number(value)})
        .map(value => Number(value))
        .filter(v => v < X)
        .join(' ')
        ;

    write(result);

    // console.log({ N, X, A });
    /*
    for (let i = 0; i < A.length; i++) {
        if (A[i] < X) {
            // console.log({ i, v: A[i] })
            write(A[i]);
            // i  0 1 2 3 4 5 6 7 8 9] ... N-1
            // if O O O O O O O O O X
             //   X X X X X X X X X O 
            if (i !== N - 1) {
                write(' ');
            }
        }
    }
    */


    // console.log({line2:Number(line2)})
}

main();