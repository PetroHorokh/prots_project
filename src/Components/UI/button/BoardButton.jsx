import React from 'react';
import classes from './MyButton.module.css';

const BoardButton = ({children,...props}) => {
    return (
        <button onClick={props.onClick} className={classes.BoardButton}>{children}</button>
    );
};

export default BoardButton;