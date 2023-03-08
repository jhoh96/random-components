import React, { useState, useEffect } from "react";
import { BasicQuestion } from "./Basic/BasicQuestion";

// assets

// css

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

  useEffect(() => {
    const basicQuestion = new BasicQuestion(
      question.questionNumber,
      question.questionTitle
    );
    setNumber(basicQuestion.getQuestionNumber());
    setTitle(basicQuestion.getQuestionTitle());
  });

  return (
    <div>
      <div>{number}</div>
      <div>{title}</div>
    </div>
  );
}
