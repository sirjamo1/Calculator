function add(tempValue) {
  let total = 0;
  for (let i = 0; i < tempValue.length; i++) {
    total += tempValue[i];
  }
  return total;
}

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
  //IF BUTTON IS NUMBER ADD / IF BUTTON IS "." ONLY 0NE "." CAN BE ADDED
  if (
    (/^\d*\.?\d+$/.test(buttonInput) || /^\.?$/.test(buttonInput)) &&
    displayValue.length < 12
  ) {
    document.getElementById("screenInput").innerHTML = "";
    if (displayValue.indexOf(".") >= 1 && /^\.?$/.test(buttonInput)) {
      document.getElementById("screenInput").innerHTML = `${displayValue}`;
    } else {
      document.getElementById("screenInput").innerHTML = `${(displayValue +=
        buttonInput)}`;
    }
  } else if (
    //OPERATOR INPUT
    buttonInput === "+" ||
    buttonInput === "-" ||
    buttonInput === "*" ||
    buttonInput === "/"
  ) {
    if (operator.length !== 1) {
      tempValue.push(displayValue);
      operator += buttonInput;
      document.getElementById("screenInput").innerHTML += ` ${buttonInput}`;
      displayValue = [];
    }
  } else if (buttonInput === "clear") {
    //CLEAR CONDITION
    displayValue = [];
    operator = [];
    tempValue = [];
    document.getElementById("screenInput").innerHTML = "0";
  } else if (buttonInput === "=") {
    //EQUAL CONDITION
    if (operator.toString().length > 0) {
      tempValue.push(displayValue);
      tempValue = tempValue.map(Number);
      answer = maths(operator, tempValue);
      answer = Math.round(answer * 100) / 100; //<<decimal place condition
      operator = [];
      tempValue = [];
      if (answer.toString().length > 12) {
        displayValue = [];
        document.getElementById("screenInput").innerHTML = `Too Long!`;
      } else {
        displayValue = answer;
        document.getElementById("screenInput").innerHTML = `${answer}`;
      }
    } else {
      if ((displayValue = [])) {
        document.getElementById("screenInput").innerHTML = `0`;
      } else {
        document.getElementById("screenInput").innerHTML = `${displayValue}`;
      }
    }
  }
  console.log({ buttonInput });
  console.log({ operator });
  console.log({ displayValue });
  console.log({ tempValue });
  console.log({ answer });
}
