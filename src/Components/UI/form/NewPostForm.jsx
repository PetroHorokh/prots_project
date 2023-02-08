import React from 'react';
import classes from "./MyForm.module.css";
import CreatePostInput from "../input/CreatePostInput";
import CreatePostButton from "../button/CreatePostButton";
import CreatePostTextarea from "../textarea/CreatePostTextarea";
import CreatePostFileInput from "../input/CreatePostFileInput";

const NewPostForm = (props) => {

    if(!props.isCreatePost){
        return (
            <div>
            </div>
        );
    }
    else{
        return (
            <div className={classes.PostCreateForm}>
                <h2>Title</h2>
                <CreatePostInput onChange={e => props.setCreatePostTitle(e.target.value)}/>
                <h2>Topic</h2>
                <CreatePostInput onChange={e => props.setCreatePostTopic(e.target.value)}/>
                <h2>Author</h2>
                <CreatePostInput onChange={e => props.setCreatePostAuthor(e.target.value)}/>
                <h2>Description</h2>
                <CreatePostTextarea onChange={e => props.setCreatePostDescribtion(e.target.value)}/>
                <h2>Image</h2>
                <CreatePostFileInput onChange={event => {props.setCreatePostImage(event.target.files[0])}}/>
                <CreatePostButton onClick={props.CreatePost}>Create new thread</CreatePostButton>
            </div>
        );
    }

};

export default NewPostForm;