import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Messages from "../../components/Messages/Messages";

class MainContainer extends Component {
    state = {
        author: '',
        message: '',
        messages: []
    };

    componentDidMount() {
        fetch('http://146.185.154.90:8000/messages').then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error ('Error');
        }).then(messages => {
            this.setState({messages});
        }).catch(error => {
            console.log(error);
        });
    }

    changeAuthor = event => {
        this.setState({author: event.target.value});
    };

    changeMessage = (event) => {
        this.setState({message: event.target.value});
    };

    sendClick = () => {
		if (this.state.author !== '' && this.state.message !== '') {

			const data = new URLSearchParams();

			data.set('author', this.state.author);
			data.set('message', this.state.message);

			fetch('http://146.185.154.90:8000/messages', {
				method: 'post',
				body: data,
			}).then(this.setState({
                    author: '',
                    message: ''
                })
            ).catch(error => {
                console.log(error);
            });

        } else {
            alert('Please fill all fields!');
        }
    };

    watching = () => {
        setInterval(() => {

        }, 2000);
    };

    componentWillUnmount() {

    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <Messages messages={this.state.messages}/>
                </div>
                <Form
                    author={this.state.author}
                    message={this.state.message}
                    changeAuthor={(event) => this.changeAuthor(event)}
                    changeMessage={(event) => this.changeMessage(event)}
                    sendClick={this.sendClick}
                >
                </Form>
            </Fragment>
        );
    }
}

export default MainContainer;

