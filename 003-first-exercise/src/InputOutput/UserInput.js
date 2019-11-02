import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className='UserInput'>
            <input className='input' onChange={props.refreshState} value={props.defaultText} type='text' />
        </div>
    );
};

export default userInput;