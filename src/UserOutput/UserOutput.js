import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Username: {props.userName}</p>
            <p>I hope this is over written.</p>
        </div>
    )
}

export default userOutput;