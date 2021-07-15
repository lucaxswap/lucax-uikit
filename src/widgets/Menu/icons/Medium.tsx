import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 31 25" {...props}>
      <image width="31" height="25" href='/images/menu/medium.png' />
    </Svg>
  );
};

export default Icon;
