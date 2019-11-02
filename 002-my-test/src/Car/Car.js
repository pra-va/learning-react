import React from 'react';

const car = (props) => {
    return (
        <div>
            <p>{props.carName} has {props.carPowerHp} horsepower.</p>
            <p>{props.children}</p>
        </div>
    );
};

export default car;