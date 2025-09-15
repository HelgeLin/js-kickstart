const prompt = require('prompt-sync')();

console.log("Welcome to your Personal Task Manager!");
console.log("Chose and option")
let todoTask = ["Grind Overwatch 2", "Eat", "Sleep", "Repeat"];
function showTasks(){
let tasks = ["Task 1", "Task 2"];
console.log("My Tasks:");
for (let i = 0; i < todoTask.length; i++) {
    console.log("- " + todoTask[i]);
}
}
function addTask(){
    let Newtask = promt("enter new task:")
    todoTasks.push(Newtask)
    promptchoice();
}

function completedTasks(){
    let Newtask = prompt("Enter new task");
    if (todoTasks.contain());
}

function showMenu() {
    console.log("1. Add task");
    console.log("2. Complete task");
    console.log("3. Show tasks");
}

function promptchoice(){
let choice = prompt("Choose an option: ");
    if (choice == 1);
    
    }

//function markTaskComplete(taskIndex)
//function showAllTasks()
//function countRemainingTasks()
//function deleteTask(taskIndex)


// Mini-Project: Personal Task Manager
// Build your own task management system!

// 📖 IMPORTANT: Read the README.md file first for detailed instructions,
//    examples, and ideas on how to approach this project!

// This is YOUR project - there are no strict requirements!
// You can implement this however you want using what you've learned.

// Here are some ideas to get you started:

// IDEA 1: Simple task array
// let tasks = [];

// IDEA 2: Separate completed and todo lists
// let todoTasks = [];
// let completedTasks = [];

// IDEA 3: Parallel arrays (same index for related data)
// let tasks = ["Learn JavaScript", "Build a project"];
// let completed = [false, false];

// TODO: Choose your approach and start coding!

// Some function ideas (you don't have to use these exact names):
 

// Example starter code (feel free to delete and start fresh):


// Uncomment and modify this example, or create your own approach:
/*
let myTasks = ["Learn arrays", "Practice functions", "Build this project"];

function showTasks() {
    console.log("\nYour Tasks:");
    for (let i = 0; i < myTasks.length; i++) {
        console.log((i + 1) + ". " + myTasks[i]);
    }
}

function addTask(newTask) {
    myTasks.push(newTask);
    console.log("Added: \"" + newTask + "\"");
}

// Test your functions
showTasks();
addTask("Master JavaScript");
showTasks();
*/

// YOUR CODE GOES HERE:
// Remember: There's no "right" way to do this!
// Make it work, make it yours, and have fun!'


// Note: If you want to make this interactive you can also refactor the cli.js.