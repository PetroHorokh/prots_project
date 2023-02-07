import React from 'react';
import classes from "./MyButton.module.css";

const CreatePostButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.createPostButton}>
            {children}
        </button>
    );
};

export default CreatePostButton;