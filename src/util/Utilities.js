export const generateNumber = (currentNum, newNum, onNumber, onResult) => {
  const oldNumber = currentNum ? currentNum : 0;
  const number = parseFloat(oldNumber + newNum);
  onNumber(number);
  onResult(number);
};

export const performCalulation = (
  num1,
  num2,
  operation,
  newOperation,
  onNumber1,
  onNumber2,
  onResult,
  onTextInfo = null
) => {
  let total = 0;
  console.log(
    123,
    num1,
    num2,
    operation,
    newOperation,
    parseFloat(num1) / parseFloat(num2)
  );
  switch (operation) {
    case "+":
      total = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      total = parseFloat(num1) - parseFloat(num2);
      break;
    case "x":
      total = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      total = parseFloat(num1) / parseFloat(num2);
      break;

    default:
      break;
  }

  onNumber1(total);
  onNumber2(null);
  onResult(total);
  if (onTextInfo) {
    onTextInfo(`${total} ${newOperation}`);
  }
};

export const deleteNumber = (number, onNumber, onResult) => {
  let total = number.toString().slice(0, -1);
  if (!total) {
    total = 0;
  }
  onNumber(total);
  onResult(total);
};
