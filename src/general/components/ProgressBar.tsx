import React, { useState, useEffect, useRef } from "react";

// css
import "./styling/progressBarStyling.scss";

export default function ProgressBar(props: any) {
  const { completed } = props;
  const [animate, setAnimate] = useState<Boolean>();
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setAnimate(true);
    delay(400);
    setAnimate(false);
    console.log(animate);
  }, [completed]);

  const widthStyle = {
    width: `${completed}%`,
  };

  const diaStyle = {
    animation: animate ? "spin 1s ease-in-out" : "none",
  };

  const diaPadding = {
    // marginLeft: `${completed}vw`,
    // transform: `scaleX(${completed}vw)`
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-diamond-container" style={widthStyle}>
        <span id="diamond" style={diaStyle}></span>
      </div>
      <div className="progress-bar-filler" style={widthStyle}>
        {/* <span className="progress-bar-label">{`${completed}`}</span> */}
      </div>
    </div>
  );
}
