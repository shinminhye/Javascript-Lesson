function onloadCallback() {

    /**
     * 최상위 스코프 => window
     * 
     * DOM 트리 루트는  => document
     */

    /**
     * DOM트리에서 원하는 엘리먼트 찾기
     * 
     * docuemnt.getEelementById
     * docuemnt.getEelementsByClass
     * docuemnt.getEelementsByTagName
     */

    const h1_headline = document.getElementById('headline');

    /**
     * JS 객체로 불러와진 엘리먼트의 attribute는 cammel-case로 변환된 이름들로 접근간능하다
     */

    h1_headline.style.color = 'red';
    h1_headline.style.fontSize = '50px';

    /**
     * document.querySelectorAll
     * 
     * CSS 셀럭터에 맞는 엘리먼트를 한번에 조회 가능
     */

    console.log(document.querySelectorAll('.ul__li'));

    /**
     * 엘리먼트 동적으로 생성 => document.createElement(<태그이름>)
     * 엘리먼트 동적으로 DOM트리에 추가  => 
     *      <부모노드>.appendChild(<추가할 엘리먼트>)
     *      <부모노드>.insertBefore(<추가할 엘리먼트>, <위치 anchor>)
     * 
     * DOM 트리에서 엘리먼트 제거
     * <부모노드>.removeChild(<제거할 엘리먼트>);
     */

    const div = document.createElement('div');

    div.innerHTML = 'Hello?';

    document.body.insertBefore(div, h1_headline);
    document.body.insertBefore(div, h1_headline.nextSibling);
    document.body.removeChild(div);

    /**
     * 하ㅟ 객체 리스팅
     * 
     * <부모노드>.children   => 태그 기준
     * <부모노드>.childNodes => 노드 기준
     *    모든 html 엘리먼트 객체 사이에는 text노드가 존재
     */

    // renderTodolist();

    // h1_headline.onclick = onHeadClick;
    document.querySelectorAll('li')
        .forEach(li => li.onclick = onLiClick);
    document.querySelector('ul').onclick = onUlClick;
}

function onLiClick(event) {
    /**
     * 버블링
     * 
     * 이벤트가 발생하면 이벤트는 발생한 원본객체를 시작으로(target)을 시작으로
     * 돔트리를 거슬러 올라가면서 부모노드들의 이벤트 핸들러를 활성화 한다.
     *  */

    // 버블링을 통한 전파를 막는다.
    event.stopPropagation();
    //  전파도 막고, 이벤트를 취소한다.
    event.preventDefault();
    console.log('LI CLICK!!', event, event.target)
}

function onUlClick(event) {
    console.log('UL CLICK!!', event, event.target)
}

const todoListData = {
    title: 'Todolist ' + new Date(),
    list: [
        {
            done: true,
            title: 'HTML'
        },
        {
            done: false,
            title: 'JS'
        },
        {
            done: false,
            title: 'CSS'
        },
        {
            done: true,
            title: 'Typesciprt'
        }
    ]
};

function onTodoClick2(idx) {
    todoListData.list[idx].done = !todoListData.list[idx].done;
    renderTodolist();
}

function onTodoClick(event) {
    console.log("todoClickd");

    const todoLi = event.target.closest('li');

    const idxStr = todoLi.getAttribute('x-data-idx');
    let idx = Number(idxStr);
    todoListData.list[idx].done = !todoListData.list[idx].done;

    renderTodolist();
}

/**
 * 전역 변수 todoListData의 내용을 ul.todolist 에 랜더링 한다.
 */
function renderTodolist() {
    const title = document.getElementById('title')
    title.innerHTML = todoListData.title;

    // const todolist = document.getElementsByClassName ('todolist')[0];
    const todolist = document.querySelector('.todolist');

    /**
     * li 엘리먼트를 만들어서 todolist (변수-ul객체)에 추가 한뒤
     * li의 내용을 전달받은 todoTitle 문자열로 바꾼다.
     * @param {string} todoTitle 추가할 li의 내용(문자열)
     */
    function createLiAndInsert(idx, todoTitle, done) {
        const todo = document.createElement('li');

        // console.log (todo);
        // 1. li 엘리먼트 생성
        // todo.innerHTML = todoTitle;

        // todo
        //  |-checkBox
        //  |-title

        // li
        //  |-input
        //  |-span
        {
            const checkBox = document.createElement('input');
            const title = document.createElement('span');
            // 1. checkBox(input 태그)를 todo(li 태그) 하위에 추가
            todo.appendChild(checkBox);
            // 2. title(span 태그)를 todo(li 태그) 하위에 추가
            todo.appendChild(title);

            // 3. checkbox 의 type attribute 를 'checkbox' 로 변경 
            checkBox.type = "checkbox";
            // 4. checkbox의 chekced attribute를 활성화
            checkBox.checked = done;
            // 5. title의 내용을 채운다. 
            title.innerHTML = todoTitle;
            // <Node>.appendChild(<Node>)

        }
        // 2. 생성한 li의 내용 변경
        // document.body.insertBefore(div, h1_headline.nextSibling);
        // todolist.insertBefore(todo, todolist.childNodes[0]);
        // todolist.appendChild(todo);
        const n = todolist.childNodes.length
        todolist.insertBefore(todo, todolist.childNodes[n - 1]);

        /**
         * idx를 클로저에 포함시켜서 onTodoClick2를 호출한다.
         */
        const newCb = function () {
            onTodoClick2(idx);
        }
        todo.addEventListener('click', newCb);
        todo.setAttribute('x-data-idx', idx.toString())
        // 3. ul 에새로운 li 삽입 
    }

    console.log(todoListData.list);
    // ul 자식을 초기화

    /*
    for(let i=0; i < todolist.children.length; i++) {
        const todoLi = todolist.children[i];
        todolist.removeChild(todoLi);
    }
    */
    while (todolist.firstElementChild) {
        todolist.removeChild(todolist.firstElementChild);
    }
    // 0 ~ N-1
    for (let index = 0; index < todoListData.list.length; index++) {
        const todoData = todoListData.list[index];
        // console.log();
        createLiAndInsert(index, todoData.title, todoData.done);
    }
    // <input type="checkbox"></input>
    // <span>HTML</span>

    // const span = document.createElement('span');
    // span.innerHTML = '<span>';

    // document.body.insertBefore(span, li.childNodes.nextSibling);
    // todoData.title.innerHTML
}

// window.addEventListener()

// window.onload = onloadCallback;
// window.addEventListener('load', onloadCallback);

// window.onload = onloadCallback;
// window.onload = function(){}
// window.onload = renderTodolist;

window.addEventListener('load', onloadCallback);
window.addEventListener('load', renderTodolist);
