import React from 'react';
import './Form.css';
import Button from "../UI/Button/Button";

const Form = () => {
    return (
        <div className="form">
            <div className="container">
                <form>
                    <div className="form-row">
                        <div className="col-3">
                            <input type="text"
                                   className="form-control"
                                   placeholder="author"
                            />
                        </div>
                        <div className="col-8">
                            <input type="text"
                                   className="form-control"
                                   placeholder="message"
                            />
                        </div>
                        <Button/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;