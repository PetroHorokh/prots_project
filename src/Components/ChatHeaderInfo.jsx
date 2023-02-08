import React from 'react';

const ChatHeaderInfo = (props) => {
    return (
        <div className={props.className} >
            <h4>Massage id</h4>
            <h5>{props.post.id}</h5>
            <h4>Date of creation</h4>
            <h5>{props.post.date}</h5>
            <h4>Description</h4>
            <h5>{props.post.text}</h5>
        </div>
    );
};

export default ChatHeaderInfo;