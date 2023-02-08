import React from 'react';
import classes from "./MyImage.module.css";

const ChatImage = (props) => {

    if(props.image !== ''){
        return (
            <img src={props.image} className={classes.ChatImage}/>
        );
    }
    else{
        return (
            <div className={classes.ChatImageEmpty}>
                <i className="huge user secret icon"/>
            </div>
        );
    }

};

export default ChatImage;