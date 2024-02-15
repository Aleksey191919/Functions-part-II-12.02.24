/** @format */
function getNumberFromUser(message) {
  let userNum;
  do {
    userNum = parseInt(prompt(message));
  } while (isNaN(userNum));
  return userNum;
}

function getMathOperator(message) {
  let userOperator;
  do {
    userOperator = prompt(message);
  } while (!validOperators.includes(userOperator));
  return userOperator;
}

function getSumNumbers(a, b) {
  return a + b;
}

function getMultNumbers(a, b) {
  return a * b;
}

function getSubNumbers(a, b) {
  return a - b;
}

function getdDivNumbers(a, b) {
  if (b === 0) {
    return 'На ноль делить нельзя';
  } else {
    return a / b;
  }
}

function getDegNumbers(a, b) {
  return a ** b;
}

function getRemDivNumbers(a, b) {
  return a % b;
}

function doMath(x, znak, y) {
  switch (znak) {
    case '-':
      return getSubNumbers(x, y);
    case '+':
      return getSumNumbers(x, y);
    case '*':
      return getMultNumbers(x, y);
    case '/':
      return getdDivNumbers(x, y);
    case '**':
      return getDegNumbers(x, y);
    case '%':
      return getRemDivNumbers(x, y);
  }
}
