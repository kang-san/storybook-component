/**
 * pickture file extensions
 */
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.webp";

declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.ttf";
