import React from 'react';
import PostList from "./PostList";
import BoardHeader from "./BoardHeader";

const Board = (props) => {

    return (
        <div className="Board">
            <BoardHeader createpost={props.createpost} title="Board" buttonText="Create thread"/>
            <div className="BoardList">
            {
                props.posts.map(
                    (post,index) =>
                        <PostList key={index} title={post.topic} posts={post.discussions}/>
                )
            }
            </div>
        </div>
    );
};

export default Board;