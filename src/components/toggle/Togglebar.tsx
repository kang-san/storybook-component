import React from "react";
import { Toggle, ToggleInput, ToggleLabel } from "./Toggle.styles";

interface Props {
  checked: boolean;
}

const Togglebar = ({ checked }: Props) => {
  return (
    <Toggle>
      <ToggleInput id="toggle" checked={checked} />
      <ToggleLabel htmlFor="toggle" />
    </Toggle>
  );
};

export default Togglebar;
