// Age Category Exercise
// Goal: Ask for user's age and categorize them appropriately

const prompt = require('prompt-sync')();

// TODO: Ask the user for their age
// TODO: Convert the input to a number
// TODO: Use if/else if statements to categorize the age:
//       - 0-12: "You are a child."
//       - 13-19: "You are a teenager."
//       - 20-64: "You are an adult."
//       - 65+: "You are a senior."
// TODO: Display the appropriate message

const age = Number(prompt("How old are you? "));

if (age <= 12){
    console.log("You are a child.")}    
else if (age <= 19){
    consol.log("You are a teenager.")}
else if (age <= 20){
    console.log("You are an adult.")}
else if (age >= 65){
    console.log("You are a senior.")}

