import React from 'react';
import PostItem from "./PostItem";

const PostList = (props) => {
    // Рендер PostList
    return (
        <div className="PostList">

            {/*Вивід теми для постів*/}
            <h3>{props.title}</h3>
            {/*Рендер полів для переходу на пости*/}
            <div className="PostScroller">
                {
                    props.posts.sort(function (a,b){return new Date(b.date) - new Date(a.date)}).map(post => <PostItem key={post.id} id={post.id} post={post} OpenPost={props.OpenPost}/>)
                }
            </div>

        </div>
    );
};

export default PostList;

