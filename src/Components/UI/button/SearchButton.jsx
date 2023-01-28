import React from 'react';
import classes from './MyButton.module.css';

const SearchButton = ({children, ...props}) => {
    return (
        <button className={classes.searchButton}>
            {children}

        </button>
    );
};

export default SearchButton;