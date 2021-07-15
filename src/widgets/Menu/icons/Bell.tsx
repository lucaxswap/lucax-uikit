import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface BellProps extends SvgProps {
  isDark: boolean;
}

const Bell: React.FC<BellProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 56 68" {...props}>
      <image width="56" height="68" href={isDark ? '/images/menu/bell.png' : '/images/menu/bell.png'}/>
    </Svg>
  )
};

export default Bell;
