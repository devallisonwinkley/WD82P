const display = document.querySelector("input");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const numBtns = document.querySelectorAll(".num"); // select all items with num class
const operatorBtns = document.querySelectorAll(".operator");

let currentNum = "";
let prevNum = "";
let operation = "";

function compute(prevNum, currentNum, operation) {
  let total;
  const prev = parseInt(prevNum);
  const curr = parseInt(currentNum);

  switch (operation) {
    case "+":
      total = prev + curr;
      break;

    case "-":
      total = prev - curr;
      break;

    case "*":
      total = prev * curr;
      break;

    case "/":
      total = prev / curr;
      break;

    default:
      return "";
  }

  return total;
}

function clear() {
  currentNum = "";
  prevNum = "";
  operation = "";
  display.value = currentNum;
}

// Evet Listener
clearBtn.addEventListener("click", clear);

equalsBtn.addEventListener("click", function (e) {
  currentNum = compute(prevNum, currentNum, operation);
  display.value = currentNum;
});

// Loop for all the items with num class
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    currentNum += e.target.textContent;
    display.value = currentNum;
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", function (e) {
    operation = e.target.textContent;
    prevNum = currentNum;
    currentNum = "";
    display.value = currentNum;
  });
});
