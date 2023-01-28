import React from 'react';
import classes from "./MyInput.module.css";

const SearchInput = (props) => {
    return (
        <input className={classes.SearchInput} {...props }/>
    );
};

export default SearchInput;