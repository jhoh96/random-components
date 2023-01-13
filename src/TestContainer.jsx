import React, { useState, useEffect } from "react";

// components
import ProgressBar from "./general/components/ProgressBar";

// css
import "./containerStyles.scss";

export default function TestContainer() {
  return (
    <div className="test-container">
      <div className="test-container-header">
        <h4>Header</h4>
        <ProgressBar completed={30}></ProgressBar>
      </div>
    </div>
  );
}
