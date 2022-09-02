import React from "react";
import { CalcBtnBox, CalcBtnLabel } from "../../util/Styles";

const Button = ({ value, bc, color, bbc, onClick }) => {
  return (
    <CalcBtnBox bc={bc} color={color} bbc={bbc} onClick={onClick}>
      <CalcBtnLabel>{value}</CalcBtnLabel>
    </CalcBtnBox>
  );
};

export default Button;
