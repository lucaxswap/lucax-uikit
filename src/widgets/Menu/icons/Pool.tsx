import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 38" {...props}>
      <image width="26" height="38" href='/images/menu/staking.png' />
    </Svg>
  );
};

export default Icon;
