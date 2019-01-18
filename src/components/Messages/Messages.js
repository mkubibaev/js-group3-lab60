import React from 'react';
import Message from "./Message/Message";

import './Messages.css';

const Messages = props => {
    return (
        <div className="messages">
            {props.messages.map(message => (
                <Message
                    key={message._id}
                    author={message.author}
                    message={message.message}
                    datetime={message.datetime}
                />
            ))}
        </div>
    );
};

export default Messages;