import React from "react";
import styled from "styled-components";

import CardTop from "../layout/CardTop";
import DisplayBox from "../layout/DisplayBox";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.main};
  padding: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: clamp(0rem, 80vw, 35rem);
`;

const Calculator = ({ onThemeNum }) => {
  return (
    <div>
      <Container>
        <Column>
          <CardTop onThemeNum={onThemeNum} />
          <DisplayBox />
        </Column>
      </Container>
    </div>
  );
};

export default Calculator;
