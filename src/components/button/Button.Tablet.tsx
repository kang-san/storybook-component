import styled from "styled-components";
import { ColorType } from "./Button";
import { ButtonContainer } from "./Button.styles";

interface TabletButtonContainerProps {
  buttonColor: ColorType;
}

const TabletButtonContainer = styled.button<TabletButtonContainerProps>`
  color: ${(props) => props.buttonColor.text};
  background: ${(props) => props.buttonColor.background};

  ${ButtonContainer}

  padding: 8px;
  border-radius: 5px;
`;
export default TabletButtonContainer;
