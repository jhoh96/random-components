import * as React from "react";
import { useState, useEffect } from "react";

// required components
import SurveyFrame from "./containers-frames/SurveyFrame";
import SurveyNextButton from "../../general/components/buttons/SurveyNextButton";

// css && styling
import "./styling/userSurveyStyling.scss";

export default function UserInitialSurvey() {
  // TODO: Add to 'completed' state for every survey question completed && revert

  return (
    <div className="user-survey-component-container">
      <SurveyFrame></SurveyFrame>
      <SurveyNextButton fixed={true}></SurveyNextButton>
    </div>
  );
}
