import React from 'react';
import '../App.css';

const ResultCompAdv = (props) => {
    let result = null;

    const calcClampForce = () => {
      return null; 
    }
    const calcTorque = () => {
        let K = null;
        let D = null;
        let F = null;
        props.lube === 'Lubricated' ? K = 0.20 : K = 0.15;
        D = parseFloat(props.size);
        return D;
    }
    result = calcTorque;
    return (
        <div class="top-space">
            {result != null ? <h3>Recommended Bolt Torque: {props.size}</h3> : <p></p>}
            <p>Notes: This is a reference calculator, do not rely on this alone, as variables may differ from
                manufacturer to manufacturer, real world conditions, etc.</p> 
                <p>Lubricated: K=0.15, Dry: K=0.20 </p>
        </div>
    );

}

export default ResultCompAdv;