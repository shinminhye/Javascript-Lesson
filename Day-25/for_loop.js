// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

for (i = 0; i <= 9; i++) {
    // console.log(i);
}

// 4, 5, 6, 7, 8, 9
for (i = 4; i <= 9; i++) {
    // console.log(i)
}

// 2, 4, 6, 8, 10
// 1, 2, 3, 4, 5
for (i = 2; i <= 10; i = i + 2) {
    // console.log(i);
}

for (i = 1; i <= 5; i++) {
    // console.log(i*2);
}

/**
 * i = i + 3;
 * i += 3;
 * 
 * i += 1;
 * i++;
 * 
 * i = i - 3;
 * i -= 3;
 * 
 * i = i-1;
 * i -= 1;
 * i--;
 */

// 9, 12, 15, 18, 21
for (i = 9; i <= 21; i = i + 3) {
    // console.log(i);
}
for (i = 3; i <= 7; i++) {
    //  console.log(i * 3);
}

// 9, 8, 7, 6, 5,4 ,3 , 2, 1, (0)
//
// i>0
// true && true  ==> true
// true && false ==> false
for (i = 9; i > 0; i--) {
    // console.log(i);
}

// 12, 9, 6, 3, 0
for (i = 4; i >= 0; i--) {
    // console.log(i*3);
}

// 18, 13, 8, 3
for (i = 18; i >= 3; i = i - 5) {
    // console.log(i);
}

/**
 * 인자로 들어온 숫자 i만큼 왼쪽정렬된 별을 출력한다.
 */
function lineOfStar(i) {
    let result = '';

    // i 번 반 복
    for (r = 1; r <= i; r++)
    { // result에 * 하나를 추가한다.
        result += '*';
    }

    // 출력
    console.log(result);
}

for (i = 10; i > 0; i--) {
    //   lineOfStar(i);
}

for (i = 10; i > 0; i--)
{ // 별을 i개만큼 찍는다.
    let result = '';
    let numOfSpace = 10 - i;

    for (r = 0; r < numOfSpace; r++) 
    { //  result에 공백 하나를 추가한다.
        result += ' ';
    }

    for (r = 0; r < i; r++) 
    {  // result에 * 하나를 추가한다.
        result += '*';
    }

    // console.log(result);
}


for (i = 0; i < 6; i++)
{ // 별을 i개만큼 찍는다.
    let result = '';
    let numOfSpace = 5 - i;

    for (r = 0; r < numOfSpace; r++) 
    { //  result에 공백 하나를 추가한다.
        result += ' ';
    }
    let numOfstar = (i*2)+1 ;

    for (r = 0; r < numOfstar; r++) 
    {  // result에 * 하나를 추가한다.
        result += '*';
    }

    console.log(result);
}
