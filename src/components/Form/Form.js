import React from 'react';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import './Form.css';

const Form = props => {
    return (
        <div className="form">
            <div className="container">
                <div className="form-row">
                    <div className="col-3">
                        <Input placeholder="author"
                               value={props.author}
                               onChange={props.changeAuthor}
                        />
                    </div>
                    <div className="col-8">
                        <Input placeholder="message"
                               value={props.message}
                               onChange={props.changeMessage}
                        />
                    </div>
                    <div className="col-1">
                        <Button onSendClick={props.sendClick} label="Send" type="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;