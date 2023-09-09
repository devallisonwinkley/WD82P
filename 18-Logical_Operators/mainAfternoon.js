console.log("AFTERNOON SESSION");

// ALL ABOUT FUNCTIONS - they are reserved keywords in programming (built-in method)
/* prompt ; log ; Math.round ; etc - you can also use the "function" word
Functions are built-in methods that are not made by us but it is readily available for use when needed
A function is a piece of code that does something
You can feed your function a dynamic data*/

const myText = "I am a string";
const newString = myText.replace("string", "sausage"); // USE THIS TO REPLACE ONE VALUE WITH SOMETHING ELSE - it accepts two things: which string you want to replace and what you want to replace it with

console.log(newString);

/* THIS IS A REDUNDANT WAY
let name = "Allison";
let newName = "Winkley";


console.log(name);
console.log(newName); */

// VARIABLES ONLY USES NOUNS | WHILE FUNCTIONS USES VERBS
// this is a faster way by using functions and you do not have to do console.log every single time
function printName(str) {
  console.log(str);
}

printName("Allison" + " " + "Winkley");

//FUNCTIONS ALLOW YOU TO USE REUSABLE CODES WITHOUT HAVING TO KEEP TYPING/USING CONSOLE.LOG METHOD
function printName(name) {
  console.log(name);
}

printName("Allison");
printName("Nogalo");
printName("Winkley");
printName(25);

// PARAMETER IS A DYNAMIC VARIABLE INSIDE THE FUNCTION AND HAS IT'S OWN WORLD - MAKE THE PARAMETER AS DESCRIPTIVE AS POSSIBLE AND MAKE IT CLEAR (EX: printName(name))
// ARGUMENT IS THE VALUE THAT WE PASS INTO A SPECIFIC PARAMETER (EX: printName("Allison"))
// VARIABLE = PARAMETER ; RESULT = ARGUMENT

// CREATING A FUNCTION
function myFunction(firstName, lastName) {
  console.log(firstName + " " + lastName); // plain concatenation
  console.log(`${firstName} ${lastName} is a programmer`); // with template relative
}

// INVOKING A FUNCTION
myFunction("Allison", "Winkley");
myFunction("Zack", "Anderson");

// YOUR BOSS ASKED YOU TO CREATE A PROGRAM WHEREIN YOU HAVE TO GET THE AVERAGE PRICE OF 5 ORDERS
function averagePrices(order1, order2, order3, order4, order5) {
  let sum = order1 + order2 + order3 + order4 + order5;
  let average = sum / 5;

  console.log(average);
}

averagePrices(10, 20, 30, 40, 50);
averagePrices(100, 200, 300, 400, 500);

// DEFAULT PARAMETERS
function hello(name = "Hooman") {
  console.log(`Hello, ${name}!`);
}

hello("Allison");
hello(); // this comes out as undefined since there is no declared value - if there is a default parameter, the set value there is the data that will be displayed (default parameter here is name = "Allison")

/* Old way of adding numbers using a function */
function add(a, b) {
  console.log(a + b);
}

add(1, 2);
add(2, 3);

/* New way of adding numbers using a function using ARROW FUNCTIONS */
// const sub = (4, 2) => 4 - 2;

/* EXERCISE */
// Create a function ; two parameters which are two numbers ; subtract those two numbers ; log the output to the screen

/* MY CODE */
const subtraction = (a, b) => a - b;

let a = 7;
let b = 2;
let result = subtraction(a, b);
console.log(`The result is: ${result}`);

/* COACH'S CODES */
// old version
function subtract(x, y) {
  console.log(x - y);
}

subtract(2, 3);
subtract(5, 2);

// arrow function version
const sub = (x, y) => x - y;

console.log(sub(2, 1));

/* RETURN VALUES
function subtract(x, y) {
  console.log(x - y); // this is a side effect
}
// as much as possible, we only want our function to do one thing ; the example above does not just subtract, but it subtracts and prints (this is considered a side effect) */

// SCOPE - means in the same place sila ; same name and same space
/* Scope example
-let age = 18;
-let age = 20;
NOT ALLOWED > BUT

let age = 18;

function printAge() {
  let age = 19;
  console.log(AGE);
}

printAge();

This will print the 19 and not 18. That is because a function has it's own scope (called a function/local scope). Also, there should only be one declaration per variable in one scope. You can only print insde the function scope and/or inside the global scope. 

Always remember that a function has it's own scope that it not going to be considered within the global scope. 

Lessen your global scope and don't make too much variables inside it, because it is prone to bugs (it is accessible anywhere, unlike the function scope) 

Use a main variable and call then within the function scope*/

// PURE FUNCTION - as much as possible, it only does the thing that you need it to do (EX: only adding one number)

function addition(x, y) {
  return x + y; // this means you are returning the output from the set variable ; you are not creating a side effect, you are only returning the value you want/need ; this is a better approach
}

console.log(addition(1, 2));
console.log(addition(5, 5));

// using it in via an arrow syntax approach ; this has no side effects and it is a pure function
const addAndPrint = (f, g) => f + g;
const subAndPrint = (f, g) => f - g;
const multiplyAndPrint = (f, g) => f * g;
const divideAndPrint = (f, g) => f / g;

console.log(addAndPrint(5, 5));
console.log(subAndPrint(5, 5));
console.log(multiplyAndPrint(5, 5));
console.log(divideAndPrint(5, 5));

function favouriteAnimal(animal) {
  return animal + " is my favourite animal!";
}

console.log(favouriteAnimal("dog"));

// const favouriteAnimal2 = (animal2) => animal2 + " is my favourite animal!";
// let animal2 = horse;

// ACTIVITy 1
function combinedName(firstNeme, lastNeme) {
  return firstNeme + " " + lastNeme;
}

console.log(combinedName("Allison", "Winkley"));
console.log(combinedName("Jose", "Rizal"));
console.log(combinedName("Pedro", "Laura"));

function add7(num) {
  return num + 7;
}

console.log(add7(2));

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(2, 3));

// ACTIVITY 2

function capitalize(string) {
  const lowerString = string.toLowerCase(); // TO LOWER CASE ALL LETTERS
  const firstLetter = lowerString.charAt(0); // TO GET THE FIRST CHARACTER
  const capitalisedFirstLetter = firstLetter.toUpperCase(); // TO CAPITALISE ALL LETTERS

  return capitalisedFirstLetter + lowerString.substring(1, 7);
}

console.log(capitalize("allison"));

// another way to solve the activity - in an optimised way
function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
// you can also use string.substring instead of string.slice

console.log(capitalise("winkley"));
