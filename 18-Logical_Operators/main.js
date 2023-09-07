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
