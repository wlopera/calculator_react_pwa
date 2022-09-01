import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const RowBox = styled(Row)`
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
`;

const ThemesBox = styled(Row)`
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 5rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text.one};
  font-size: 1.85rem;
  margin: 0;
`;

const Theme = styled.h2`
  transform: translateY(-0.3rem);
  color: ${(props) => props.theme.text.one};
  font-size: 0.85rem;
  letter-spacing: 0.1ch;
  margin: 0 0 0 auto;
`;

const Label = styled.span`
  color: ${(props) => props.theme.text.one};
  margin: 0;
`;

const Toggle = styled(Row)`
  position: relative;
  justify-content: space-between;
  align-items: stretch;
  height: 1.5rem;
  background-color: ${(props) => props.theme.toggle};
  border-radius: 1rem;
  padding: 0.35rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.25);
  }
`;

const HiddenRadioButton = styled.input.attrs({
  type: "radio",
})`
  height: 1rem;
  width: 1rem;
  margin: 0;
  top: 0.25rem;
  left: ${(props) => props.left};
  cursor: pointer;
  position: absolute;
  opacity: ${(props) => props.opacity};
  content: "";

  &:checked:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.key.backgroundTwo};
    border-radius: 100%;
    left: 0;
    top: 0;
  }
`;

const CardTop = ({ onThemeNum }) => {
  const [opacity, setOpacity] = useState([1, 0, 0]);

  const handleChangeRadio = (event) => {
    switch (event.target.name) {
      case "radioOne":
        onThemeNum(1);
        return setOpacity([1, 0, 0]);
      case "radioTwo":
        onThemeNum(2);
        return setOpacity([0, 1, 0]);
      case "radioThree":
        onThemeNum(3);
        return setOpacity([0, 0, 1]);
      default:
        return setOpacity([1, 0, 0]);
    }
  };

  return (
    <RowBox>
      <Title>calc</Title>
      <Theme>THEME</Theme>
      <Column>
        <ThemesBox>
          <Label>1</Label>
          <Label>2</Label>
          <Label>3</Label>
        </ThemesBox>
        <Toggle>
          <HiddenRadioButton
            name="radioOne"
            opacity={opacity[0]}
            left="5px"
            onClick={handleChangeRadio}
            defaultChecked
          />
          <HiddenRadioButton
            name="radioTwo"
            opacity={opacity[1]}
            left="1.95rem"
            onClick={handleChangeRadio}
          />
          <HiddenRadioButton
            name="radioThree"
            opacity={opacity[2]}
            left="3.65rem"
            onClick={handleChangeRadio}
          />
        </Toggle>
      </Column>
    </RowBox>
  );
};

export default CardTop;
