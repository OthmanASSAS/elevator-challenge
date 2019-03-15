import React, { Component } from 'react';
import StageBuilding from './StageBuilding/StageBuilding'

class Building extends Component {
    render() {
        const {stagesElevatorOne, currentStage, stageSelected} = this.props
        return (
            <div>
                {stagesElevatorOne.map(stage => <StageBuilding stage={stage} key={stage} currentStage={currentStage} stageSelected={stageSelected}/>)}
                
            </div>
        );
    }
}

export default Building;