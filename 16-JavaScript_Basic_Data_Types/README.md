# JavaScript Basic Data Types

No need to specify the dataset manually. Just use the appropriate variable and identifier.

1. Numbers
   // Integers (ex: 10, 400, -5)
   // Floating point numbers (ex: 12.5, 56.7786543)
   // Doubles - same with floating point numbers but has a higher precison

- To check what variable you used:
  // console.log(typeof age);
  // console.log(typeof tempInCelsius);

2. Strings
   // Enclosed in quotation marks
   let string = "Thee revolution will not be televised";
   let single = 'Single Quotes';
   let double = "Double Quotes";
   let backtick = `Backtick`;

- String to a number:
  let myAge = Number ("28");
  let myAge = parseInt("28");
  let tempInFahrenheit = parseFloat("89.7");
  // basically says "convert my string to a number" ; once it shows up in the console, it displays as a number
  // parseInt if it is a number/integer ; parseFloat if it is a floating point/has decimal place
  // better to use parseInt/parseFloat rather than Number

3. Boolean
   // values are true and false only
   - 0 is false
   - 1 above is true
   - string (hello) - truthy value
   - empty string ("") - falsy value

# Adding two numbers:

let firstNumber = 10;
let secondNumber = 5;

console.log(firstNumber + secondNumber);

let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = "5";

console.log(firstNumber + secondNumber);
console.log(secondNumber + thirdNumber);

> It will concatenate and not add up, since let thirdNumber has quotation marks.

// let thirdNumber should be:
let thirdNumber = parseInt("5");

# Arithmetic Operators (add, subtract, multiply, divide, exponent, modulo/remainder)

Add (+)
Subtract (-)
Multiply (asterisk)
Divide (/)
Exponent (double asterisk)
Modulo (%)

# Increment/Decrement

var++; - increment
var--; - decrement

# Assignment operators

let x = 3;
let y = 4;
// x = x _ y; do not have to use let since you just have to call the data you need/want
x _= y; // shortcut
console.log(x);

# Value/Comparison Operators (these are boolean variable types)

= assigning values
== checking for equality
!= checking for inequality
">"greater than
"<" lesser than
">=" greather than or equal to
"<=" lesser than or equal to

let a = 5;
let b = 2;
console.log(a == b);
