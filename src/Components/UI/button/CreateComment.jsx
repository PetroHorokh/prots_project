import React from 'react';
import classes from "./MyButton.module.css";

const CreateComment = (props) => {
    return (
        <button {...props} className={classes.CreateComment}>Create comment</button>
    );
};

export default CreateComment;