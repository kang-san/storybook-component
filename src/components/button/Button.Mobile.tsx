import styled from "styled-components";
import { ColorType } from "./Button";
import { ButtonContainer } from "./Button.styles";

interface MobileButtonContainerProps {
  buttonColor: ColorType;
}

const MobileButtonContainer = styled.button<MobileButtonContainerProps>`
  color: ${(props) => props.buttonColor.text};
  background: ${(props) => props.buttonColor.background};

  ${ButtonContainer}

  padding: 5px;
  border-radius: 5px;
`;

export default MobileButtonContainer;
