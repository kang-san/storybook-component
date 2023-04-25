import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  StyledCheckmark,
} from "./Checkbox.styles";

import { useWindowScreen } from "../../hook";

interface Props {
  checked: boolean;
  disable: boolean;
  size: "sm" | "lg";
}

const CheckBox = ({ checked, disable, size }: Props) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox checked={checked} disable={disable} size={size}>
        <StyledCheckmark checked={checked} disable={disable} />
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default CheckBox;
