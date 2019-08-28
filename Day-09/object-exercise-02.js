var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'AA',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'CC',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'BB',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

function exercise_01(){
    // library.sort();
    
    library.sort((a, b) => {
        if (a.title===b.title) {
            return 0;
        }
        return (a.title<b.title) ? 1 : -1;
    });

    console.log(library);
}

function exercise_02(){
    const sampleObj = {
        '0001': 'A',
        '0002': 'B'
    };
    const newObj = {
        
    }; 
    //const newObj = {
    //    'A': '0001',
    //    'B': '0002'    
    //};
    //
    for (let key in sampleObj) {
        //sampleObj.key
        //sampleObj['key']
        //sampleObj[key]

        const newKey = sampleObj[key];
        const newValue = key;
        newObj[newKey] = newValue;
    }

    //
    console.log(newObj);
}

function exercise_03(){
    const todoList = [
        {done: false, subject: 'Javascript'},
        {done: false, subject: 'HTML'},
        {done: false, subject: 'Css3'}
    ];
    //console.log(todoList);


    //console.log (todoList[0].done);

    // add, delete
    
    const empty = todoList[0];    
    empty['done'] = true;
    console.log(todoList);

    //todoList[0].done = true;

    // console.log(todoList);

    // console.log(todoList);

    // console.log(todoList);
}

exercise_03();
