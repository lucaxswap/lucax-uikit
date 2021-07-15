import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 54 41" {...props}>
      <image width="54" height="41" href='/images/menu/farm.png' />
    </Svg>
  );
};

export default Icon;
