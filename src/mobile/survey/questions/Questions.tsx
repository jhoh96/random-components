import React, { useState, useEffect } from "react";
import { BasicQuestion, AnswerType } from "./Basic/BasicQuestion";
import { checkAnswer } from "../questions/util/util";

// assets

// testing purposes
import SurveyButtonSquare from "../components/SurveyButtonSquare";
import SurveyButtonRect from "../components/SurveyButtonRect";

// css
import "../styling/questionStyling.scss";

// TODO: Questions component shouldn't be the one calling new instance of BasicQuestion.
// SurveyFrame should call basic question objects, populate array then push props to this component

/**
 * Default question component
 * @returns formatted question / survey questionnaires with getters & setters
 */
export default function Questions(props: any) {
  const { question } = props;
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [number, setNumber] = useState<number>();
  const [title, setTitle] = useState<string>();
  const [answers, setAnswers] = useState<any>([]);
  const [buttonType, setButtonType] = useState<string>();

  useEffect(() => {
    setQuestionNumber(question.getQuestionNumber());
    setNumber(question.getQuestionNumber());
    setTitle(question.getQuestionTitle());
    setAnswers(question.getAnswers());
    setButtonType(question.getButtonType());
  });

  useEffect(() => {
    // console.log(answers);
  });

  // TODO: Store answer object inside answers array in questions
  // each answer obj in array can have a boolean value
  // each clicked (true) can be assigned different styles
  const AnswerButtons: React.FC<{ answers: AnswerType }> = (answers) => {
    if (buttonType === "square") {
      return <SurveyButtonSquare answers={answers}></SurveyButtonSquare>;
    }
    if (buttonType === "rect") {
      return <SurveyButtonRect></SurveyButtonRect>;
    }
    return <></>;
  };

  return (
    <div className="survey-question-mobile">
      <div className="survey-question-title">
        {title}
        {` [Number: ${questionNumber}]`}
      </div>
      <div className={`button-container-${buttonType}`}>
        {answers.map((answers: AnswerType, key: any) => {
          return (
            <div key={key}>
              <AnswerButtons answers={answers}></AnswerButtons>
            </div>
          );
        })}
      </div>
    </div>
  );
}
