let age = 28;
let tempInCelsius = 38.5;
console.log(typeof age);
console.log(typeof tempInCelsius);

// let myAge = Number ("28");
let myAge = parseInt("28");
let tempInFahrenheit = parseFloat("89.7");
console.log(myAge);
console.log(tempInFahrenheit);

let firstNumber = 10;
let secondNumber = 5;
// let thirdNumber = "5";
let thirdNumber = parseInt("5");
console.log(firstNumber + secondNumber);
console.log(secondNumber + thirdNumber);

console.log(6 + 9);
console.log(20 - 15);
console.log(3 * 7);
console.log(10 / 5);
console.log(5 ** 2);
console.log(8 % 3);

console.log((secondNumber % 9) * firstNumber);

let year = 2023;
// year = year + 1; Use increment example below instead of the one on this line//
year++;
year--; //use this if you want to deduct instead of doing the long way
console.log(year);

//Assignment operators

let x = 3;
let y = 4;
// x = x * y;  do not have to use let since you just have to call the data you need/want
x *= y; // shortcut
console.log(x);

// Comparison Operators
let a = 5;
let b = 2;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// Strings
let string = "Thee revolution will not be televised";
let single = "Single Quotes";
let double = "Double Quotes";
let backtick = `Backtick`;
let exampleStringOne = "I'm Batman";
let exampleStringTwo = `I'm Batman`;

console.log(string);
console.log(single);
console.log(double);
console.log(backtick);

console.log(single + double); // this will be concatenated
console.log("The value of single:" + single); // another way to concatenate

console.log(exampleStringOne);
console.log(exampleStringTwo);

// const name = "Carlo";
// const greeting = "Hello, " + name;
// console.log(greeting);

// Shortcut for strings same as example/s above using template literal
const name = "Carlo";
const greeting = `Hello, ${name}!`; // or `Hello, {1+1}` for numbers
console.log(greeting);

const one = "Hello, Sir! ";
const two = "How are you doing?";
// const joined = one + ", " + two; THE OLD WAY, NOT USING TEMPLATE LITERAL
const joined = `${one}${two}`;
console.log(joined);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  score / highestScore
} * 100}%.`;

const newLine = `One day you finally know what you had to do, and began`; // if you have a multi-line/long content and need to divide it

console.log(output);
// THE EXAMPLE ABOVE WILL ONLY WORK WHEN USING BACKTICKS AND NOT DOUBLE QUOTES
