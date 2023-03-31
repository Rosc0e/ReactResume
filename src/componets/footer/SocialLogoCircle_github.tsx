import React from "react";
import { FaGithub } from "react-icons/fa";

import "../componentStyles/socialLogoCircle.css";

export const SocialLogoCircleGH = () => {
  const circlesize = 30;

  return (
    <span className="svg-container">
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
        <FaGithub size={circlesize.toString()} className="icon-con" />
      </svg>
    </span>
  );
};
