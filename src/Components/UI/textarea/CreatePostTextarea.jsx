import React from 'react';
import classes from "./MyTextarea.module.css";

const CreatePostTextarea = (props) => {
    return (
        <textarea className={classes.CreatePostTextarea} {...props}/>
    );
};

export default CreatePostTextarea;