import React from 'react';

import './Input.css';

const Input = props => {
    return (
        <input type="text"
               className="form-control"
               placeholder={props.placeholder}
        />
    );
};

export default Input;
