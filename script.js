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
  console.log(a / b);
  return a / b;
};

let operate = (num1, num2, operator) => {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "X") {
    return multiply(num1, num2);
  } else if (operator == "÷") {
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

let num1 = "";
let num2 = "";
let operator = "";
let operationCount = 0;
let result = 0;

let numbers = document.querySelectorAll(".btn-number");
let decimal = document.querySelector("#op-decimal");
let display = document.querySelector(".display");
let ac = document.querySelector("#op-ac");
let backspace = document.querySelector("#op-backspace");
let operations = document.querySelectorAll(".operators .btn-operator");
let equals = document.querySelector("#op-equals");

ac.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  display.innerText = ``;
  operationCount = 0;
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (operationCount != 1) {
      num1 += number.id;
      display.innerText = `${num1}`;
    } else if (operationCount == 1) {
      num2 += number.id;
      display.innerText = `${num1} ${operator} ${num2}`;
    }
  });
});

operations.forEach((op) => {
  op.addEventListener("click", () => {
    if (operationCount === 0 && op.id != "op-ac") {
      operator = op.innerText;
      display.innerText = `${num1} ${operator}`;
      operationCount++;
    }
  });
});

equals.addEventListener("click", () => {
  result = operate(parseInt(num1), parseInt(num2), operator);
  if (num1 != "" && num2 != "" && operator != "") {
    console.log(num1, num2);
    display.innerText = `${result}`;
    num1 = result.toString();
    num2 = "";
    operationCount = 0;
  }
});
