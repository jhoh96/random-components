import * as React from "react";
import { useState, useEffect } from "react";
import { AnswerType } from "../questions/Basic/BasicQuestion";

// css
import "../styling/buttonStyling.scss";

// TODO SET OBJECT TYPE OF ANSWERTYPE
export default function SurveyButtonSquare({ answers }: any) {
  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    // console.log(answers.answers);
    setTitle(answers.answers.text);
  }, []);

  // click handler dependent on questionType
  // TODO : FIX THIS S
  const handleClick = () => {
    answers.answers.answer = !answers.answers.answer;
    setSelected(!selected);
  };

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
