export const generateNumber = (currentNum, newNum, onNumber, onResult) => {
  const oldNumber = currentNum ? currentNum : 0;
  const number = parseFloat(oldNumber + newNum);
  onNumber(number);
  onResult(number);
};

export const performCalulation = (
  num1,
  num2,
  process,
  onProcess,
  onNumber1,
  onNumber2,
  onResult,
  onTextInfo,
  onStep
) => {
  let total = 0;
  console.log(
    123,
    num1,
    num2,
    parseFloat(num1),
    parseFloat(num2),
    parseFloat(num1) / parseFloat(num2)
  );
  switch (process) {
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
  //onProcess(null);
  onNumber2(null);
  onResult(total);
  onTextInfo(`${total} ${process}`);
};

export const deleteNumber = (number, onNumber, onResult) => {
  let total = number.toString().slice(0, -1);
  if (!total) {
    total = 0;
  }
  onNumber(total);
  onResult(total);
};
