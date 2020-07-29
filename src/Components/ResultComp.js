import React from 'react';
import '../App.css';
import valuObj from '../Static/valuesObj';

const ResultComp = (props) => {
    let size = props.size;
    let grade = props.grade;
    // let standard = props.standard; Not used yet.
    let threading = props.threading;
    let result = null;
    if(valuObj.size[size] && valuObj.size[size].grade[grade] && valuObj.size[size].grade[grade].threading[threading]){
        result = valuObj.size[size].grade[grade].threading[threading];
    }

    return (
        <div class="top-space">
            {result != null ? <h2>Recommended Bolt Torque: {JSON.stringify(result)}</h2> : <p></p>}
        </div>
    );

}

export default ResultComp;