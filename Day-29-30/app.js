// 1. DOM -> Document Object Model => DOM Tree
// 페이지에서 사용자에게 내용을 표시하기 위한 엘리먼트, 사용자의 입력을 받을 엘리먼트의 레퍼런스를 획득

/**
 * document
 * 
 * document.getElementById(<id>);  asd => <div id="calculator">
 * document.getElementsByClassName(<class>); asdasd => .pad--line__btn
 * document.querySelectAll(<>);  class, id, [asd="asd"], :active .display spanl
 * 
 getElementsByClassName, querySelectAll 

 조건을 만족하는 엘리먼트가 여러개 있을수 있으므로 ArrayLike (length, index access) 리턴
 그대로 사용하면 일반적인 배열 함수들을 사용 X
 Array.from 메소드로 진짜 Array 를 만들어 사용.
 */
const display = document.querySelectorAll('.display span')[0];

// const btns = document.getElementsByClassName('pad--line__btn');
const btns = Array.from(document.querySelectorAll('.pad--line__btn'));
// 2. 화면 데이터 초기화, display의 숫자를 0
display.innerHTML = '0';

// 3. 상태 정보 저장 공간, store 정의
const store = {
    x: 0,
    ops: '.', // . => 선택전, +,-,*,/ => 사칙연산
    y: 0
}
// 4. store를 조작하는 함수 정의/구현
function onClickNumber(num) {
    const currantValue = store.x;

    const nextValue = currantValue * 10 + num;

    store.x = nextValue;
    display.innerHTML = store.x;
    console.log(store.x);
}



// onClickNumber(1);
// onClickNumber(2);
// onClickNumber(3);
// onClickNumber(4);
// onClickNumber(5);
// onClickNumber(6);
// onClickNumber(7);
// onClickNumber(8);
// onClickNumber(9);

// 5. 상태 조작함수를 뷰(엘리먼트)와 연결, view => click => function
//                                      funtion => data => view

document.querySelector("[x-data-pad-btn='D1']").onclick = function () { onClickNumber(1); }
document.querySelector("[x-data-pad-btn='D2']").onclick = function () { onClickNumber(2); }
document.querySelector("[x-data-pad-btn='D3']").onclick = function () { onClickNumber(3); }
document.querySelector("[x-data-pad-btn='D4']").onclick = function () { onClickNumber(4); }
document.querySelector("[x-data-pad-btn='D5']").onclick = function () { onClickNumber(5); }
document.querySelector("[x-data-pad-btn='D6']").onclick = function () { onClickNumber(6); }
document.querySelector("[x-data-pad-btn='D7']").onclick = function () { onClickNumber(7); }
document.querySelector("[x-data-pad-btn='D8']").onclick = function () { onClickNumber(8); }
document.querySelector("[x-data-pad-btn='D9']").onclick = function () { onClickNumber(9); }
document.querySelector("[x-data-pad-btn='D0']").onclick = function () { onClickNumber(0); }

const arithmeticBtns = Array.from(document.querySelectorAll('[x-data-pad-btn="AM"],[x-data-pad-btn="AD"],[x-data-pad-btn="AS"],[x-data-pad-btn="AP"]'));

function clearSelectedStyle() {
    arithmeticBtns.forEach(btn => {
        btn.style.backgroundColor = '';
    });
}

function arrHasElement(arr, element) {
    return arr.indexOf(element) !== -1;
}

function onArithmeticClick(e) {
    // console.log(e);
    let i = 0
    let target;

    // do {
    //     target = e.path[i];
    //     i += 1;
    // } while (!arrHasElement(arithmeticBtns, target));

    while (true) {
        target = e.path[i];
        i += 1;

        const targetIsInArr = arrHasElement(arithmeticBtns, target);
        if (targetIsInArr) {
            break;
        } else {
            continue;
        }
    }
    //} while(arithmeticBtns.indexOf(target)===-1);

    const action = target.getAttribute('x-data-pad-btn');
    if (action === 'AD') {
        store.ops = '/';
    }
    if (action === 'AP') {
        store.ops = '+';
    }
    if (action === 'AM') {
        store.ops = '*';
    }
    if (action === 'AS') {
        store.ops = '-';
    }
    // console.log(store);

    clearSelectedStyle();
    target.style.backgroundColor = 'red';
}

arithmeticBtns.forEach(btn => {
    btn.onclick = onArithmeticClick;
});


// const clickedElement = {};
// const event = {
//     target: clickedElement
// };
// clickedElement.onclick(event);
