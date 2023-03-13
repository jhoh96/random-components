import * as React from "react";
import { useState, useEffect } from "react";

// css
import "../styling/buttonStyling.scss";

export default function SurveyButtonSquare(props: any) {
  const { text } = props;
  return (
    <div className="survey-btn-container">
      <button
        onClick={() => {
          console.log("yo man");
        }}
      >
        <div className="survey-btn-sq-img">
          <img src="" />
        </div>
        <div className="survey-btn-sq-text">{text}</div>
      </button>
    </div>
  );
}
