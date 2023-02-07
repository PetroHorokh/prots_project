import React, {useEffect, useState} from 'react';
import "./Styles/App.css"
import Board from "./Components/Board";
import Post from "./Components/Post";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

function App() {

    //Використання хуків

    //повний пост
    const [fullPosts, setFullPosts] = useState([
        {
            id:'1',
            title:'Naruto',
            date:'2015-03-25T12:00:00Z',
            author:"you",
            message:'This is post about Naruto',
            image:"http://127.0.0.1:8887/Naruto.jpg"
        },
        {
            id:'2',
            title:'Canada',
            date:'2015-03-25T12:00:00Z',
            author:"me",
            message:'This is post about Canada',
            image:""
        },
        {
            id:'3',
            title:'DXD',
            date:'2015-03-25T12:00:00Z',
            author:"me",
            message:'This is post about DXD',
            image:"http://127.0.0.1:8887/temp.webp"
        }
    ])

    //Перемикання між сторінками
    const [pages, setPages] = useState('board')

    //id поста, який відкривається для перегляду
    const [pageOpenId, setPageOpenId] = useState('')

    //Коротка інформація по постах
    const [posts, setPosts] = useState([
        {
            id:'1',
            topic:'Anime',
            title:'Naruto'
        },
        {
            id:'2',
            topic:'Countries',
            title:'Canada'
        },
        {
            id:'3',
            topic:'Anime',
            title:'DXD'
        }

        ])

    //створення нового поста
    const [createPostTopic, setCreatePostTopic] = useState('')
    const [createPostTitle, setCreatePostTitle] = useState('')
    const [createPostAuthor, setCreatePostAuthor] = useState('1')
    const [createPostDescribtion, setCreatePostDescribtion] = useState('')
    const [createPostImage, setCreatePostImage] = useState('')

    //Посилання на файл
    const [fileDataURL, setFileDataURL] = useState('');

    //Функції

    //Відкриття поста
    const OpenPost = (PostToOpen: string) => {

        setPages('post')
        setPageOpenId(PostToOpen)
    }

    //Закриття поста
    const ClosePost = () => {
        setPages('board')
        setPageOpenId('')
    }

    //Хук useEffect
    useEffect(() => {
        let fileReader:any, isCancel = false;
        if (createPostImage) {
            fileReader = new FileReader();
            fileReader.onload = (e:any) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(createPostImage);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [createPostImage]);

    //Створення нового поста і передача на бек
    const CreatePost = async () => {
        let formData = new FormData();
        formData.append("Topic", createPostTopic);
        formData.append("Title", createPostTitle);
        formData.append("Date", Date.now().toString());
        formData.append("Author", createPostAuthor);
        formData.append("Message", createPostDescribtion);
        formData.append("File", createPostImage);

        try {
            const res = await axios.post("", formData, {
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
                    <Post ClosePost={ClosePost}  post={fullPosts.filter(elem=>elem.id===pageOpenId)[0]}></Post>
                </div>
            );
    }

    //Елемент для обов'язкового виводу
    return(<div/>);
}

export default App;
