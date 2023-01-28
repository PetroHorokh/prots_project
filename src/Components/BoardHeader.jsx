import React from 'react';
import PostCreateButton from "./UI/button/PostCreateButton";
import SearchInput from "./UI/input/SearchInput";
import SearchButton from "./UI/button/SearchButton";

const BoardHeader = (props) => {
    return (
        <div className="BoardHeader">
            <h1>{props.title}</h1>

            <div>
                <SearchInput placeholder="Search..."/>
                <SearchButton><i className="search icon"></i></SearchButton>
            </div>

            <PostCreateButton createpost={props.createpost}>{props.buttonText}</PostCreateButton>
        </div>
    );
};

export default BoardHeader;