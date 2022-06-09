function add(tempValue) {
  let total = 0;
  for (let i = 0; i < tempValue.length; i++) {
    total += tempValue[i];
  }
  return total;
} //total.toFixed(4);   <<<-- return to 3 decimal places (BUT! always does it)

function subtract(tempValue) {
  let total = tempValue[0];
  for (let i = 1; i < tempValue.length; i++) {
    total -= tempValue[i];
  }
  return total;
}

function multiply(tempValue) {
  let total = tempValue[0];
  for (let i = 1; i < tempValue.length; i++) {
    total *= tempValue[i];
  }
  return total;
}

function divide(tempValue) {
  let total = tempValue[0];
  for (let i = 1; i < tempValue.length; i++) {
    total /= tempValue[i];
  }
  return total;
}

function maths(operator, tempValue) {
  switch (operator) {
    case "+":
      return add(tempValue);
      break;
    case "-":
      return subtract(tempValue);
      break;
    case "*":
      return multiply(tempValue);
      break;
    case "/":
      return divide(tempValue);
  }
}

let displayValue = [];
let operator = [];
let tempValue = [];
let answer = [];
document.getElementById("screenInput").innerHTML = "0";
function storeInput(e) {
  let buttonInput = e.getAttribute("value");
  if (
    buttonInput === "+" ||
    buttonInput === "-" ||
    buttonInput === "*" ||
    buttonInput === "/"
  ) {
    tempValue.push(displayValue);
    displayValue = [];
    operator += buttonInput;
    document.getElementById("screenInput").innerHTML += `${buttonInput}`;
  } else if (/^\d*\.?\d+$/.test(buttonInput)) {
    document.getElementById("screenInput").innerHTML = "";
    displayValue += buttonInput;
    document.getElementById("screenInput").innerHTML += `${displayValue}`;
  } else if (buttonInput === "clear") {
    displayValue = [];
    operator = [];
    tempValue = [];
    document.getElementById("screenInput").innerHTML = "0";
  } else if (buttonInput === "=") {
    tempValue.push(displayValue);
    tempValue = tempValue.map(Number);
    answer = maths(operator, tempValue);
    document.getElementById("screenInput").innerHTML = `${answer}`;
    displayValue = maths(operator, tempValue);
    displayValue.toString();
    operator = [];
    tempValue = [];
  }
  ////////CAN ONLY DO ONE OPERATION AT A TIME//////////////

  console.log({ buttonInput });
  console.log({ operator });
  console.log({ displayValue });
  console.log({ tempValue });
}
