import * as React from "react";
import { useState, useEffect } from "react";
import { AnswerType } from "../questions/Basic/BasicQuestion";

// css
import "../styling/buttonStyling.scss";

export default function SurveyButtonSquare(answers: any) {
  const { props } = answers.answers.answers
  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState<string[]>();

  useEffect(() => {
    // setTitle(Object.keys(text.text));
    // setTitle(answers.answers.text)
    // console.log(answers)
  }, []);

  // click handler dependent on questionType
  const handleClick = () => {};

  return (
    <div className="survey-btn-container-sq">
      <button
        onClick={() => {
          // setSelected(!selected);
          handleClick();
        }}
        style={{ border: selected ? "2px solid #D02094" : "" }}
      >
        <div className="survey-btn-sq-img">
          <img src="" />
        </div>
        <div className="survey-btn-sq-text">{title}</div>
      </button>
    </div>
  );
}
