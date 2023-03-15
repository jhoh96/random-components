import * as React from "react";
import { useState, useEffect } from "react";

export default function SurveyButtonRect({ answers }: any) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="survey-btn-container-rect">
      <button
        onClick={() => {
          setSelected(!selected);
        }}
        style={{ border: selected ? "2px solid #D02094" : "" }}
      >
        <div>{}</div>
      </button>
    </div>
  );
}
