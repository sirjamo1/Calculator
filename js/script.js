function add(tempValue) {
  let total = 0;
  for (let i = 0; i < tempValue.length; i++) {
    total += tempValue[i];
  }
  return tempValue = total;
}

function subtract(tempValue) {
  let total = tempValue[0];
  for (let i = 1; i < tempValue.length; i++) {
    total -= tempValue[i];
  }
  return tempValue = total;
}

function multiply(tempValue) {
  let total = tempValue[0];
  for (let i = 1; i < tempValue.length; i++) {
    total *= tempValue[i];
  }
  return tempValue = total;
}

function divide(tempValue) {
  let total = tempValue[0];
  for (let i = 1; i < tempValue.length; i++) {
    total /= tempValue[i];
  }
  return tempValue = total;
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
function storeInput(e) {
  let buttonInput = e.getAttribute("value");
  if (
    buttonInput === "+" ||
    buttonInput === "-" ||
    buttonInput === "*" ||
    buttonInput === "/"
  ) {
    tempValue.push(displayValue);
    displayValue = ""
    operator += buttonInput;
    document.getElementById("screenInput").innerHTML += `${buttonInput}`;
  } else if (/^\d*\.?\d+$/.test(buttonInput)) {
    displayValue += buttonInput;
    document.getElementById("screenInput").innerHTML += `${buttonInput}`;
  } else if (buttonInput === "clear") {
    displayValue = "";
    operator = "";
    tempValue = "";
    document.getElementById("screenInput").innerHTML = "";
  } else if (buttonInput === "=") {
   tempValue.push(displayValue);
   tempValue = tempValue.map(Number);
    document.getElementById("screenInput").innerHTML = maths(
      operator,
      tempValue
    );
      operator = ""
  }
 ////////CAN ONLY DO ONE OPERATION AT A TIME//////////////

  console.log({buttonInput});
  console.log({operator});
  console.log({displayValue});
  console.log({tempValue});
}
