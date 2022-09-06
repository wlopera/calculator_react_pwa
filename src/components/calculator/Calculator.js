import React, { useState } from "react";
import Button from "../layout/Button";

import CardTop from "../layout/CardTop";
import DisplayBox from "../layout/DisplayBox";
import {
  generateNumber,
  performCalulation,
  deleteNumber,
} from "../../util/Utilities";

import { Container, Column, BtnsBox, TextInfo } from "../../util/Styles";

const Calculator = ({ onThemeNum }) => {
  const [num1, setNum1] = useState("0");
  const [operation, setOperation] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState("0");
  const [textInfo, setTextInfo] = useState();

  const [step, setStep] = useState(1);

  const handleClickBotton = (num) => {
    //console.log("valores:", num, num1, num2, operation);
    switch (num) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        if (step === 1) {
          if (operation === "=") {
            generateNumber(null, num, setNum1, setResult);
            setTextInfo();
            setOperation(null);
          } else {
            generateNumber(num1, num, setNum1, setResult);
          }
        } else {
          generateNumber(num2, num, setNum2, setResult);
        }
        break;

      case "+":
      case "-":
      case "x":
      case "/":
        setStep(2);
        if (num2) {
          performCalulation(
            num1,
            num2,
            operation,
            num,
            setNum1,
            setNum2,
            setResult,
            setTextInfo
          );
        } else {
          setOperation(num);
          setTextInfo(`${num1} ${num}`);
        }
        setOperation(num);
        break;
      case "RESET":
        setStep(1);
        setNum1("0");
        setOperation(null);
        setNum2(null);
        setResult("0");
        setTextInfo(null);
        break;
      case "=":
        console.log(123, num1, num2, operation, num);
        if (num2) {
          performCalulation(
            num1,
            num2,
            operation,
            num,
            setNum1,
            setNum2,
            setResult
          );
          setStep(1);
          setOperation(num);
          setTextInfo((currentInfo) => `${currentInfo} ${num2} ${num}`);
        }
        break;
      case "DEL":
        if (step === 1) {
          deleteNumber(num1, setNum1, setResult);
        } else {
          deleteNumber(num2, setNum2, setResult);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Container>
        <Column gap="1.5rem" width="clamp(1, 2, 3)">
          <CardTop onThemeNum={onThemeNum} />
          <TextInfo pb="0rem" fs="1rem" m="0">
            {textInfo}
          </TextInfo>
          <DisplayBox result={result} />
          <BtnsBox>
            <Button
              value="7"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("7")}
            />
            <Button
              value="8"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("8")}
            />
            <Button
              value="9"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("9")}
            />
            <Button
              value="DEL"
              gc="auto/span 1"
              bc="theme.key.backgroundOne"
              color="theme.text.four"
              bbc="theme.keyShadow.one"
              onClick={() => handleClickBotton("DEL")}
            />
            <Button
              value="4"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("4")}
            />
            <Button
              value="5"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("5")}
            />
            <Button
              value="6"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("6")}
            />
            <Button
              value="+"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("+")}
            />
            <Button
              value="1"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("1")}
            />
            <Button
              value="2"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("2")}
            />
            <Button
              value="3"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("3")}
            />
            <Button
              value="-"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("-")}
            />
            <Button
              value="."
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton(".")}
            />
            <Button
              value="0"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("0")}
            />
            <Button
              value="/"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("/")}
            />
            <Button
              value="x"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => handleClickBotton("x")}
            />
            <Button
              value="RESET"
              gc="auto/span 2"
              bc="theme.key.backgroundOne"
              color="theme.text.four"
              bbc="theme.keyShadow.one"
              onClick={() => handleClickBotton("RESET")}
            />
            <Button
              value="="
              gc="auto/span 2"
              bc="theme.key.backgroundTwo"
              color="theme.text.three"
              bbc="theme.keyShadow.two"
              onClick={() => handleClickBotton("=")}
            />
          </BtnsBox>
        </Column>
      </Container>
    </div>
  );
};

export default Calculator;
