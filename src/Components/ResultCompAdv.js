import React from 'react';
import '../App.css';

const ResultCompAdv = (props) => {
    let result = null;

    const threadTensileStress = () => {
        return (Math.PI / 4) * Math.pow((parseFloat(props.size) - (0.938194 * (1 / parseFloat(props.threadsPerInch)))), 2)
    }
    const calcClampForce = () => {
        let proofLoad = null;
        if (props.grade === 'Grade 2') {
            parseFloat(props.size) < .875 ? proofLoad = 55000 : proofLoad = 33000;
        }
        else if (props.grade === 'Grade 5') {
            parseFloat(props.size) < 1.5 ? proofLoad = 85000 : proofLoad = 74000;
        }
        else {
            proofLoad = 120000;
        }
        return (.75 * proofLoad * threadTensileStress());
    }
    const calcTorque = () => {
        let K = null;
        let D = null;
        let F = calcClampForce();
        props.lube === 'Lubricated' ? K = 0.15 : props.lube === 'Dry' ?  K = 0.20 : K = props.customLube;
        D = parseFloat(props.size);
        return (K * D * F);
    }
    if (props.size && props.threadsPerInch) {
        result = calcTorque();
    }
    return (
        <div class="top-space">
            {result != null ? <h3>Recommended Bolt Torque: {isNaN(result) ? "Please enter numerical values"
                : Math.round(result * 1000) / 1000 + " inch-lbs" + " / " + Math.round((result / 12) * 1000) / 1000 + " foot-lbs"}</h3> : <p></p>}
            <p>Notes: This is a reference calculator, do not rely on this alone, as variables may differ from
                manufacturer to manufacturer, real world conditions, etc. <br /> Basic is based on various charts from manufacturers,
                advanced uses calculations like T = KDF, etc. It also allows more user input. <br /> Lubricated: K=0.15, Dry: K=0.20 </p>
        </div>
    );

}

export default ResultCompAdv;