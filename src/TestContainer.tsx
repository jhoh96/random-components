import React, { useState, useEffect } from "react";

// components
import ProgressBar from "./general/components/ProgressBar";

// css
import "./containerStyles.scss";

// for testing purposes
import SurveyNextButton from "./general/components/buttons/SurveyNextButton";

export default function TestContainer() {
  const [aniToggle, setAniToggle] = useState<Boolean>(); // animation toggle for all moving / animated components. Triggers on render-rerender
  const [completed, setCompleted] = useState<Number>(2); // progress towards completion. Max 100.

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
        {/* Buttons for testing */}
        <button onClick={() => setCompleted(completed.valueOf() + 30)}>
          add
        </button>
        <button onClick={() => setCompleted(10)}>reset</button>
      </div>
      <SurveyNextButton background={false} fixed={true} />
    </div>
  );
}
