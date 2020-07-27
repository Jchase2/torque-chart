import React from 'react';
import '../App.css';

const ResultComp = (props) => {

    return (
        <div class="top-space">
            <h1>Result: {props.standard} + {props.grade == null ? "balls" : props.grade.value} + {props.threading} + {props.size}</h1>
        </div>
    );

}

export default ResultComp;