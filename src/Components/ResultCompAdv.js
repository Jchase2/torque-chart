import React, { useContext } from 'react';
import threadPitchValues from '../Static/threadPitchValues';
import metricProofLoad from '../Static/metricProofLoad';
import tpiValues from '../Static/tpiValues';
import {
    standardContext, gradeContext, sizeContext, threadingContext
} from './Store';
import '../App.css';

const ResultCompAdv = (props) => {
    let result = null;
    // Context API / hooks store and variables. 
    const [standard] = useContext(standardContext);
    const [size] = useContext(sizeContext);
    const [grade] = useContext(gradeContext);
    const [threading] = useContext(threadingContext);

    const newtonToLbs = (nval) => {
        return nval * 0.2248;
    }
    const mmToIn = (mmValue) => {
        return mmValue * 0.0393701;
    }

    // This is correct and working. 
    const threadTensileStress = () => {
        let retValue = null;
        if (standard === 'SAE') {
            if (threading && threading != 'custom') {
                retValue = (Math.PI / 4) * Math.pow((parseFloat(props.size) - (0.938194 * (1 / parseFloat(tpiValues[threading][size])))), 2)
            }
            else {
                retValue = (Math.PI / 4) * Math.pow((parseFloat(props.size) - (0.938194 * (1 / parseFloat(props.threadsPerInch)))), 2)
            }
        }
        // This doesn't even do anything lol. 
        /*if (standard === 'ISO' && threading) {
            console.log("Thread Tensile Stress: " + ((Math.PI / 4) * Math.pow((size - (0.9382 * threadPitchValues[threading][size])), 2)))
            retValue = ((Math.PI / 4) * Math.pow((size - (0.9382 * threadPitchValues[threading][size])), 2))
        }
        */
        return retValue;
    }

    const calcClampForce = () => {
        let proofLoad = null;
        if (standard === 'SAE') {
            if (grade === 'grade2') {
                parseFloat(props.size) < .875 ? proofLoad = 55000 : proofLoad = 33000;
            }
            else if (grade === 'grade5') {
                parseFloat(props.size) < 1.5 ? proofLoad = 85000 : proofLoad = 74000;
            }
            else if (grade === 'grade7') {
                proofLoad = 105000;
            }
            else {
                proofLoad = 120000;
            }
        }
        else {
            // Regex to remove 'grade' before grade value.  
            let grade_num = props.grade.replace('grade', '');
            if(metricProofLoad && metricProofLoad[threading]){
                proofLoad = newtonToLbs(metricProofLoad[threading].class[grade_num].diameter[size])
            }
        }
        if (props.standard === "SAE") { return (.75 * proofLoad * threadTensileStress()); }
        else return .75 * proofLoad;
    }
    const calcTorque = () => {
        let K = null;
        let D = null;
        let F = calcClampForce();
        props.lube === 'Lubricated' ? K = 0.15 : props.lube === 'Dry' ? K = 0.20 : K = props.customLube;
        D = parseFloat(props.size);
        if (props.standard === "SAE") { return (K * D * F) } else return mmToIn(K * D * F);
    }
    if (props.size) {
        result = calcTorque();
    }
    return (
        <div class="top-space">
            {result != null ? <h3>Recommended Bolt Torque: {isNaN(result) ? "Input incorrect/incomplete or our dataset is too small, try custom values."
                : Math.round(result * 1000) / 1000 + " inch-lbs" + " / " + Math.round((result / 12) * 1000) / 1000 + " foot-lbs"}</h3> : <p></p>}
            <p>Notes: This is a reference calculator, do not rely on this alone, as variables may differ from
                manufacturer to manufacturer, real world conditions, etc. <br /> Basic is based on various charts from manufacturers,
                advanced uses calculations like T = KDF, etc. It also allows more user input. <br /> Lubricated: K=0.15, Dry: K=0.20 </p>
        </div>
    );

}

export default ResultCompAdv;