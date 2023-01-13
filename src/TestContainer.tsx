import React, { useState, useEffect } from "react";

// components
import ProgressBar from "./general/components/ProgressBar";

// css
import "./containerStyles.scss";

export default function TestContainer() {
  const [aniToggle, setAniToggle] = useState<Boolean>();
  const [completed, setCompleted] = useState<Number>(10);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleClick = () => {
    setCompleted(completed.valueOf() + 30);
    // console.log(completed);
    // console.log(aniToggle);
  };

  // awaits 1 second to activate animation, then turns it off
  useEffect(() => {
    setAniToggle(true);
    setTimeout(() => {
      setAniToggle(false);
    }, 1000);
  }, [completed]);

  return (
    <div className="test-container">
      <div className="test-container-header">
        <h4>Header</h4>
        <ProgressBar completed={completed} toggle={aniToggle}></ProgressBar>
        <button onClick={() => handleClick()}>add</button>
        <button onClick={() => setCompleted(10)}>reset</button>
      </div>
    </div>
  );
}
