import React, {useEffect, useState} from 'react';
import PostHeader from "./PostHeader";
import Chat from "./Chat";
import BoardButton from "./UI/button/BoardButton";
import axios from "axios";

const Post = (props) => {

    const [fullPost, setFullPost] = useState({})

    useEffect(()=>{
        try {
                axios.get("https://localhost:44348/api/Threads/GetThread/" + props.postid).then(elem => setFullPost(elem.data[0]))
        }
        catch (ex){
            console.log(ex)
        }
    },[props.postid])

    return (
        <div className="Post">
            <BoardButton onClick={props.ClosePost}>Board</BoardButton>
            <PostHeader post={fullPost}/>
            <Chat id={props.postid}/>
        </div>
    );
};

export default Post;