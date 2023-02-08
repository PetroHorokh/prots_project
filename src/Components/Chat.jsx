import React, {useEffect, useState} from 'react';
import ChatMassageInput from "./UI/input/ChatMassageInput";
import ChatElement from "./ChatElement";
import axios from "axios";

const Chat = (props) => {

    const [Massages,setMassages] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:44348/api/Posts/" + props.id).then(elem => setMassages(elem.data))
    }, [Massages]);

    return (
        <div className="Chat">
            <ChatMassageInput id={props.id}></ChatMassageInput>

            {
                Massages.map(
                    (elem, index) =>
                        <ChatElement key={index} massage={elem}/>
                )
            }

        </div>
    );
};

export default Chat;