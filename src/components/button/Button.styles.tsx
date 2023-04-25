import { css } from "styled-components";
import { ColorType } from "./Button";

interface ButtonContainerProps {
  buttonColor: ColorType;
}

const ButtonContainer = css<ButtonContainerProps>`
  color: ${({ buttonColor }) => buttonColor.text};
  background: ${({ buttonColor }) => buttonColor.background};
  position: relative;

  border: 1px solid ${({ buttonColor }) => buttonColor.borderColor};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    background-color: transparent;
    transition: background-color 0.3s;
    border-radius: 5px;
  }

  &:hover {
    &::after {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export { ButtonContainer };
