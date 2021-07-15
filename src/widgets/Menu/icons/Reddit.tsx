import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 29 27" {...props}>
      <image width="29" height="27" href='/images/menu/reddit.png' />      
    </Svg>
  );
};

export default Icon;
