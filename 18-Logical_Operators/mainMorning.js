console.log("MORNING SESSION");

//  Logical Operators ( AND - &&, or - ||)

// And allows you to chain two expressions together so they can individually result to true.
// - expression1 && expression2 && expression3 - you can chain many expressions together - if one is true then all is true even is the other expression if false

// Or, same with and, allows you to chain two expressions together. Sa or, if naay one true, true na tanan.
// - expression1 || expression2 || expression3

let age = 5;

if (age > 5 && age < 10) {
  // did not become an error because we used &&
  console.log("Kids");
} else {
  console.log("Teenage");
}

let edad = 5;

if (edad || (5 && edad) || 10) {
  // you can also chain a lot of expression but if there is one that is true, it will become true
  console.log("Kids");
} else {
  console.log("Teenage");
}

// REAL-WORLD APPLICATION EXAMPLE

// && example
const isAdult = true;
const hasLicence = true;

if (isAdult && hasLicence) {
  console.log("You can drive a car");
} else {
  console.log("You can't drive a car");
}

// || example
const isRaining = true;
const haveUmbrella = false;

if (isRaining || haveUmbrella) {
  console.log("You won't get wet");
} else {
  console.log("You might get wet");
}

const yearsOfExperience = 5;
const hasDegree = true;
const knowsProgramming = true;
const hasCertification = false;

if (
  (yearsOfExperience > 3 && hasDegree && knowsProgramming) ||
  (hasCertification && knowsProgramming)
) {
  console.log("You are qualified");
} else {
  console.log(
    "Sorry, you do not meet the eligibility criteteria for a job interview"
  );
}

// ! not operator is ginagawang false ang result/scenario - the not operator is not usually being used
const isSingle = true;

if (!isSingle) {
  console.log("I am single");
} else {
  console.log("I am not single");
}

const iceCreamVanOutside = true;
const houseStatusOnFire = true;

if (!iceCreamVanOutside && houseStatusOnFire) {
  console.log("You should leave the house quickly");
} else {
  console.log("You should stay inside");
}

/* SWITCH CASE */
// this is being used if there is a large number of choices or a large number of data that is being used at hand
// if else only for 1-2 expressions and switch case if more than that
// this is the expression
/*switch (true) {
  case choice1:
  console.log('true');
  break;
  case choice2:
  console.log('false');
  break;
  default:
  console.log('default');
} */

let weather = "thunderstorm";

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day");
    break;
  case "rainy":
    console.log("Grab your umbrella");
    break;
  case "snowing":
    console.log("Wear a coat and take a shovel.");
    break;
  default:
    console.log("Let's stay inside");
}

let grade = 95;

switch (true) {
  case grade > 90:
    console.log("A");
    break;
  case grade > 80:
    console.log("B");
    break;
  case grade > 70:
    console.log("C");
    break;
  case grade > 60:
    console.log("D");
    break;
  default:
    console.log("F");
}

const day = "Friyay";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  default:
    console.log("Invalid Day");
}

// TERNARY OPERATOR - shorter version of IF ELSE statement
// EXPRESSION IS = condition ? run this code ; else run this code instead
/* THIS ONE IS VIA THE IF ELSE STATEMENT
let whatAge = 18;
let isEligibleToVote;

if (age > 18) {
  isEligibleToVote = true;
} else {
  isEligibleToVote = false;
}

console.log(isEligibleToVote);*/

// SHORTER VERSION FOR IF ELSE USING TERNARY OPERATOR
let whatAge = 20;
let isEligibleToVote =
  whatAge > 18 ? `You're age is more than ${whatAge}` : "You can't vote"; // YOU CAN USE A STRING, A NUMBER, OR TRUE AND FALSE IF YOU LIKE - ALWAYS USE BACK TICK IF YOU WANT TO USE THE TEMPLATE LITERAL

console.log(isEligibleToVote);
