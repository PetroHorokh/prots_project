import React, {useEffect, useRef} from 'react';
import classes from "./MyInput.module.css";

const CreatePostFileInput = (props) => {

    const temp = useRef()

    useEffect(() => {
        if(temp.current){
            console.log(temp.current)
        }
    },[temp])

    return (
        <div>
            <label className={classes.CreatePostFileInputInput} htmlFor="ImageInput">Select Image</label>
            <input onChange={event => {props.setCreatePostImage(event.target.files[0])}}  id="ImageInput" type="file" className={classes.CreatePostFileInputButton} multiple/>
        </div>
    );
};

export default CreatePostFileInput;