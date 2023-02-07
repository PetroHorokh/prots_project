import React, {useState} from 'react';
import PostList from "./PostList";
import BoardHeader from "./BoardHeader";
import NewPostForm from "./UI/form/NewPostForm";

const Board = (props) => {

    //Хуки

    //Стрічка для пошуку
    const [searchValue, setSearchValue] = useState('');

    //Перемикач на відкриття форми по створенню нового поста
    const [isCreatePost, setIsCreatePost] = useState(false);

    //Рендер Board з відповідних елементів
    return (
        <div className="Board">
            {/*Рендер BoardHeader з передачею елементів*/}
                <BoardHeader
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    createPost={props.createPost}

                    isCreatePost={isCreatePost}
                    setIsCreatePost={setIsCreatePost}
                />
            {/*Рендер NewPostForm з передачею елементів*/}
                <NewPostForm
                    isCreatePost={isCreatePost}

                    setCreatePostTopic={props.setCreatePostTopic}

                    setCreatePostAuthor={props.setCreatePostAuthor}

                    setCreatePostTitle={props.setCreatePostTitle}

                    setCreatePostDescribtion={props.setCreatePostDescribtion}

                    setCreatePostImage={props.setCreatePostImage}

                    CreatePost={props.CreatePost}
                />

            {/*Рендер вкладок для виводу постів посортованих по темах з передачею елементів*/}
                <div className="BoardList">
                    {
                        //Функція для сортування постів за стрікою пошуку та їхній рендер
                        Object.entries(props
                                .posts
                                .reduce((group, result) => {
                                    if(result.title.includes(searchValue)||result.topic.includes(searchValue)){
                                        const {topic} = result;
                                        group[topic] = group[topic] ?? [];
                                        group[topic].push(result);
                                    }
                                    return group;
                                    }, {}))
                            .map(
                            (post,index) =>
                            // Рендер PostList з передачею відповідних постів
                                <PostList
                                    OpenPost={props.OpenPost}
                                    key={index}
                                    title={post[0]}
                                    posts={post[1]}/>
                        )
                    }
                </div>
            </div>
    );
};

export default Board;