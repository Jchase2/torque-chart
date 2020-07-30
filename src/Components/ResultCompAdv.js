import React from 'react';
import '../App.css';

const ResultCompAdv = (props) => {
    let size = props.size;
    let grade = props.grade;
    let standard = props.standard;
    let threading = props.threading;
    let lube = props.lube;
    let result = null;

    

    return (
        <div class="top-space">
            {result != null ? <h3>Recommended Bolt Torque: {result}</h3> : <p></p>}
            <p>Notes: This is a reference calculator, do not rely on this alone, as variables may differ from
                manufacturer to manufacturer, real world conditions, etc.</p> 
                <p>Lubricated: K=0.15, Dry: K=0.20 </p>
        </div>
    );

}

export default ResultCompAdv;