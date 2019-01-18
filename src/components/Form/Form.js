import React from 'react';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import './Form.css';

const Form = () => {
    return (
        <div className="form">
            <div className="container">
                <form>
                    <div className="form-row">
                        <div className="col-3">
                            <Input placeholder="author" />
                        </div>
                        <div className="col-8">
                            <Input placeholder="message" />
                        </div>
                        <div className="col-1">
                            <Button label="Send" type="primary" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;