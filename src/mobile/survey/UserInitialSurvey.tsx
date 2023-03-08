import * as React from "react";
import { useState, useEffect } from "react";

// required components
import SurveyFrame from "./containers-frames/SurveyFrame";

// css && styling
import "./styling/userSurveyStyling.scss";

export default function UserInitialSurvey() {
  // TODO: Add to 'completed' state for every survey question completed && revert

  return (
    <div className="user-survey-component-container">
      <SurveyFrame></SurveyFrame>
    </div>
  );
}
