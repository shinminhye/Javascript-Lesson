const numbers = [
    1,
    2, 2,
    3, 3, 3,
    4, 4, 4, 4,
    5, 5, 5, 5, 5,
    6, 6, 6, 6, 6, 6,
    7, 7, 7, 7, 7, 7, 7,
    8, 8, 8, 8, 8, 8, 8, 8,
    9, 9, 9, 9, 9, 9, 9, 9, 9
];

// 1 ~ 65 (numbers.length)
// 0 ~ 64 (number.length -1)

function method_1(targetNumber) {
    // 원하는 숫자의 개수를 세는 방법
    let count = 0;
    /* 반복문 */
    /**
     * numbers 의 각 숫자를 하나씩 가져와서 currentNumer에 넣어놓고
     * numbers[<index>] => currentNumber
     * 
     * 0 <= (i=0,1,2,3...64) <= 64
     * 0 <= i 그리고 i<=64 
     * 0 <= i && i<=64 
     * 
     * <초기값 설정>;<조건>;<변화>
     */
    // for (let i=0; /*0 <= i &&*/ i /* +1 */ < number.length /*-1)+1*/;i++) {
    for (let i = 0; i < numbers.length; i++) {
        // number[0] ... numbers[64]
        const currentNumber = numbers[i];
        /**
         * currentNumer가 targetNumer 와 같으면
         * count에 1을 더할것이다.
         */
        if (currentNumber == targetNumber) {
           count++;
        }
    }

    return count;
}

function method_2() {
    // 인덱스와 숫자의 개수가 맵핑된 배열 사용
    let countMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let c=0;c<=numbers.length-1;c++){
        const currentNumber = numbers[c];
        countMap[currentNumber]++;
    }

    console.log(countMap);

}
method_2();
// for (t=0;t<=9;t++){
//     console.log({
//         t,
//         cnt: method_1(t)});

// }