import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';
import Advanced from './Components/Advanced';
import Basic from './Components/Basic';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {advanced: false};
  }

  handleClick() {
    this.setState({ advanced: !this.state.advanced });
  }
  handleStandardBasic(){
    return null;
  }
  handleGradeBasic(){
    return null;
  }
  handleSizeBasic(){
    return null;
  }

  render() {
    return (
      <div className="App center">
        {this.state.advanced ? <h1> Torque Calculator Advanced </h1> : <h1> Torque Calculator Basic </h1>}
        {this.state.advanced 
        ? <Advanced /> : 
        <Basic 
          onSelectStandard={this.handleStandardBasic} 
          onSelectGrade={this.handleGradeBasic}
          onSelectSize={this.handleSizeBasic}
        />}
        <p></p>
        <Button color='teal'>Calculate</Button>
        <Button onClick={this.handleClick} color='teal'>{this.state.advanced ? 'Basic' : 'Advanced'}</Button>
      </div>
    )
  }
}

export default App;