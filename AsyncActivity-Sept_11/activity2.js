/* Problem 2: Factorial of a Number

Write a JavaScript function called factorial that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers from 1 to n. */

let numberFactorial = 4;

function factorial(numberFactorial) {
  if (numberFactorial === 0) {
    return 1;
  } else {
    return numberFactorial * factorial(numberFactorial - 1);
  }
}

console.log(factorial(numberFactorial));
