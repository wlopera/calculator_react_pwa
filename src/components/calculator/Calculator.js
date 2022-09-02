import React from "react";
import styled from "styled-components";
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
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(7)}
            />
            <Button
              value="8"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(8)}
            />
            <Button
              value="9"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(9)}
            />
            <Button
              value="DEL"
              bc="theme.key.backgroundOne"
              color="theme.text.four"
              bbc="theme.keyShadow.one"
              onClick={() => console.log("DEL")}
            />
            <Button
              value="4"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(4)}
            />
            <Button
              value="5"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(5)}
            />
            <Button
              value="6"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(6)}
            />
            <Button
              value="+"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("+")}
            />
            <Button
              value="1"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(1)}
            />
            <Button
              value="2"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(2)}
            />
            <Button
              value="3"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(3)}
            />
            <Button
              value="-"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("-")}
            />
            <Button
              value="."
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(".")}
            />
            <Button
              value="0"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log(0)}
            />
            <Button
              value="/"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("/")}
            />
            <Button
              value="x"
              bc="theme.key.backgroundThree"
              color="theme.text.two"
              bbc="theme.keyShadow.three"
              onClick={() => console.log("x")}
            />
          </BtnsBox>
        </Column>
      </Container>
    </div>
  );
};

export default Calculator;
