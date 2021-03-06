import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 26" {...props}>
      <image width="32" height="26" href='/images/menu/telegram.png' />
    </Svg>
  );
};

export default Icon;
