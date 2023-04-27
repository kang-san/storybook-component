import React from "react";
import Desktop from "./Button.Desktop";
import Tablet from "./Button.Tablet";
import Mobile from "./Button.Mobile";
import { useWindowScreen } from "../../hook";

type Usage =
  | "exit"
  | "update"
  | "confirm"
  // | "upload"
  // | "excel"
  // | "cancel"
  | "primary";

interface Props {
  text: string;
  usage: Usage;
  onClick?: () => void;
}

export interface ColorType {
  text: string;
  background: string;
  borderColor: string;
}

type Color = {
  [key in Usage]: ColorType;
};

const color: Color = {
  exit: {
    text: "#000",
    background: "none",
    borderColor: "#D0D5DD",
  },
  update: {
    text: "#fff",
    background: "#fdb022",
    borderColor: "#fdb022",
  },
  confirm: {
    text: "#fff",
    background: "#0ba5ec",
    borderColor: "#0ba5ec",
  },
  upload: {
    text: "#fff",
    background: "#98a2b3",
    borderColor: "#98a2b3",
  },
  excel: {
    text: "#12b76a",
    background: "none",
    borderColor: "#12b76a",
  },
  cancel: {
    text: "#fff",
    background: "#d92d20",
    borderColor: "#d92d20",
  },
  primary: {
    text: "#fff",
    background: "#f97066",
    borderColor: "#f97066",
  },
};

const Button = ({ text, usage }: Props) => {
  const windowScreen = useWindowScreen();

  const Container =
    windowScreen === "desktop"
      ? Desktop
      : windowScreen === "tablet"
      ? Tablet
      : Mobile;
  return <Container buttonColor={color[usage]}>{text}</Container>;
};

export default Button;
