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

  let handleClick = () => {
    setAdvanced(!advanced);
  }
  return (
    <Grid container>
      <div className="center">
        {location.pathname === "/" ? <h1>Torque Calculator Basic </h1> : <h1> Torque Calculator Advanced </h1>}
        <Route exact path="/" component={UserInput} />
        <Route path="/advanced" component={UserInputAdvanced} />
        <p></p>
        {advanced ? <Link to="/"><Button onClick={handleClick} color='teal'>{location.pathname === "/advanced" ? 'Basic' : 'Advanced'}</Button>
        </Link> : <Link to="advanced"><Button onClick={handleClick} color='teal'>{location.pathname === "/" ? 'Advanced' : 'Basic'}</Button>
          </Link>}
      </div>
    </Grid>
  )
}

export default App;