import React from "react";
import PostOpenButton from "./UI/button/PostOpenButton";

const PostItem = (props) => {

    // Рендер PostItem
    return(
        <div className="PostItem">
            <div className="PostItm">
                {/*Вивід теми поста*/}
                <h5 className="TileHeader">{props.post.title}</h5>
            </div>
            {/*Вивід кномки для переходу на вибраний пост*/}
            <PostOpenButton onClick={() => props.OpenPost(props.id)}>Open</PostOpenButton>
        </div>
    )

}

export default PostItem;