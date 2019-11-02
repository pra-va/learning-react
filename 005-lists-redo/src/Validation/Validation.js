import React from 'react';

const validation = (props) => {
    let message = 'Text is to short.'

    if (props.textLength >= 5) {
        message = 'Text is long enougth.';
    } else {
        message = 'Text is to short.';
    }

    return (
        <div>
            {message}
        </div>
    );
}

export default validation;