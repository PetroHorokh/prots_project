import React from 'react';
import PostItem from "./PostItem";

const PostList = (props) => {
    return (
        <div className="PostList">
            <h3>{props.title}</h3>
            <div className="PostScroller">
                {
                    props.posts.map((post, index) => <PostItem key={index} post={post}/>)
                }
            </div>

        </div>
    );
};

export default PostList;

