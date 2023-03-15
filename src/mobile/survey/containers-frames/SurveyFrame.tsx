import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useIsPresent } from "framer-motion";

// required components
import ProgressBar from "../../../general/components/ProgressBar";
import VenusHeaderMobile from "../../../general/components/headers/VenusHeaderMobile";
import Questions from "../questions/Questions";
import { BasicQuestion } from "../questions/Basic/BasicQuestion";

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
  let questionOne = new BasicQuestion(
    1,
    "탈모를 느끼는 부위를 선택해 주세요.",
    "single",
    [
      { 가르마: false },
      { 정수리: false },
      { 전반적: false },
      { 원형탈모: false },
      { 해어라인: false },
    ],
    "square"
  );

  let questionTwo = new BasicQuestion(
    2,
    "언제부터 탈모증상을 느끼기 시작했나요?",
    "single",
    [
      { yo: false },
      { this: false },
      { is: false },
      { another: false },
      { test: false },
    ],
    "square"
  );

  const mockData = [questionOne];

  return (
    <div className="survey-frame-container">
      <VenusHeaderMobile
        fixedTop={true}
        transparent={false}
      ></VenusHeaderMobile>
      <ProgressBar completed={completed} toggle={aniToggle}></ProgressBar>
      <div className="survey-container">
        {/* <Questions question={mockData} /> */}
        {mockData.map((item: any, key) => {
          return <Questions key={key} question={item}></Questions>;
        })}
      </div>
    </div>
  );
}
