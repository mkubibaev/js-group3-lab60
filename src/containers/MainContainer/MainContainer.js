import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Messages from "../../components/Messages/Messages";

class MainContainer extends Component {
    state = {
        messages: [],
    };


    componentDidMount() {

        fetch('http://146.185.154.90:8000/messages').then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error ('Error');
        }).then(messages => {
            console.log(messages);

            this.setState({messages});

        }).catch(error => {
            console.log(error);
        });

    }

    render() {
        return (
            <Fragment>
                <Header/>

                <div className="container">
                    <Messages messages={this.state.messages}/>
                </div>

                <Form />
            </Fragment>
        );
    }
}

export default MainContainer;