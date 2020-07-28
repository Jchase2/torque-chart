import React from 'react';
import '../App.css';
import valuesObj from '../Static/valuesObj';

const ResultComp = (props) => {

    let size = props.size;
    let result = valuesObj.size;
    return (
        <div class="top-space">
            {result != null ? <h2>Recommended Bolt Torque: {JSON.stringify(result)}</h2> : <p></p>}
            {JSON.stringify(valuesObj[size])}
        </div>
    );

}

export default ResultComp;