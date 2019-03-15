import React from "react";
import styles from "./StageBuilding.module.css";

const StageBuilding = ({ stage, currentStage, stageSelected }) => {
console.log({currentStage, stage})
    const renderColorStage = () => {
        if (stage === currentStage) {
          return styles.currentStage;
        } 
    }

  return (
    <div className={styles.containerStageBuilding}>
      <div>Etage {stage}</div>
      <div className={renderColorStage()}>voyant etage courant</div>
      <div>bouton d'appel</div>
    </div>
  );
};

export default StageBuilding;
