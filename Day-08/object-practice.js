
function exercise_01() {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    // name
    // sclass
    // rollno

    // for (let key in student) {
    //     console.log(key, student[key])
    // }
    console.log(Object.keys(student));
    // ["name", "sclass", "rollno"]
}


function exercise_02() {
    const simpleObj = {
        name: 'john kim',
        age: 30
    };

    //
    // const emty = {};
    simpleObj['firstName'] = 'john';
    simpleObj['lastName'] = 'kim';
    delete simpleObj.name;
    // console.log(simpleObj)
    //

    console.log(simpleObj);

    // console.log({
    //     firstName: 'john',
    //     lastName: 'kim',
    //     age: 30
    // })
}

function exercise_03() {
    const obj = {
        a: '123',
        b: 3,
        m: false,
        k: 'asdasdasdadw'
    };
    console.log(Object.keys(obj).length);
}

function exercise_04() {
    const library = [
        {
            title: 'javasciprt',
            genre: 'IT'
        },
        {
            title: 'c++',
            genre: 'IT'
        }
    ];
    //
    const sass =
    {
        title: 'CSS3',
        genre: 'IT'
    };


    library.push(sass);
    // [IT] javascipt

    // 1. 반복문
    // 2. 배열인덱스 접근
    // 3. 객체 prop 접근

    for(let key=0;key<library.length;key++){
        const book = library[key];
        // const book = { title: 'javasciprt', genre: 'IT' };
        const title = book['title'];
        const genre = book['genre'];
        console.log('[' + genre + ']' + ' ' + title);
        // 
        //    console.log(library);
    }

    for (let key in library) {
        const book = library[key];
        // const book = { title: 'javasciprt', genre: 'IT' };
        const title = book['title'];
        const genre = book['genre'];
        console.log('[' + genre + ']' + ' ' + title);
        // 
        //    console.log(library);
    }
}

exercise_04();