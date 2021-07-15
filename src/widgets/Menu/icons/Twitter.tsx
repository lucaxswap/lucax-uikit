import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 24" {...props}>
      <image width="30" height="24" href='/images/menu/twitter.png' />
    </Svg>
  );
};

export default Icon;
