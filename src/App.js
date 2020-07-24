import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';
import Advanced from './Components/Advanced';
import Basic from './Components/Basic';
import ResultComp from './Components/ResultComp';
import Input from './Components/Input';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleGradeBasic = this.handleGradeBasic.bind(this);
    this.handleSizeBasic = this.handleSizeBasic.bind(this);
    this.handleStandardBasic = this.handleStandardBasic.bind(this);
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
  handleStandardBasic(passStandard){
    this.setState({standard: passStandard})
  }
  handleGradeBasic(passGrade){
    this.setState({grade: passGrade})
  }
  handleSizeBasic(passSize){
    this.setState({size: passSize})
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
        <ResultComp standard={this.state.standard} size={this.state.size} grade={this.state.grade}/>
      </div>
    )
  }
}

export default App;