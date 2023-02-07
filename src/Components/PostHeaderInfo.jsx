import React from 'react';

const PostHeaderInfo = (props) => {
    return (
        <div className={props.className} >
            <h3>Title</h3>
            <h4>{props.post.title}</h4>
            <h4>Date of creation</h4>
            <h5>{props.post.date}</h5>
            <h4>Author</h4>
            <h5>{props.post.author}</h5>
            <h4>Description</h4>
            <h5>{props.post.message}</h5>
        </div>
    );
};

export default PostHeaderInfo;