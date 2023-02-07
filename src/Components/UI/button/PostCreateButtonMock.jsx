import React from 'react';
import classes from './MyButton.module.css';

const PostCreateButtonMock = ({children, ...props}) => {

    if(props.isCreatePost){
        return (
            <button {...props} className={classes.createPostButtonMockInactive}>
                {children}
            </button>
        );
    }
    else{
        return (
            <button {...props} className={classes.createPostButtonMockActive}>
                {children}
            </button>
        );
    }
};

export default PostCreateButtonMock;