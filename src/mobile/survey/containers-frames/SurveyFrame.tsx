import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useIsPresent } from "framer-motion";

// required components
import ProgressBar from "../../../general/components/ProgressBar";
import VenusHeaderMobile from "../../../general/components/headers/VenusHeaderMobile";
import Questions from "../questions/Questions";

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
  //   const mockData = {
  //     questionNumber: 1,
  //     questionTitle: "탈모를 느끼는 부위를 선택해 주세요.",
  //   };
  const mockData = [
    {
      questionNumber: 1,
      questionTitle: "탈모를 느끼는 부위를 선택해 주세요.",
    },
    // {
    //   questionNumber: 2,
    //   questionTitle: "탈모를 느끼는 부위를 선택해 주세요.",
    // },
    // {
    //   questionNumber: 3,
    //   questionTitle: "탈모를 느끼는 부위를 선택해 주세요.",
    // },
  ];

  return (
    <div className="survey-frame-container">
      <VenusHeaderMobile fixedTop={true} transparent={true}></VenusHeaderMobile>
      <ProgressBar completed={completed} toggle={aniToggle}></ProgressBar>
      <div className="survey-container">
        {/* <Questions question={mockData} /> */}
        {mockData.map((item, key) => {
          return <Questions question={item}></Questions>;
        })}
      </div>
    </div>
  );
}
