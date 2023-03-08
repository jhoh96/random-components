import * as React from "react";

// css
import "../styling/buttonStyling.scss";

/**
 * Button for survey progression with fixed styling. Need positioning scss.
 * @param props
 * @param background - enable / disable background behind button
 * @param fixed - enable / disable fixed bottom position
 *
 * @returns
 */
export default function SurveyNextButton(props: any) {
  const { background, fixed } = props;

  const buttonProps: Object = {
    background: background ? "#ffffff" : "transparent",
    position: fixed ? "fixed" : "",
    bottom: fixed ? 0 : "",
  };

  const handleClick = () => {
    console.log("next button click!");
  };

  return (
    <div className="survey-next-button-container" style={buttonProps}>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        다음
      </button>
    </div>
  );
}
