// input prompt-sync

const prompt = require('prompt-sync')({ sigint: true });

//TODO: Display content to the user
//TODO: Prompt the user for an action
//TODO: Handle that action accordingly

let array = [];
let option1 = 1;
let option2 = 2;
let option3 = 3;
let todoCount = 0;
let todoComplete = [];
let toDo = true;


console.log('Welcome to the To-Do List Manager Application!');
console.log('');



while(toDo){
    if(array.length == 0){
        console.log('Your to-do list is empty.');
    }else if(array.length > 0){
        console.log('You have ',array.length,' to-do item(s).');
        for ( let i = 0; i < array.length; i++){
            const completed = array[i].completed ? 'complete' : 'incomplete';
            console.log(i + 1 + '.  ['+ completed + '] ' + array[i].todo);
        }
    }
    console.log();
    console.log('~ Select an action ~');
    console.log('[1] Create a to-do item');
    console.log('[2] Complete a to-do item');
    console.log('[3] Delete a to-do item');
    let answer = Number(prompt(''));
    if (answer == option1) {
        console.log('~ Creating a new to-do item ~');
        console.log('What is this to-do item called?');
        createToDo = prompt('');
        let newTodo = {'todo': createToDo, 'completed' : false};
        array.push(newTodo);
    }else if(answer == option2){
        console.log('~ Completing a to-do item ~');
        console.log('Which to-do item would you like to complete?');
        let done = Number(prompt(''));
        array[done - 1].completed = true;
    // }else if(answer == option3){
    //     console.log('~ Deleting a to-do item ~');
    //     console.log('Which to-do item would you like to Delete?');
    //     let done = Number(prompt(''));
    //     array.splice(done - 1, 1);
    }else if(answer == 666){
        toDo = false;
    }
}


// for (let i = 0; i < todos.length; i++) {
//     const todo = todos[i];
//     const isComplete = areTodosComplete[i];
// }
