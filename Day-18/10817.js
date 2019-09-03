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
    const input = readInput(); // 
    const tokens = input.split(' ');// ['1','4']

    let A = Number(tokens[0]); // 1
    let B = Number(tokens[1]);
    let C = Number(tokens[2]); // 4

    write([A, B, C].sort().reverse()[1]);
    return;

    let X; 
    let Y; 

    // CAB BAC
    // (C >= A && A >= B) => X
    // (B >= A && A >= C) => Y

    /**
     * if(X or Y){
     * write(A)
     * }
     *
    if((C >= A && A >= B) || (B >= A && A >= C)){
        write(A);
    }
     */
    Y= (B >= A && A >= C);
    X= (C >= A && A >= B);
    if(X || Y){
        write(A);
        return;
    }
     /* 
     * A >= B >= C
     * C >= B >= A
     */
    X = (A >= B && B >= C);
    Y = (C >= B && B >= A);
    if (X || Y){
        write(B);
        return;
    }
    /* 
     * A C B
     * B C A
     */
    X = (A >= C && C>=B);
    Y = (B >= C && C>=A);
    if (X || Y) {
        write(C);
    }

}

main();
