import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

class MainContainer extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                </div>
                <Form
                />
            </Fragment>
        );
    }
}

export default MainContainer;