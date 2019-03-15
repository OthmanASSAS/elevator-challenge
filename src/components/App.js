import React, { Component } from 'react';
import PanneauInterne from './panneauInterne/panneauInterne'

class App extends Component {

  state = {
    stagesElevatorOne: [5,4,3,2,1,0]
  }
  render() {
    const {stagesElevatorOne}=this.state
    return (
      <div >
        <div className="panneau-interne">
        <PanneauInterne stagesElevatorOne={stagesElevatorOne}/>
        </div>
       
       elevator
      </div>
    );
  }
}

export default App;
