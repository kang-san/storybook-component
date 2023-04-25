import styled, { css } from "styled-components";
import { ColorType } from "./Button";
import { ButtonContainer } from "./Button.styles";

interface DesktopButtonContainerProps {
  buttonColor: ColorType;
}

const DesktopButtonContainer = styled.button<DesktopButtonContainerProps>`
  min-width: 105px;

  ${ButtonContainer}

  padding: 10px;
  border-radius: 5px;
`;

export default DesktopButtonContainer;
