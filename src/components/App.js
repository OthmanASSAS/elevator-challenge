import React, { Component } from "react";
import styles from "./App.module.css";

import PanneauInterne from "./PanneauInterne/PanneauInterne";
import Building from "./Building/Building";

class App extends Component {
  state = {
    stagesElevatorOne: [5, 4, 3, 2, 1, 0],
    stageSelected: 0,
    currentStage: 0
  };

  componentDidMount = () => {
    this.getStatePanneauInterne();
  };

  getStatePanneauInterne = stateStage => {
    if (stateStage) {
      const { stageSelected, currentStage } = stateStage;
     
      this.setState({ stageSelected, currentStage });
    }
  };

  render() {
    const { stagesElevatorOne } = this.state;
    return (
      <div>
        <div className={styles.panneauInterne}>
          <PanneauInterne
            stagesElevatorOne={stagesElevatorOne}
            getStatePanneauInterne={this.getStatePanneauInterne}
          />
          <Building
            stagesElevatorOne={stagesElevatorOne}
            stageSelected={this.state.stageSelected}
            currentStage={this.state.currentStage}
          />
          <PanneauInterne stagesElevatorOne={stagesElevatorOne}  getStatePanneauInterne={this.getStatePanneauInterne}/>
        </div>
      </div>
    );
  }
}

export default App;
