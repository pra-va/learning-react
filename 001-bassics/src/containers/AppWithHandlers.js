import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Tomas', age: 29 },
      { name: 'Toma', age: 32 }
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other state');

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DO NOT DO THIS this.state.persons[0].name = "Maximilian";
    setPersonsState({ persons: [
      { name: 'Maximilian', age: 28 },
      { name: 'Tomas', age: 29 },
      { name: 'Toma', age: 16 }
      ],
      otherState: personsState.otherState
    })
  };
  
  return (
   <div className="App">
     <h1>Hi, I am react app.</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobies: racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  
}

export default app;


