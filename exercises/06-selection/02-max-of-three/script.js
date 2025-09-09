// Maximum of Three Exercise
// Goal: Ask for three numbers and find the largest one

const prompt = require('prompt-sync')();

// TODO: Ask the user for three numbers
// TODO: Convert each input to a number using Number()
// TODO: Use selection statements to determine which number is largest
// TODO: Display the maximum number

console.log("Eneter numbers to find the maximum of the three.");
const firstNumber = Number(prompt("Enter first number: "));
const secondNumber = Number(prompt("Enter second number: "));
const thirdNumber = Number(prompt("Enter third number: "));

if (firstNumber >= secondNumber && thirdNumber){
    console.log("The maximum number is: " + firstNumber);}
else if (secondNumber >= firstNumber && secondNumber >= thirdNumber){
    console.log("The maximum number is: " + secondNumber);}
else{
    console.log("The maximum number is: " + thirdNumber);}