import React from "react";
import { MdEmail } from "react-icons/md";
import "../componentStyles/logo.css";

export const SocialLogoCircleE = () => {
  const circlesize = 30;

  return (
    <span className="svg-container ">
      <svg
        className="social-logo-svg"
        width={circlesize * 2}
        height={circlesize * 2}
        version="1.1"
        viewBox="0 0 50 100"
      >
        <circle
          cx={circlesize.toString()}
          cy={circlesize.toString()}
          r={circlesize.toString()}
          fill="orange"
        />
        <MdEmail size={circlesize.toString()} className="icon-con1" />
      </svg>
    </span>
  );
};
