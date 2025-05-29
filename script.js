let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

let operate = (num1, num2, operator) => {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else {
    return 0;
  }
};

let clear = () => {
  num1 = 0;
  num2 = 0;
  operator = "";
};

let num1 = 0;
let num2 = 0;
let operator = "";

let 