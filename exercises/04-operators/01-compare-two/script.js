// Compare Two Numbers Exercise
// Read two numbers and compare them using comparison operators

const prompt = require('prompt-sync')();

// TODO: Get the first number from the user
const firstNumber = Number(prompt("Enter first number: "));

// TODO: Get the second number from the user
const secondNumber = Number(prompt("Enter second number: "));

// TODO: Compare the numbers and display the result
// Use if, else if, and else statements with comparison operators (>, <, ===)

if (firstNumber > secondNumber) {
    // TODO: Print that first number is greater than second number
    console.log("The first number is greater than the second number");
} else if (firstNumber < secondNumber) {
    // TODO: Print that first number is less than second number
    console.log("The first number is less than the second number");
} else {
    // TODO: Print that the numbers are equal
    console.log("The numbers are equal");
}