import React from 'react';
import classes from "./MyInput.module.css";

const CreatePostInput = (props) => {
    return (
        <input className={classes.CreatePostInput} {...props}/>
    );
};

export default CreatePostInput;