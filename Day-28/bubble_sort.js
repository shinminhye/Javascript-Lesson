const arr = Array.apply(null, {length: 10000}).map(() => Math.random());

/////

var swapped; // 기본값 : false, 변경이 일어 났을때 true. => 아직 정렬 완료 전이다.
var i;       // for 문에서 사용하는 인덱스 변수.
var indexOfLastUnsortedElement = arr.length - 1; // 정렬되지 않은 요소의 인덱스중 제일 큰 숫자 =>  초기값: 제일 마지막 인덱스
var leftElement; // 현재 비교중인 왼쪽 인덱스
var rightElement;// 현재 비교중인 오른쪽 인덱스

function swap(_leftElement, _rightElement) { // arr 에서 두 인뎃스의 실제 값을 교환
    
}
// N-1, 2, 1
// N*(N-1)/2 - 1
// do somthing while true
//
// N^2      1000000
// n Log N  3000
// do {/** something */} while (true);
console.log(new Date());
do {
    swapped = false
    for (i = 1; i <= indexOfLastUnsortedElement; i++) {
        // i=1; i<=14; i++

        //  3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48
        //  0,1                                              13,14

        leftElement = i - 1;
        rightElement = i;

        if (arr[leftElement] > arr[rightElement]) {
            // swap(leftElement, rightElement);
            tmp = arr[rightElement];
            arr[rightElement] = arr[leftElement];
            arr[leftElement] = tmp;
            swapped = true;
        }
    }
    indexOfLastUnsortedElement--;
} while (swapped);
console.log(new Date());

/////

console.log(arr);
