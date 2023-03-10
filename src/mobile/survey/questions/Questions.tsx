import React, { useState, useEffect } from "react";
import { BasicQuestion } from "./Basic/BasicQuestion";

// assets

// testing purposes
import SurveyButtonSquare from "../components/SurveyButtonSquare";

// css
import "../styling/questionStyling.scss";

interface QuestionConfig {
  number?: Number;
  title?: String;
}

/**
 * Default question component
 * @returns formatted question / survey questionnaires with getters & setters
 */
export default function Questions(props: any) {
  const { question } = props;
  const [number, setNumber] = useState<number>();
  const [title, setTitle] = useState<string>();
  const [answer, setAnswer] = useState<string>("");
  const [buttonType, setButtonType] = useState<string>("");
  const [answerCount, setAnswerCount] = useState<number>(0);
  const [buttons, setButtons] = useState<any>([]);

  useEffect(() => {
    const basicQuestion = new BasicQuestion(
      question.questionNumber,
      question.questionTitle,
      question.questionType,
      question.answerCount,
      question.buttonType
    );
    setNumber(basicQuestion.getQuestionNumber());
    setTitle(basicQuestion.getQuestionTitle());
    setButtonType(basicQuestion.getButtonType());
    setAnswerCount(basicQuestion.getAnswerCount());
    for (let i = 0; i < answerCount; i++) {
      buttons.push(i);
    }
  });

  // TODO: Store answer object inside answers array in questions
  // each answer obj in array can have a boolean value
  // each clicked (true) can be assigned different styles

  //   const DisplayButtons = () => {
  //     let counter = [];
  //     for (let i = 0; i < answerCount; i++) {
  //       counter.push(i);
  //     }

  //     if (buttonType === "square") {
  //       counter.map((key) => {
  //         return <SurveyButtonSquare key={key}></SurveyButtonSquare>;
  //       });
  //     }
  //     return <></>;
  //   };

  return (
    <div className="survey-question-mobile">
      {/* <div>{number}</div> */}
      <div className="survey-question-title">{title}</div>
      <div
        className="button-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px",
          marginLeft: "5px",
          marginTop: "45px",
        }}
      >
        {/* <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            defaultValue={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          ></input>
          <button
            style={{ height: "25px", width: "25px" }}
            onClick={(e) => {
              e.preventDefault();
              console.log(answer);
            }}
          ></button>
        </form> */}
        <div className="survey-question-buttons"></div>
      </div>
    </div>
  );
}
