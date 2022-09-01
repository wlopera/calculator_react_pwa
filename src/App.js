import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Calculator from "./components/calculator/Calculator";

import GlobalStyle from "./util/GlobalStyle";

const App = () => {
  const [themeNum, setThemeNum] = useState(1);

  const getTheme = (number) => ({
    main: `var(--main-background-${number})`,
    toggle: `var(--toggle-background-${number})`,
    screen: `var(--screen-background-${number})`,
    key: {
      backgroundOne: `var(--key-background-one-${number})`,
      backgroundTwo: `var(--key-background-two-${number})`,
      backgroundThree: `var(--key-background-three-${number})`,
    },
    keyShadow: {
      one: `var(--key-shadow-one-${number})`,
      two: `var(--key-shadow-two-${number})`,
      three: `var(--key-shadow-three-${number})`,
    },
    text: {
      one: `var(--text-color-one-${number})`,
      two: `var(--text-color-two-${number})`,
      // three: `${number === 3 ? "var(--text-color-three-3}" : null}`,
    },
  });

  return (
    <ThemeProvider theme={() => getTheme(themeNum)}>
      <GlobalStyle />
      <Calculator onThemeNum={setThemeNum} />
    </ThemeProvider>
  );
};

export default App;
