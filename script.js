
console.log("ASSIGNMENT 5 - INDIVIDUAL WORK");

// TASK 6: Variables and Data Types

console.log("TASK 6:");

const fullName = "Anel Akhmetbekova";
const age = 18;
const isStudent = true;
let favouriteColour = "pink";

console.log("Full name:", fullName);
console.log("Type:", typeof fullName);

console.log("Age:", age);
console.log("Type:", typeof age);

console.log("Student:", isStudent);
console.log("Type:", typeof isStudent);

console.log("Favourite colour:", favouriteColour);
console.log("Type:", typeof favouriteColour);

favouriteColour = "red";
console.log("Updated favourite colour:", favouriteColour);

// TASK 7: Input and a Greeting

console.log("TASK 7:");

const userName = prompt("What is your name?");

if (userName !== null && userName.trim() !== "") {
    alert(`Hello, ${userName}! Welcome to JavaScript.`);
} else {
    alert("Hello! Welcome to JavaScript.");
}

const group = "MT-2505";
const secondGreeting =
    `My name is ${fullName} and my group is ${group}.`;

console.log(secondGreeting);

// TASK 8: Sum and Arithmetic
console.log("TASK 8:");

const firstInput = prompt("Enter the first number:");
const secondInput = prompt("Enter the second number:");

if (
    firstInput === null ||
    secondInput === null
) {
    alert("Error! Input was cancelled. Please try again.");

} else if (
    firstInput.trim() === "" ||
    secondInput.trim() === ""
) {
    alert("Error! Please enter both numbers.");

} else if (
    !Number.isFinite(Number(firstInput)) ||
    !Number.isFinite(Number(secondInput))
) {
    alert("Error! Invalid input. Please enter numbers only, not letters.");

} else {
    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);

    console.log("First number:", firstNumber);
    console.log("Second number:", secondNumber);

    console.log("Sum:", firstNumber + secondNumber);
    console.log("Difference:", firstNumber - secondNumber);
    console.log("Product:", firstNumber * secondNumber);

    if (secondNumber !== 0) {
        console.log("Quotient:", firstNumber / secondNumber);
        console.log("Remainder:", firstNumber % secondNumber);
    } else {
        alert("Warning! The second number is zero. Division and remainder by zero are not allowed.");
    }

    console.log("String concatenation:", firstInput + secondInput);
    console.log("Number addition:", firstNumber + secondNumber);
}

// TASK 9: Strings

console.log("TASK 9:");

const nameForStrings = fullName;

console.log("Full name:", nameForStrings);
console.log("Length:", nameForStrings.length);
console.log("Uppercase:", nameForStrings.toUpperCase());
console.log("Lowercase:", nameForStrings.toLowerCase());
console.log("First three characters:", nameForStrings.slice(0, 3));

const sentencePart1 = "I enjoy watching";
const sentencePart2 = "movies in my free time";

const combinedSentence = sentencePart1 + " " + sentencePart2;

console.log("Combined sentence:", combinedSentence);

// TASK 10: Increment and Assignment Operators

console.log("TASK 10:");

let counter = 10;

console.log("Starting value:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);

// TASK 11: Dog Age Calculation

console.log("TASK 11:");

let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;

console.log(`Dog age: ${dogAge}, calculated human age: ${humanAge}`);

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;

console.log(`Dog age: ${dogAge}, calculated human age: ${humanAge}`);

// TASK 12: Functions

console.log("TASK 12:");

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

greetUser(fullName);
greetUser("Lili");

console.log("Sum 1 (9 + 4):", calculateSum(9, 4));
console.log("Sum 2 (16 + 5):", calculateSum(16, 5));

console.log("Rectangle 1 (5 x 3):", calculateRectangleArea(5, 3));
console.log("Rectangle 2 (8 x 4):", calculateRectangleArea(8, 4));

console.log("\nAll tasks are completed.");
