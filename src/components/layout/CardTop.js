import React from "react";
import { useState } from "react";

import {
  RowBox,
  ThemesBox,
  Column,
  Text,
  Toggle,
  HiddenRadioButton,
} from "../../util/Styles";

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
      <Text pb="0rem" fs="1.85rem" m="0">
        calc
      </Text>
      <Text pb="0.3rem" fs="0.85rem" m="0 0 0 auto">
        THEME
      </Text>
      <Column gap="0.25rem" width="5rem">
        <ThemesBox>
          <Text pb="0rem" fs="1rem" m="0">
            1
          </Text>
          <Text pb="0rem" fs="1rem" m="0">
            2
          </Text>
          <Text pb="0rem" fs="1rem" m="0">
            3
          </Text>
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
