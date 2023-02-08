import React, {useEffect, useState} from 'react';
import "./Styles/App.css"
import Board from "./Components/Board";
import Post from "./Components/Post";
import axios from "axios";
import moment from 'moment';

function App() {

    //Використання хуків

    //Перемикання між сторінками
    const [pages, setPages] = useState('board')

    //Коротка інформація по постах
    const [posts, setPosts] = useState([])

    const [postIdToOpen, setPostIdToOpen] = useState(0)

    //створення нового поста
    const [createPostTopic, setCreatePostTopic] = useState('')
    const [createPostTitle, setCreatePostTitle] = useState('')
    const [createPostAuthor, setCreatePostAuthor] = useState('1')
    const [createPostDescribtion, setCreatePostDescribtion] = useState('')
    const [createPostImage, setCreatePostImage] = useState('')

    //Функції

    //Відкриття поста
    const OpenPost = (PostToOpen: number) => {
        setPages('post')
        setPostIdToOpen(PostToOpen)
    }

    //Закриття поста
    const ClosePost = () => {
        setPages('board')
    }

    //Хук useEffect
    useEffect(() => {
        axios.get("https://localhost:44348/api/Threads/GetAllThreads").then(elem => setPosts(elem.data))
    }, [posts]);

    //Створення нового поста і передача на бек
    const CreatePost = async () => {
        let formData = new FormData();
        formData.append("Topic", createPostTopic);
        formData.append("Title", createPostTitle);
        formData.append("Date", moment().format());
        formData.append("Author", createPostAuthor);
        formData.append("Message", createPostDescribtion);
        formData.append("File", createPostImage);

        try {
            const res = await axios.post("https://localhost:44348/api/Threads/CreateThread", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
        } catch (ex) {
            console.log(ex);
        }
    };

    //Рендер сторінки за умовами
    switch (pages) {
        case 'board':
            //Рендер Board з передачею відповідних елементів
            return (
                <div className="App">
                    <Board
                        posts={posts}

                        OpenPost={OpenPost}

                        setCreatePostTopic={setCreatePostTopic}

                        setCreatePostAuthor={setCreatePostAuthor}

                        setCreatePostTitle={setCreatePostTitle}

                        setCreatePostDescribtion={setCreatePostDescribtion}

                        setCreatePostImage={setCreatePostImage}

                        CreatePost={CreatePost}
                    />
                </div>
            );
        case 'post':
            //Рендер Post з передачею відповідних елементів
            return (
                <div className="App">
                    <Post ClosePost={ClosePost}  postid={postIdToOpen}></Post>
                </div>
            );
    }

    //Елемент для обов'язкового виводу
    return(<div/>);
}

export default App;
