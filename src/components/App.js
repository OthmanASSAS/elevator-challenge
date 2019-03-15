import React, { Component } from "react";
import styles from './App.module.css';

import PanneauInterne from "./PanneauInterne/PanneauInterne";
import Building from "./Building/Building";

class App extends Component {
  state = {
    stagesElevatorOne: [5, 4, 3, 2, 1, 0]
  };
  render() {
    const { stagesElevatorOne } = this.state;
    return (
      <div>
        <div className={styles.panneauInterne}>
          <PanneauInterne stagesElevatorOne={stagesElevatorOne} />
          <Building stagesElevatorOne={stagesElevatorOne}/>
          <PanneauInterne stagesElevatorOne={stagesElevatorOne} />
        </div>
        elevator
      </div>
    );
  }
}

export default App;
