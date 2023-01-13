import React, { useState, useEffect, useRef } from "react";

// css
import "./styling/progressBarStyling.scss";

export default function ProgressBar(props: any) {
  const { completed, toggle } = props;
  const [animate, setAnimate] = useState<Number>(0);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    renderAnimation();
  }, [toggle]);

  const widthStyle = {
    width: `${completed}%`,
  };

  const diaStyle = {
    animation: animate ? "spin 1s ease-in-out" : "none",
    // animateionDuration: animate ? "500ms" : 0,
  };

  const renderAnimation = () => {
    return toggle ? setAnimate(1) : setAnimate(0);
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-diamond-container" style={widthStyle}>
        <div id="diamond" style={diaStyle}></div>
      </div>
      <div className="progress-bar-filler" style={widthStyle}>
        {/* <span className="progress-bar-label">{`${completed}`}</span> */}
      </div>
    </div>
  );
}
