import React, {useEffect, useState} from 'react';
import PostList from "./PostList";
import BoardHeader from "./BoardHeader";

const Board = (props) => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        console.log(props.posts)
        setTest(props.posts)
    },[props.posts]);

    return (
        <div className="Board">
            <BoardHeader createpost={props.createpost} title="Board" buttonText="Create thread"/>
            <div className="BoardList">
            {
                test.map(
                    (post,index) =>
                        <PostList key={index} title={post.topic} posts={post.discussions}/>
                )
            }
            </div>
        </div>
    );
};

export default Board;