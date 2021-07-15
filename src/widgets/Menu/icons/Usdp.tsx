import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image width="64" height="64" href='/images/menu/usdp.png' />      
    </Svg>
  );
};

export default Icon;
