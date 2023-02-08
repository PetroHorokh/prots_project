import React from 'react';
import classes from "./MyInput.module.css";

const CreatePostFileInput = (props) => {
    return (
        <div>
            <label className={classes.CreatePostFileInputInput} htmlFor="ImageInput">Select Image</label>
            <input {...props}  id="ImageInput" type="file" className={classes.CreatePostFileInputButton} multiple/>
        </div>
    );
};

export default CreatePostFileInput;