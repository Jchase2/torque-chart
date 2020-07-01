import React from 'react';
import BoltThread from '../Components/BoltThread';
import BoltSize from '../Components/BoltSize';
import BoltLube from '../Components/BoltLube';
import GradeStandard from '../Components/GradeStandard';

const Advanced = () => (
    <>
        <GradeStandard />
        <BoltThread />
        <BoltSize />
        <BoltLube />
    </>
)

export default Advanced;