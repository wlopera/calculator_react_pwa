import React from "react";

import { DisplayRow, Text } from "../../util/Styles";

const DisplayBox = ({ result }) => {
  return (
    <DisplayRow>
      <Text pb="0rem" fs="clamp(0.5rem, 6vw, 2.5rem)" m="0">
        {result}
      </Text>
    </DisplayRow>
  );
};

export default DisplayBox;
