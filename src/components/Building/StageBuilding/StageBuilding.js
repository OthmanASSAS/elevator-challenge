import React from 'react';
import styles from './StageBuilding.module.css'

const StageBuilding = ({stage}) => {
    return (
        <div className={styles.containerStageBuilding}>
            <div>Etage {stage}</div>
            <div >voyant etage courant</div>
            <div>bouton d'appel</div>
        </div>
    );
};

export default StageBuilding;