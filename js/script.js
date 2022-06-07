function add(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

function subtract(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total -= args[i];
  }
  return total;
}

function multiply(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total *= args[i];
  }
  return total;
}

function divide(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total /= args[i];
  }
  return total;
}

function maths(operator, ...args) {
  switch (operator) {
    case "+":
      return add(...args);
      break;
    case "-":
     return subtract(...args);
      break;
    case "*":
     return multiply(...args);
      break;
    case "/":
      return divide(...args);
  } 
}
console.log(maths('*', 1, 2, 6))