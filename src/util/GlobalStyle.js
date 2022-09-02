import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Theme 1 */
    --main-background-1: hsl(222, 26%, 31%);
    --toggle-background-1: hsl(223, 31%, 20%);
    --screen-background-1: hsl(224, 36%, 15%);

    --key-background-one-1: hsl(225, 21%, 49%);
    --key-shadow-one-1: hsl(224, 28%, 35%);

    --key-background-two-1: hsl(6, 63%, 50%);
    --key-shadow-two-1: hsl(6, 70%, 34%);

    --key-background-three-1: hsl(30, 25%, 89%);
    --key-shadow-three-1: hsl(28, 16%, 65%);

    --text-color-one-1: hsl(0, 0%, 100%);
    --text-color-two-1: hsl(221, 14%, 31%);
    --text-color-three-1: hsl(0, 0%, 100%);
    --text-color-four-1: hsl(0, 0%, 100%);

    /* Theme 2 */
    --main-background-2: hsl(0, 0%, 90%);
    --toggle-background-2: hsl(0, 5%, 81%);
    --screen-background-2: hsl(0, 0%, 93%);

    --key-background-one-2: hsl(185, 42%, 37%);
    --key-shadow-one-2: hsl(185, 58%, 25%);

    --key-background-two-2: hsl(25, 98%, 40%);
    --key-shadow-two-2: hsl(25, 99%, 27%);

    --key-background-three-2: hsl(45, 7%, 89%);
    --key-shadow-three-2: hsl(35, 11%, 61%);

    --text-color-one-2: hsl(60, 10%, 19%);
    --text-color-two-2: hsl(60, 10%, 19%);
    --text-color-three-2: hsl(0, 0%, 100%);
    --text-color-four-2: hsl(0, 0%, 100%);

    /* Theme 3 */
    --main-background-3: hsl(268, 75%, 9%);
    --toggle-background-3: hsl(268, 71%, 12%);
    --screen-background-3: hsl(268, 71%, 12%);

    --key-background-one-3: hsl(281, 89%, 26%);
    --key-shadow-one-3: hsl(285, 91%, 52%);

    --key-background-two-3: hsl(176, 100%, 44%);
    --key-shadow-two-3: hsl(177, 92%, 70%);

    --key-background-three-3: hsl(268, 47%, 21%);
    --key-shadow-three-3: hsl(290, 70%, 36%);

    --text-color-one-3: hsl(52, 100%, 62%);
    --text-color-two-3: hsl(52, 100%, 62%);
    --text-color-three-3: hsl(198, 20%, 13%);
    --text-color-four-3: hsl(0, 0%, 100%);

  }

  * {
    font-family: "League Spartan", sans-serif;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
