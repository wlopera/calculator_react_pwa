import React from "react";
import Button from "../layout/Button";

import CardTop from "../layout/CardTop";
import DisplayBox from "../layout/DisplayBox";

import { Container, Column, BtnsBox } from "../../util/Styles";

const Calculator = ({ onThemeNum }) => {
  return (
    <div>
      <Container>
        <Column gap="1.5rem" width="clamp(1, 2, 3)">
          <CardTop onThemeNum={onThemeNum} />
          <DisplayBox />
          <BtnsBox>
            <Button
              value="7"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(7)}
            />
            <Button
              value="8"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(8)}
            />
            <Button
              value="9"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(9)}
            />
            <Button
              value="DEL"
              gc="auto/span 1"
              bc="theme.key.backgroundOne"
              color="theme.text.four"
              bbc="theme.keyShadow.one"
              onClick={() => console.log("DEL")}
            />
            <Button
              value="4"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(4)}
            />
            <Button
              value="5"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(5)}
            />
            <Button
              value="6"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(6)}
            />
            <Button
              value="+"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("+")}
            />
            <Button
              value="1"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(1)}
            />
            <Button
              value="2"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(2)}
            />
            <Button
              value="3"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(3)}
            />
            <Button
              value="-"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("-")}
            />
            <Button
              value="."
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(".")}
            />
            <Button
              value="0"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(0)}
            />
            <Button
              value="/"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("/")}
            />
            <Button
              value="x"
              gc="auto/span 1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("x")}
            />
            <Button
              value="RESET"
              gc="auto/span 2"
              bc="theme.key.backgroundOne"
              color="theme.text.four"
              bbc="theme.keyShadow.one"
              onClick={() => console.log("Reset")}
            />
            <Button
              value="="
              gc="auto/span 2"
              bc="theme.key.backgroundTwo"
              color="theme.text.three"
              bbc="theme.keyShadow.two"
              onClick={() => console.log("=")}
            />
          </BtnsBox>
        </Column>
      </Container>
    </div>
  );
};

export default Calculator;
