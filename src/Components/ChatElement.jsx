import React from 'react';
import ChatImage from "./UI/images/ChatImage";
import PostImage from "./UI/images/PostImage";
import PostHeaderInfo from "./PostHeaderInfo";
import ChatHeaderInfo from "./ChatHeaderInfo";

const ChatElement = (props) => {
    return (
        <div className="ui grid ChatElements">
            <div className="row">
                <ChatImage image={props.massage.filepath}/>
                <ChatHeaderInfo post={props.massage} className={"ten wide right floated column ChatHeaderInfo"}/>
            </div>
        </div>
    );
};

export default ChatElement;