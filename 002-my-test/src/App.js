import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      {name: 'Lambo', carPowerHp: 1150},
      {name: 'Ferrari', carPowerHp: 980},
      {name: 'VW Passat', carPowerHp: 150},
    ]
  };

  chip = () => {
    this.setState({
      cars: [
        {name: 'Lambo', carPowerHp: 1150},
        {name: 'Ferrari', carPowerHp: 980},
        {name: 'VW Passat', carPowerHp: 170},
      ]
    });
  }

 

  render() {
    return (
      <div className="App">
       <h1>Hello, World!!!</h1>
       <Car name={this.state.cars[0].name} carPowerHp={this.state.cars[0].carPowerHp}/>
       <Car name={this.state.cars[1].name} carPowerHp={this.state.cars[1].carPowerHp}>Vrum vrum</Car>
       <Car name={this.state.cars[2].name} carPowerHp={this.state.cars[2].carPowerHp}/>
       <button onClick={this.chip}>Chip Tunning</button>
      </div>
    );
  }
}

export default App;
