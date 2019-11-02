import React from 'react';

const char = (props) => {
    let letterStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={letterStyle} onClick={props.clicked}>
            <p>{props.theLetter}</p>
        </div>
    );
}

export default char