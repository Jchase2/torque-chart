import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import BoltSize from './Components/BoltSize';
import GradeStandard from './Components/GradeStandard';
import BoltGrades from './Components/BoltGrades';

function App() {
  return (
    <div className="App center">
      <h1> Torque Calculator </h1>
      <GradeStandard />
      <BoltSize />
      
    </div>
  )
}

export default App;