import React from 'react';
import '../App.css';
import valuObj from '../Static/valuesObj';

const ResultComp = (props) => {
    let size = props.size;
    let grade = props.grade;
    let standard = props.standard;
    let threading = props.threading;
    let lube = props.lube;
    let result = null;
    if (valuObj.standard[standard] && valuObj.standard[standard].lube[lube]
        && valuObj.standard[standard].lube[lube].size[size]
        && valuObj.standard[standard].lube[lube].size[size].grade[grade]
        && valuObj.standard[standard].lube[lube].size[size].grade[grade].threading[threading]) {
        result = valuObj.standard[standard].lube[lube].size[size].grade[grade].threading[threading];
    }

    return (
        <div class="top-space">
            {result != null ? <h3>Recommended Bolt Torque: {result}</h3> : <p></p>}
            <p>Notes: This is a reference calculator, do not rely on this alone, as variables may differ from
                manufacturer to manufacturer, real world conditions, etc. <br/> Basic is based on various charts from manufacturers, 
                advanced uses calculations like T = KDF, etc. <br/> Lubricated: K=0.15, Dry: K=0.20 </p>
        </div>
    );

}

export default ResultComp;