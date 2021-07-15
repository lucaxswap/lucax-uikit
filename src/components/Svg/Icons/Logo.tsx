import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 225 227" {...props}>
      <image width="225" height="227" href="/images/egg/logo.png"/>
    </Svg>
  );
};

export default Icon;
