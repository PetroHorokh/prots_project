import React from 'react';
import PostCreateButtonMock from "./UI/button/PostCreateButtonMock";
import SearchInput from "./UI/input/SearchInput";

const BoardHeader = ({...props}) => {
    return (
        <div className="BoardHeader">
            <h1>Board</h1>
            <SearchInput value={props.searchValue} onChange={e => props.setSearchValue(e.target.value)} placeholder="Search..."/>
            <PostCreateButtonMock isCreatePost={props.isCreatePost} onClick={e=>props.setIsCreatePost(!props.isCreatePost)}>Create thread</PostCreateButtonMock>
        </div>
    );
};

export default BoardHeader;