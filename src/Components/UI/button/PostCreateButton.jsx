import React from 'react';
import classes from './MyButton.module.css';

const PostCreateButton = ({children, ...props}) => {
    return (
        <button onClick={props.createpost} className={classes.createPostButton}>
            {children}
        </button>
    );
};

export default PostCreateButton;