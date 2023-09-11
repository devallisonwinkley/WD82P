/* Problem 5: Palindrome Checker

Write a JavaScript function called isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization. */

function isPalindrome(string) {
  const reverseString = string.split("").reverse().join("");

  if (string == reverseString) {
    console.log("Palindrome!");
  } else {
    console.log("Not a Palindrome!");
  }
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("great"));
console.log(isPalindrome("wow"));
