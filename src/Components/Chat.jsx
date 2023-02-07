import React, {useState} from 'react';
import ChatMassageInput from "./UI/input/ChatMassageInput";
import ChatElement from "./ChatElement";

const Chat = () => {

    const [Massages,setMassages] = useState([
        {
            id: 1,
            text: 'First massage',
            date: '2015-03-25T12:02:00Z',
        },
        {
            id: 2,
            text: 'Second massage',
            date: '2015-03-25T12:03:00Z',
        },
        {
            id: 3,
            text: 'Third massage',
            date: '2015-03-25T12:04:00Z',
        }
        ]);

    return (
        <div className="Chat">
            <ChatMassageInput></ChatMassageInput>

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