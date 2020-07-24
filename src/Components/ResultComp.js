import React, { useState, useEffect } from 'react';
import '../App.css';

const ResultComp = ({ standard, size, grade }) => {

    const [newStandard, setStandard] = useState(standard);

    return (
        <div class="top-space">
            <h1>Result: {newStandard == null ? "null" : "not null"}</h1>
        </div>
    );

}

export default ResultComp;