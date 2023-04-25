import React from "react";
import useScreenWidth from "../../../hook/useWindowScreen";
import { DesktopCardContainer } from "./Card.Desktop";
import { MobileCardContainer } from "./Card.Mobile";
import { TabletCardContainer } from "./Card.Tablet";

interface Props {
  label: string;
  children?: React.ReactNode;
}

const Card = ({ label, children }: Props) => {
  const screenWidth = useScreenWidth();
  const CardContainer =
    screenWidth === "desktop"
      ? DesktopCardContainer
      : screenWidth === "tablet"
      ? TabletCardContainer
      : MobileCardContainer;

  return (
    <CardContainer>
      <h3>{label}</h3>
      {children}
    </CardContainer>
  );
};

export default Card;
