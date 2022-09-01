import React from "react";
import styled from "styled-components";

const DisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.screen};
  border-radius: 0.5rem;
  padding: 2rem;
`;

export const Value = styled.h1`
  color: ${(props) => props.theme.text.one};
  font-size: clamp(0.5rem, 6vw, 2.5rem);
  margin: 0;
`;

const DisplayBox = () => {
  return (
    <DisplayRow>
      <Value>0</Value>
    </DisplayRow>
  );
};

export default DisplayBox;
