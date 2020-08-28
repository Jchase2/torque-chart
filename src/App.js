import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid } from 'semantic-ui-react';
import UserInput from './Components/UserInput';
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { advanced: false };
  }

  handleClick() {
    this.setState({ advanced: !this.state.advanced });
  }
  render() {
    return (
      <Grid container>
        <div className="center">
          <h1> Torque Calculator </h1>
          <UserInput advanced={this.state.advanced} />
          <p></p>
          {this.state.advanced ? <Link to="/"><Button onClick={this.handleClick} color='teal'>{this.state.advanced ? 'Basic' : 'Advanced'}</Button>
          </Link> : <Link to="advanced"><Button onClick={this.handleClick} color='teal'>{this.state.advanced ? 'Basic' : 'Advanced'}</Button>
            </Link>}
        </div>
      </Grid>
    )
  }
}

export default App;