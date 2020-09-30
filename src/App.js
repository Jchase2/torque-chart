import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid } from 'semantic-ui-react';
import UserInput from './Components/UserInput';
import UserInputAdvanced from './Components/UserInputAdvanced';
import { Link, Route, useLocation } from "react-router-dom";

function App(props) {

  let location = useLocation();
  const returnInitialURL = () => {
    if(location.pathname === "/"){return false} else return true;
  }

  const [advanced, setAdvanced] = useState(returnInitialURL);

  let handleClick = () => { setAdvanced(!advanced)}
  return (
    <Grid centered container padded="vertically">
      <div style={{padding: "250px 0 0 0"}}>
        <h1>Torque Calculator </h1> 
        <Route exact path="/" component={UserInputAdvanced} />
      </div>
    </Grid>
  )
}

export default App;