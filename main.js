//TODO: Display content to the user
//TODO: Prompt the user for an action
//TODO: Handle that action accordingly

// =====================================================================================================================

// input prompt-sync

const prompt = require('prompt-sync')({ sigint: true });



//=======================================================================================================================

// list of Variables 
let array = [];
let option1 = 1;
let option2 = 2;
let option3 = 3;
let toDo = true;

//=======================================================================================================================

//Greed User 
console.log('Welcome to the To-Do List Manager Application!');

//=======================================================================================================================

//Loop to get a input from user and perfom a action.  

while(toDo){
    if(array.length == 0){
        console.log('Your to-do list is empty.');
    }else if(array.length > 0){
        console.log('You have ',array.length,' to-do item(s).');
        for ( let i = 0; i < array.length; i++){
            const completed = array[i].completed ? 'complete' : 'incomplete'; // True or False statments. if True display complete, else display Incomplete. 
            console.log(i + 1 + '.  ['+ completed + '] ' + array[i].todo); // Display Action for Complete or Incomplete TODO items.
        }
    }
    //Always display to user   ========================================================================================
    
    console.log();
    console.log('~ Select an action ~');
    console.log('[1] Create a to-do item');
    console.log('[2] Complete a to-do item');
    console.log('[3] Delete a to-do item');
    let answer = Number(prompt(''));
    
    //Ask for the options/answers =====================================================================================
    
    if (answer == option1) {
        console.log('~ Creating a new to-do item ~');
        console.log('What is this to-do item called?');
        createToDo = prompt(''); // store inputs
        let newTodo = {'todo': createToDo, 'complete' : false}; //multi arrays.
        array.push(newTodo); // add to arrays
    }else if(answer == option2){
        console.log('~ Completing a to-do item ~');
        console.log('Which to-do item would you like to complete?');
        let done = Number(prompt(''));
        array[done - 1].completed = true; // change false statment to true so incomplete to complete.
    }else if(answer == option3){
        console.log('~ Deleting a to-do item ~');
        console.log('Which to-do item would you like to Delete?');
        let done = Number(prompt(''));
        array.splice(done - 1, 1); // used to remove one item from the TODO list.
        
        // To kill Loop =============================================================================================
        
    }else if(answer == 666){
        toDo = false;
    }
}
