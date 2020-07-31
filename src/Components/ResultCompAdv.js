import React from 'react';
import '../App.css';

const ResultCompAdv = (props) => {
    let result = null;

    const threadTensileStress = () => {
        return (Math.PI / 4) * Math.pow((parseFloat(props.size) - (0.938194 * (1 / parseFloat(props.threadsPerInch)))), 2)
    }
    const calcClampForce = () => {
        let proofLoad = null;
        parseFloat(props.size) < .875 ? proofLoad = 55000 : proofLoad = 33000;
        return (.75 * proofLoad * threadTensileStress());  
    }
    const calcTorque = () => {
        let K = null;
        let D = null;
        let F = calcClampForce();
        props.lube === 'Lubricated' ? K = 0.15 : K = 0.20;
        D = parseFloat(props.size);
        return (K * D * F);
    }
    if(props.size && props.threadsPerInch){
        result = calcTorque();
    }
    return (
        <div class="top-space">
            {result != null ? <h3>Recommended Bolt Torque: {isNaN(result) ? "Please enter numerical values" 
            : Math.round(result * 1000) / 1000 + " inch-lbs" + " / " + Math.round((result / 12) * 1000) / 1000 + " foot-lbs"}</h3> : <p></p>}
            <p>Notes: This is a reference calculator, do not rely on this alone, as variables may differ from
                manufacturer to manufacturer, real world conditions, etc.</p>
            <p>Lubricated: K=0.15, Dry: K=0.20 </p>
        </div>
    );

}

export default ResultCompAdv;