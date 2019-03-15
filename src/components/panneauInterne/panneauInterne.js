import React, { Component } from "react";
import Button from "./button/button";

class panneauInterne extends Component {
  state = {
    stageSelected: 0,
    currentStage: 0
  };

  stageSelection = stage => {
    this.setState({ stageSelected: stage });
    this.animationToStageSelected();
  };

  animationToStageSelected = () => {
    const id = setInterval(() => {
      let { stageSelected, currentStage } = this.state;

      console.log({ currentStage }, { stageSelected });
      if (stageSelected > currentStage) {
        currentStage++;
        this.setState({ currentStage });
      }
      if (stageSelected < currentStage) {
        currentStage--;
        this.setState({ currentStage });
      }
      if (stageSelected === currentStage) {
        clearInterval(id);
      }
    }, 1000);
  };

  render() {
    console.log(this.state.stageSelected);
    const { stagesElevatorOne } = this.props;
    const { stageSelected, currentStage } = this.state;

    return (
      <div>
        {stagesElevatorOne.map(stage => (
          <Button
            key={stage}
            stage={stage}
            stageSelection={this.stageSelection}
            stageSelected={stageSelected}
            currentStage={currentStage}
          />
        ))}
      </div>
    );
  }
}

export default panneauInterne;
