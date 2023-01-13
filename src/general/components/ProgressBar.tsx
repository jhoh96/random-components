import React, { useState, useEffect } from "react";

// css
import "./styling/progressBarStyling.scss";

export default function ProgressBar(props: any) {
  const { completed, toggle } = props;
  const [animate, setAnimate] = useState<Boolean>(false);

  // eslint-disable-lines
  useEffect(() => {
    renderAnimation();
  }, [toggle]);

  // fills invisible width left of 'diamond' - pushes right
  const widthStyle = {
    width: `${completed}%`,
  };

  // triggers animation keyframe
  const diaStyle = {
    animation: animate ? "spin 1s ease-in-out" : "none",
  };

  const renderAnimation = () => {
    return toggle ? setAnimate(true) : setAnimate(false);
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
