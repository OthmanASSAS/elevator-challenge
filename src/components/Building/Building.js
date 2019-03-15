import React, { Component } from 'react';
import StageBuilding from './StageBuilding/StageBuilding'

class Building extends Component {
    render() {
        const {stagesElevatorOne} = this.props
        return (
            <div>
                {stagesElevatorOne.map(stage => <StageBuilding stage={stage}/>)}
                
            </div>
        );
    }
}

export default Building;