import React from 'react';
import '../App.css';
import valuObj from '../Static/valuesObj';

const ResultComp = (props) => {
    let size = props.size;
    let grade = props.grade;
    let standard = props.standard;
    let threading = props.threading;
    let result = null;
    if (valuObj.standard[standard] && valuObj.standard[standard].size[size] && valuObj.standard[standard].size[size].grade[grade]
        && valuObj.standard[standard].size[size].grade[grade].threading[threading]) {
        result = valuObj.standard[standard].size[size].grade[grade].threading[threading];
    }

    return (
        <div class="top-space">
            {result != null ? <h2>Recommended Bolt Torque: {JSON.stringify(result)}</h2> : <p></p>}
        </div>
    );

}

export default ResultComp;