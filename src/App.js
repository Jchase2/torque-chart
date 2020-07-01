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

  render() {
    return (
      <div className="App center">
        {this.state.advanced ? <h1> Torque Calculator Advanced </h1> : <><h1> Torque Calculator Basic </h1> 
        <p>If you know the torque coefficient of your bolts, or nuts, select "Advanced" for more accuracy.</p> </>}
        <p><Button onClick={this.handleClick} primary>{this.state.advanced ? 'Basic' : 'Advanced'}</Button></p>
        {this.state.advanced ? <Advanced /> : <Basic />}
      </div>
    )
  }
}

export default App;