import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useIsPresent } from "framer-motion";

// required components
import ProgressBar from "../../../general/components/ProgressBar";
import VenusHeaderMobile from "../../../general/components/headers/VenusHeaderMobile";
import Questions from "../questions/Questions";

// testing purposes

// css
import "../styling/frameStyling.scss";

export default function SurveyFrame() {
  const [aniToggle, setAniToggle] = useState<boolean>(); // animation toggle for all moving / animated components. Triggers on render-rerender
  const [completed, setCompleted] = useState<number>(2); // progress towards completion. Max 100.
  // framer animation variables
  const isPresent = useIsPresent();

  // animation hook
  // awaits 1 second to activate animation, then turns it off
  useEffect(() => {
    setAniToggle(true);
    setTimeout(() => {
      setAniToggle(false);
    }, 1000);
  }, [completed]);

  // MOCK DATA for Testing Purposes
  const mockData = [
    {
      questionNumber: 1,
      questionTitle: "탈모를 느끼는 부위를 선택해 주세요.",
      questionType: "single",
      answers: ["yo", "this", "is", "a", "test"],
      answerCount: 5,
      buttonType: "square",
    },
    {
      questionNumber: 2,
      questionTitle: "언제부터 탈모증상을 느끼기 시작했나요?",
      questionType: "single",
      answers: ["yo", "this", "is", "a", "test"],
      answerCount: 5,
      buttonType: "rect",
    },
    {
      questionNumber: 3,
      questionTitle: "최근 두피가 가렵거나 예민해진 것 같나요?",
      questionType: "multiple",
      answers: ["yo", "this", "is", "a", "test"],
      answerCount: 2,
      buttonType: "square",
    },
    {
      questionNumber: 4,
      questionTitle: "최근 두피가 가렵거나 예민해진 것 같나요?",
      questionType: "single",
      answers: ["yo", "this", "is", "a", "test"],
      answerCount: 4,
      buttonType: "square",
    },
  ];

  return (
    <div className="survey-frame-container">
      <VenusHeaderMobile fixedTop={true} transparent={true}></VenusHeaderMobile>
      <ProgressBar completed={completed} toggle={aniToggle}></ProgressBar>
      <div className="survey-container">
        {/* <Questions question={mockData} /> */}
        {mockData.map((item, key) => {
          return <Questions key={key} question={item}></Questions>;
        })}
      </div>
    </div>
  );
}
