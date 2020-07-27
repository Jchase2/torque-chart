import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';
import Advanced from './Components/Advanced';
import Input from './Components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      advanced: false,
      standard: null,
      grade: null,
      size: null,
    };
  }

  handleClick() {
    this.setState({ advanced: !this.state.advanced });
  }
  render() {
    return (
      <div className="App center">
        {this.state.advanced ? <h1> Torque Calculator Advanced </h1> : <h1> Torque Calculator Basic </h1>}
        {this.state.advanced 
        ? <Advanced /> : 
        <Input />}
        <p></p>
        <Button onClick={this.handleClick} color='teal'>{this.state.advanced ? 'Basic' : 'Advanced'}</Button>
      </div>
    )
  }
}

export default App;