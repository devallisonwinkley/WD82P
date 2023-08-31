console.log("Hello, JS!");

console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

let result = 5 > 4;
console.log(result);

let loggedIn = true; // IF logged in, bring to home page. IF not logged in, bring to registration page.

// JavaScript uses the lexico graphical order whe it comes to string comparison
console.log("Z" > "A");
console.log("Glow" > "Glee");
console.log("Bee" > "Be");

// Comparison of different types
console.log("2" > 1); // When comparing string to int, it will convert the int into string ; It is still known as a number despite it is enclosed with quotations
console.log("01" == 1);

console.log(true == 1); // truthy
console.log(false == 0); // falsy

// Strict equality (different from normal equality)
console.log(0 == 0); // normal equality
console.log("0" == 0); // normal equality
console.log("0" === 0); // strict equality (===)
// Strict equality does not only check the value, but it also checks the data type ; use this type of comparison to ensure accurate information/data

//  START OF CONDITIONALS TOPIC
if (0 > 1) {
  console.log("1 is indeed larger than zero");
} else {
  console.log("0 is not larger than 1");
}

let hour = 15;
if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

let userLoggedIn = false;

if (userLoggedIn) {
  console.log("Redirect to home page");
} else {
  console.log("Redirect to login page");
}

// let grade = 75;
let grade = parseInt(prompt("What is your grade?")); // built-in browser method for data input coming from user ; use parseInt to change data input from string to number

if (grade < 75) {
  console.log("Failed! Try again next quarter.");
} else if (grade <= 80) {
  console.log("Pass! Exert more effort.");
} else if (grade <= 85) {
  console.log("Good! Keep it up.");
} else if (grade <= 90) {
  console.log("Very good. A job well done!");
} else {
  console.log("Excellent!");
}

/* ANOTHER WAY TO HAVE THIS ONE DISPLAYED

let grade = 75;

if (grade < 75) {
  console.log("Failed! Try again next quarter.");
} else if (grade <= 80) {
  console.log("Pass! Exert more effort.");
} else if (grade <= 85) {
  console.log("Good! Keep it up.");
} else if (grade <= 90) {
  console.log("Very good. A job well done!");
} else {
  console.log("Excellent!");
} --! */
