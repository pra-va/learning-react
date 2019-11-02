import React, { Component } from 'react';
import './App.css';
import UserInput from './InputOutput/UserInput';
import UserOutput from './InputOutput/UserOutput';

class App extends Component {
  state = {
    first: 'pranius',
    second: 'garbanius',
    third: 'skaldo ir valdo'
  }

  refreshStateHandlerFirst = (event) => {
    this.setState (
      {
        first: event.target.value
      }
    );
  }

  refreshStateHandlerSecond = (event) => {
    this.setState (
      {
        second: event.target.value
      }
    );
  }

  refreshStateHandlerThird = (event) => {
    this.setState (
      {
        third: event.target.value
      }
    );
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.first} />
        <UserInput defaultText={this.state.first} refreshState={this.refreshStateHandlerFirst}/>
        <UserOutput username={this.state.second} />
        <UserInput defaultText={this.state.second} refreshState={this.refreshStateHandlerSecond}/>
        <UserOutput username={this.state.third} />
        <UserInput defaultText={this.state.third} refreshState={this.refreshStateHandlerThird}/>
      </div>
    );
  }
}

export default App;
