import React from 'react';
import PostHeader from "./PostHeader";
import Chat from "./Chat";
import BoardButton from "./UI/button/BoardButton";



const Post = (props) => {
    return (
        <div className="Post">
            <BoardButton onClick={props.ClosePost}>Board</BoardButton>
            <PostHeader post={props.post}/>
            <Chat/>
        </div>
    );
};

export default Post;