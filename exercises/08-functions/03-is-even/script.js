// Is Even Exercise
// Goal: Create a function that determines if a number is even or odd

// TODO: Define a function called 'isEven' that:
// - Takes one parameter: number
// - Returns true if the number is even, false if it's odd
// - Use the modulo operator (%) to check if number % 2 === 0

// TODO: Test your function by calling it with different numbers
// Example: console.log(isEven(4));  // Should output: true
// Example: console.log(isEven(7));  // Should output: false

function IsEven(number){
    return number % 2 === 0;
}

console.log(IsEven(4));
console.log(IsEven(7));
console.log(IsEven(0));
console.log(IsEven(-2));
console.log(IsEven(-3));