import * as React from "react";
import { useState, useEffect } from "react";
import { checkAnswer } from "../questions/util/util";

// css
import "../styling/buttonStyling.scss";

export default function SurveyButtonSquare(props: any) {
  const { text, type, checkAnswer } = props;
  const [selected, setSelected] = useState(false);
  const [title, setTitle] = useState<string[]>();

  useEffect(() => {
    setTitle(Object.keys(text.text));
  }, []);

  // click handler dependent on questionType
  const handleClick = () => {
    if (type === "single") {
      return 0;
    } else if (type === "multiple") {
      return 0;
    }
  };

  return (
    <div className="survey-btn-container-sq">
      <button
        onClick={() => {
          setSelected(!selected);
          console.log(title);
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
