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
  if (/^\d*\.?\d+$/.test(buttonInput) || /^\.?$/.test(buttonInput)) {
    document.getElementById("screenInput").innerHTML = "";
    if (/^\d*\.?\d+$/.test(buttonInput)) {
      document.getElementById("screenInput").innerHTML = `${(displayValue +=
        buttonInput)}`;
    } else if (displayValue.indexOf(".") >= 1) {
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
    tempValue.push(displayValue);
    displayValue = [];
    operator += buttonInput;
    document.getElementById("screenInput").innerHTML += ` ${buttonInput}`;
  } else if (buttonInput === "clear") {
    //CLEAR CONDITION
    displayValue = [];
    operator = [];
    tempValue = [];
    document.getElementById("screenInput").innerHTML = "0";
  } else if (buttonInput === "=") {
    //EQUAL CONDITION
    tempValue.push(displayValue);
    tempValue = tempValue.map(Number);
    answer = maths(operator, tempValue);
    if (answer % 1 != 0) {
      //DECIMAL PLACE CONDITION (ANSWER)
      document.getElementById("screenInput").innerHTML = `${answer.toFixed(3)}`;
    } else if (answer == "Infinity") {
      //DIVIDE BY 0 CONDITION (ANSWER)
      document.getElementById("screenInput").innerHTML = "STOP THAT!";
      operator = [];
      tempValue = [];
      displayValue = [];
    } else {
      //ANSWER
      document.getElementById("screenInput").innerHTML = `${answer}`;
      displayValue = maths(operator, tempValue);
      displayValue.toString();
      operator = [];
      tempValue = [];
    }
  }
  console.log({ buttonInput });
  console.log({ operator });
  console.log({ displayValue });
  console.log({ tempValue });
}
