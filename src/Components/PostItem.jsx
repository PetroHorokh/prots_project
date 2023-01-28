import React from "react";
import PostOpenButton from "./UI/button/PostOpenButton";

const PostItem = (props) => {
    return(
        <div className="PostItem">
            <div className="PostItm">
                <h5 className="TileHeader">{props.post.title}</h5>
            </div>
            <div className="">
                <PostOpenButton>Open</PostOpenButton>
            </div>
        </div>
    )

}

export default PostItem;