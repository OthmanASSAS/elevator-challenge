import React from "react";
import styles from "./Button.module.css";

const button = ({ stage, stageSelection, stageSelected, currentStage }) => {
  const renderColorButton = () => {
    if (stage === currentStage) {
      return styles.currentStage;
    } else if (stage === stageSelected) {
      return styles.stageSelected;
    } else {
      return styles.button;
    }
    
  };
  return (
    <div className={renderColorButton()} onClick={() => stageSelection(stage)}>
      {stage}
    </div>
  );
};

export default button;
