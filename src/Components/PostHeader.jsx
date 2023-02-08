import React from 'react';
import PostHeaderInfo from "./PostHeaderInfo";
import PostImage from "./UI/images/PostImage";

const PostHeader = (props) => {

    return (
        <div className="PostHeader">
            <div className="ui grid">
                <div className="row">
                    <PostImage image={props.post.filepath}/>
                    <PostHeaderInfo post={props.post} className={"ten wide right floated column PostHeaderInfo"}/>
                </div>

            </div>
        </div>
    );
};

export default PostHeader;