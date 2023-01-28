import React from 'react';
import classes from './MyButton.module.css';

const PostOpenButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.openPostButton}>
            {children}
        </button>
    );
};

export default PostOpenButton;