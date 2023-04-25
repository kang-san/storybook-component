import styled, { css } from "styled-components";
import { ReactComponent as CheckmarkIcon } from "../../assets/icon/check.svg";

const CheckboxContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  z-index: 2;
`;

interface StyledCheckboxProps {
  checked: boolean;
  disable: boolean;
  size: "sm" | "lg";
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  position: absolute;
  top: 0;
  left: 0;
  ${({ size }) => {
    if (size === "sm") {
      return `
        width: 20px;
        height: 20px;
      `;
    }
    return `
      width: 40px;
      height: 40px;
    `;
  }}

  background-color: ${(props) =>
    props.checked ? "#f97066" : "#fff"};
  border: ${({ checked }) => {
    if (checked) {
      return "1px solid #f97066";
    }
    return "1px solid #ccc";
  }};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms;
`;

interface StyledCheckmarkProps {
  checked: boolean;
  disable: boolean;
}

const StyledCheckmark = styled(CheckmarkIcon)<StyledCheckmarkProps>`
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};

  path {
    stroke: ${({ disable }) => {
      if (disable) {
        return "#ccc";
      }
      return "#fff";
    }};
  }
`;

export {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  StyledCheckmark,
};
