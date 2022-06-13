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
const keySound = new Audio("sounds/ueffects__a-key.wav");
let displayValue = [];
let operator = [];
let tempValue = [];
let answer = [];
document.getElementById("screenInput").innerHTML = "0";

function storeInput(e) {
  let buttonInput = [];
  keySound.play();
  buttonInput = e.getAttribute("value");
  //IF BUTTON IS NUMBER ADD / IF BUTTON IS "." ONLY 0NE "." CAN BE ADDED
  if (
    (/^\d*\.?\d+$/.test(buttonInput) || /^\.?$/.test(buttonInput)) &&
    displayValue.length < 12
  ) {
    if (answer.length > 0) {
      displayValue = [];
    }
    if (displayValue.indexOf(".") > -1 && /^\.?$/.test(buttonInput)) {
      document.getElementById("screenInput").innerHTML = `${displayValue}`;
    } else {
      document.getElementById("screenInput").innerHTML = `${(displayValue +=
        buttonInput)}`;
      answer = [];
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
    answer = [];
    document.getElementById("screenInput").innerHTML = "0";
  } else if (buttonInput === "=") {
    //EQUAL CONDITION
    if (operator.toString().length > 0) {
      tempValue.push(displayValue);
      tempValue = tempValue.map(Number);
      answer = maths(operator, tempValue);
      answer = Math.round(answer * 10000) / 10000; //<<decimal place condition (4)
      answer = answer.toString();
      operator = [];
      tempValue = [];
      if (answer.toString().length > 12 || answer == "Infinity") {
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
}

//LISTENS FOR KEYBOARD GRABS THE ID THEN RUNS ONCLICK TO RUN STOREINPUT FUNCTION
window.addEventListener("keydown", keyboard);
function keyboard(e) {
  let x = e.key;
  let selection = [];
  switch (x) {
    case "0":
      selection = document.querySelector("#zero");
      selection.click();
      break;
    case "1":
      selection = document.querySelector("#one");
      selection.click();
      break;
    case "2":
      selection = document.querySelector("#two");
      selection.click();
      break;
    case "3":
      selection = document.querySelector("#three");
      selection.click();
      break;
    case "4":
      selection = document.querySelector("#four");
      selection.click();
      break;
    case "5":
      selection = document.querySelector("#five");
      selection.click();
      break;
    case "6":
      selection = document.querySelector("#six");
      selection.click();
      break;
    case "7":
      selection = document.querySelector("#seven");
      selection.click();
      break;
    case "8":
      selection = document.querySelector("#eight");
      selection.click();
      break;
    case "9":
      selection = document.querySelector("#nine");
      selection.click();
      break;
    case "Escape":
      selection = document.querySelector("#clear");
      selection.click();
      break;
    case "/":
      selection = document.querySelector("#divide");
      selection.click();
      break;
    case "*":
      selection = document.querySelector("#multiply");
      selection.click();
      break;
    case "-":
      selection = document.querySelector("#minus");
      selection.click();
      break;
    case "+":
      selection = document.querySelector("#plus");
      selection.click();
      break;
    case "Enter":
      selection = document.querySelector("#equal");
      selection.click();
      break;
    case ".":
      selection = document.querySelector("#decimal");
      selection.click();
      
  }
}
