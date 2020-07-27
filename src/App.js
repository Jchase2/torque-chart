import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';
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
        <h1> Torque Calculator </h1>
        <Input />
        <p></p>
        <Button onClick={this.handleClick} color='teal'>{this.state.advanced ? 'Basic' : 'Advanced'}</Button>
      </div>
    )
  }
}

export default App;