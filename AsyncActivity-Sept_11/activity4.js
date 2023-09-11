/* Problem 4: Find the Largest Number in an Array

Write a JavaScript function called findLargestNumber that takes an array of numbers as input and returns the largest number in the array. */

function findLargestNumber(arrayOfNumbers) {
  return Math.max.apply(null, arrayOfNumbers);
}

console.log(findLargestNumber([74, 21, 38, 80, 27]));
console.log(findLargestNumber([36, 28, 71, 99, 42]));
