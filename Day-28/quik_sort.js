const _arr = Array.apply(null, {length: 10000}).map(() => Math.random());

function quick(arr, startIdx, endIdx) {
    if (
        (startIdx === endIdx) ||
        (startIdx > endIdx)
    ) {
        return;
    }
    const pivotIdx = startIdx;
    const pivotValue = arr[pivotIdx];
    let storeIdx = pivotIdx + 1;

    for (let i = pivotIdx + 1; i <= endIdx; i++) {
        if (arr[i] < pivotValue) {
            const temp = arr[storeIdx];
            arr[storeIdx] = arr[i];
            arr[i] = temp;
            storeIdx++;
        }
    }

    arr[pivotIdx] = arr[storeIdx - 1];
    arr[storeIdx - 1] = pivotValue;

    const start1 = startIdx;
    const end1 = storeIdx - 2;

    const start2 = storeIdx;
    const end2 = endIdx;

    quick(arr, start2, end2);
    quick(arr, start1, end1);
}

quick(_arr, 0, _arr.length - 1);


// console.log(_arr);

// function Test(N){
//     console.log(N);
//     if(N>10){
// // return;
//     }
//     Test(N+1);
// }

// Test(0)