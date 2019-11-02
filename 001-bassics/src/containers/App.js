import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // this.state = 
  }

  state = {
    persons: [
      { id: 'fdsgdsg554', name: "Pranas", age: 29},
      { id: 'ghgf51', name: "Tomas", age: 32},
      { id: 'kliuy22', name: "Gediminas", age: 30}
    ],
    otherState: 'Some Other State.',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  componentDidMount() {
    console.log('[App.js] compoonent did mount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState(
      {
        persons: persons
      }
    )
  } 
  

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render () {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );

    }

    return (
        <div className={classes.App}>
          <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
           showPersons={this.state.showPersons} 
           persons={this.state.persons} 
           clicked={this.togglePersonsHandler} 
           /> : null }
          {persons}
        </div>
    );
  };
  
  
}

export default App;


