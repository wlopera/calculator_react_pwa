import React from "react";
import { CalcBtnBox, CalcBtnLabel } from "../../util/Styles";

const Button = ({ value, bc, color, bbc, gc, onClick }) => {
  return (
    <CalcBtnBox bc={bc} color={color} bbc={bbc} gc={gc} onClick={onClick}>
      <CalcBtnLabel>{value}</CalcBtnLabel>
    </CalcBtnBox>
  );
};

export default Button;
