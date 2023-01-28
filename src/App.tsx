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
        ]);


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

        const tempPosts = [...posts]
        for (let i = 0; i < tempPosts.length; i++) {
            if (tempPosts[i].topic === newPost.topic) {
                 tempPosts[i].discussions = [...tempPosts[i].discussions, newPost.discussions[0]]
                 flag = true
            }
        }
        if(!flag){
            setPosts([...posts, newPost])
        }

        setPosts(tempPosts)

        console.log(posts)
    }

    return (
        <div className="App">
        <Board createpost={AddNewPost} posts={posts}/>
        </div>
    );
}

export default App;
