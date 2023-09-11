/* Problem 3: Reverse a String

Write a JavaScript function called reverseString that takes a string as input and returns the reversed string. */

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("allison"));
console.log(reverseString("miah"));
console.log(reverseString("anning"));
console.log(reverseString("bugoy"));
console.log(reverseString("boki"));
