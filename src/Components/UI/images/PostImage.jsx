import React from 'react';
import classes from "./MyImage.module.css";

const PostImage = (props) => {

    if(props.image !== ''){
        return (
            <img src={props.image} className={classes.PostImage}/>
        );
    }
    else{
        return (
            <div className={classes.PostImageEmpty}>
                <i className="massive user secret icon"/>
            </div>
        );
    }

};

export default PostImage;