import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" {...props}>
      <image width="40" height="40" href='/images/menu/launch-pool.png' />
    </Svg>
  );
};

export default Icon;
