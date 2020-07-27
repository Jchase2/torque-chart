import React from 'react';
import '../App.css';

const ResultComp = (props) => {

    let result = '';
    if (props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '1/4'){
        result = '4 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '1/4'){
        result = '4.7 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '1/4' ){
        result = '6.3 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '1/4' ){
        result = '7.3 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '1/4' ){
        result = '9 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '1/4' ){
        result = '10 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '5/16' ){
        result = '8 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '5/16' ){
        result = '9 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '5/16' ){
        result = '13 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '5/16' ){
        result = '14 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '5/16' ){
        result = '18 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '5/16' ){
        result = '20 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '3/8' ){
        result = '15 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '3/8' ){
        result = '17 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '3/8' ){
        result = '23 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '3/8' ){
        result = '26 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '3/8' ){
        result = '33 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '3/8' ){
        result = '37 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '7/16' ){
        result = '24 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '7/16' ){
        result = '27 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '7/16' ){
        result = '37 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '7/16' ){
        result = '41 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '7/16' ){
        result = '52 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '7/16' ){
        result = '58 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '1/2' ){
        result = '37 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '1/2' ){
        result = '41 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '1/2' ){
        result = '57 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '1/2' ){
        result = '64 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '1/2' ){
        result = '80 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '1/2' ){
        result = '90 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '9/16' ){
        result = '53 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '9/16' ){
        result = '59 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '9/16' ){
        result = '82 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '9/16' ){
        result = '91 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '9/16' ){
        result = '115 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '9/16' ){
        result = '129 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '5/8' ){
        result = '73 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '5/8' ){
        result = '83 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '5/8' ){
        result = '112 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '5/8' ){
        result = '128 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '5/8' ){
        result = '159 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '5/8' ){
        result = '180 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '3/4' ){
        result = '125 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '3/4' ){
        result = '138 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '3/4' ){
        result = '200 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '3/4' ){
        result = '223 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '3/4' ){
        result = '282 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '3/4' ){
        result = '315 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNC' && props.size === '7/8' ){
        result = '129 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 2' && props.threading === 'UNF' && props.size === '7/8' ){
        result = '144 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNC' && props.size === '7/8' ){
        result = '322 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 5' && props.threading === 'UNF' && props.size === '7/8' ){
        result = '355 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNC' && props.size === '7/8' ){
        result = '454 lb/ft'
    }
    else if(props.standard === 'SAE' && props.grade != null && props.grade.value === 'Grade 8' && props.threading === 'UNF' && props.size === '7/8' ){
        result = '501 lb/ft'
    }
    else {
        result = null;
    }

    return (
        <div class="top-space">
            {result != null ? <h2>Recommended Bolt Torque: {result}</h2> : <p></p>}
        </div>
    );

}

export default ResultComp;