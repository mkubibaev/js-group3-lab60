import React from 'react';
import './Button.css';

const Button = props => {
    return (
        <div className="col-1">
            <button className="btn btn-primary">
                Send
            </button>
        </div>
    );
};

export default Button;