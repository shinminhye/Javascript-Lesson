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

function main2() {
    // 입력으로 주어지는 자연수 문자열
    let input = readInput(); // 10 10
    /********** */
    // console.log(input);
    // 입력을 숫자로 변환한 값
    const N = Number(input);
    // 초기값을 1, i= n보다 작거나 같은동안, 1씩 증가한다. i= 1~n번까지 반복한다.
    for (let i = 1; i <= N; i++) {
        //s는 초기값1, s는 n-i보다 작거나 같은동안, s= 1씩 증가한다.
        //s는 1 ~ n-i보다 작거나 같은동안 반복한다.
        for (let s = 1; s <= N - i; s++) {
            //공백을 쓴다.
            write(' ');
        }
        //j는초기값1, j는 i보다작거나 같은동안, j는 1씩 증가한다.
        for (let j = 1; j <= i; j++) {
            // *를 찍는다.
            write('*');
        }

        //줄바꿈을 한다.
        write('\n');
    }
}

/**
 * n=?
i=*
j=''
l = 1~5

5-3=2
n-i=j

n-(1~n)=j

?-(1-10)=-9


=================

N => 전체 줄수
L => 현재 줄

=========

i => '*' 개수
j => ' ' 개수

=========
i = L
i + j = N
 => L + j = N
 => L + j - L = N - L
 => j = N - L

j = N - L
=========
js=============
function printN(ch, repeat);
// printN(' ', 10);
function printLine(N, L);

function program(N);

function main();
 */

function repeatPrintChar(char, repeat) {
    // repeat ->  ch
    for (let i = 0; i < repeat; i++) {
        write(char);
    }
}

function printLine(N, L) {
    // countSpace = ?
    // countStar = ?
    // repeatPrintChar ' ' countSpace
    // repeatPrintChar '*' countStar
    // write '\n'
}

function program(N) {
    // L => 1 ... N
    // printLine N L
}

function main() { }

main();

// 2019-11-11 RE
