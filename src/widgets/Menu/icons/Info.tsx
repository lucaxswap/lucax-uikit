import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 35 35" {...props}>
      <image width="35" height="35" href='/images/menu/info.png' />
    </Svg>
  );
};

export default Icon;
