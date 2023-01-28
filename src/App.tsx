import React, {useRef, useState} from 'react';
import "./Styles/App.css"
import Board from "./Components/Board";

function App() {

    const [posts, setPosts] = useState([
        {
            topic: "Countries",
            discussions:[
                {
                    id: 1,
                    title: 'Germany',
                },
                {
                    id: 2,
                    title: 'Sweden',
                },
                {
                    id: 3,
                    title: 'Ukraine',
                },

            ]
        },
        {
            topic: "Anime",
            discussions:[
                {
                    id: 1,
                    title: 'Faith',
                },
                {
                    id: 2,
                    title: 'DXD',
                },
                {
                    id: 3,
                    title: 'Naruto',
                },
                {
                    id: 4,
                    title: 'Boruto',
                },
                {
                    id: 5,
                    title: 'Goblin Slayer',
                },
                {
                    id: 6,
                    title: 'Guilty Crown',
                },

            ]
        },
        ]

    );

    const newTopic = useRef();
    const newDiscussion = useRef();

    const AddNewPost = () => {

        let flag = false

        const newPost = {
            topic: 'Anime',
            discussions:
                [
                    {
                    id:10,
                    title: "OnePiece"
                }
                ]
        }

        for (let i = 0; i < posts.length; i++) {

            if (posts[i].topic === newPost.topic) {
                posts[i].discussions = [...posts[i].discussions, newPost.discussions[0]]
                flag = true
            }
        }
        if(!flag){
            setPosts([...posts, newPost])
        }

        //console.log(posts)
    }

    return (
        <div className="App">
        <Board createpost={AddNewPost} posts={posts}/>
        </div>
    );
}

export default App;
