import styled from "styled-components";

// Componente estilo Row: Define uso de filas base.
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// Componente estilo Row: Define uso de columnas base.
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Componente estilo Container: Contendor de estilo principal.
export const Container = styled(Row)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.main};
  padding: 2rem;
`;

// Componente estilo Column: Estilo dinamico de columnas principal.
export const Column = styled(Col)`
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
`;

// Componente estilo RowBox: Estilo de filas para tarjeta inicial.
export const RowBox = styled(Row)`
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
`;

// Componente estilo ThemesBox: Estilo de filas para definir temas.
export const ThemesBox = styled(Row)`
  justify-content: space-around;
`;

// Componente estilo Text: Estilo dinamico para textos.
export const Text = styled.p`
  color: ${(props) => props.theme.text.one};
  padding-bottom: ${(props) => props.pb};
  font-size: ${(props) => props.fs};
  margin: ${(props) => props.m};
`;

// Componente estilo Toggle: Estilo para alternar radio button.
export const Toggle = styled(Row)`
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

// Componente estilo HiddenRadioButton: Estilo para radio button.
export const HiddenRadioButton = styled.input.attrs({
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

// Componente estilo DisplayRow: Estilo para vista de resultados.
export const DisplayRow = styled(Row)`
  justify-content: flex-end;
  background-color: ${(props) => props.theme.screen};
  border-radius: 0.5rem;
  padding: 2rem;
`;

// Componente estilo BtnsBox: Estilo para area de botones.
export const BtnsBox = styled.div`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  gap: clamp(0.5rem, 4vw, 1.5rem);
  width: 100%;
  background-color: ${(props) => props.theme.toggle};
  border-radius: 0.5rem;
  padding: 2rem;
`;

// Componente estilo CalcBtnBox: Estilo para botones.
export const CalcBtnBox = styled(Row)`
  grid-column: ${(props) => props.gc};
  border-radius: 0.5rem;
  padding: 1rem;

  background-color: ${(props) => {
    if (props.bc === "theme.key.backgroundOne") {
      return props.theme.key.backgroundOne;
    } else if (props.bc === "theme.key.backgroundTwo") {
      return props.theme.key.backgroundTwo;
    } else if (props.bc === "theme.key.backgroundThree") {
      return props.theme.key.backgroundThree;
    }
  }};

  color: ${(props) => {
    if (props.color === "theme.text.two") {
      return props.theme.text.two;
    } else if (props.color === "theme.text.three") {
      return props.theme.text.three;
    } else if (props.color === "theme.text.four") {
      return props.theme.text.four;
    }
  }};

  border-bottom: 0.25rem solid
    ${(props) => {
      if (props.bbc === "theme.keyShadow.one") {
        return props.theme.keyShadow.one;
      } else if (props.bbc === "theme.keyShadow.two") {
        return props.theme.keyShadow.two;
      } else if (props.bbc === "theme.keyShadow.three") {
        return props.theme.keyShadow.three;
      }
    }};

  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
`;

export const CalcBtnLabel = styled.h2`
  font-size: clamp(1rem, 10vw, 2.5rem);
  letter-spacing: 0.035ch;
  margin: 0;
`;
