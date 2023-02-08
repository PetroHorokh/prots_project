import React, {useEffect, useRef, useState} from 'react';
import classes from "./MyInput.module.css";
import CreateComment from "../button/CreateComment";
import CreatePostFileInput from "./CreatePostFileInput";
import moment from "moment/moment";
import axios from "axios";

const ChatMassageInput = (props) => {

    const textLine = useRef('');
    const [commentImage, setCommentImage] = useState();
    const ref = useRef([]);

    useEffect(() =>{

        if(ref){
            ref.current.forEach(elem => {
                const handleClick = () => {
                    let command = elem.dataset['element'];
                    document.execCommand(command, false, null);
                }

                elem.addEventListener('click', handleClick);

                return () => {
                    elem.removeEventListener('click', handleClick);
                }
            })
        }
    },[textLine]);

    const CreateCommentFunction = async () =>{

        let formData = new FormData();

        formData.append("Date", moment().format());
        formData.append("Text", textLine.current.textContent);
        formData.append("ThreadId", props.id);
        formData.append("File", commentImage);

        try {
            const res = await axios.post("https://localhost:44348/api/Posts", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    return (
        <div className={classes.RTEHeader}>
            <div className={classes.RTEHeaderButtonContainer}>
                <button ref={elem=>{ref.current[0] = elem}} type="button" data-element="bold">
                    <i className="fa fa-bold"/>
                </button>
                <button ref={elem=>{ref.current[1] = elem}} type="button" data-element="italic">
                    <i className="fa fa-italic"/>
                </button>
                <button ref={elem=>{ref.current[2] = elem}} type="button" data-element="underline">
                    <i className="fa fa-underline"/>
                </button>
                <button ref={elem=>{ref.current[3] = elem}} type="button" data-element="insertUnorderedList">
                    <i className="fa fa-list-ul"/>
                </button>
                <button ref={elem=>{ref.current[4] = elem}} type="button" data-element="insertOrderedList">
                    <i className="fa fa-list-ol"/>
                </button>
                <button ref={elem=>{ref.current[5] = elem}} type="button" data-element="createLink">
                    <i className="fa fa-link"/>
                </button>
                <button ref={elem=>{ref.current[6] = elem}} type="button" data-element="justifyLeft">
                    <i className="fa fa-align-left"/>
                </button>
                <button ref={elem=>{ref.current[7] = elem}} type="button" data-element="justifyCenter">
                    <i className="fa fa-align-center"/>
                </button>
                <button ref={elem=>{ref.current[8] = elem}} type="button" data-element="justifyRight">
                    <i className="fa fa-align-right"/>
                </button>
                <button ref={elem=>{ref.current[9] = elem}} type="button" data-element="justifyFull">
                    <i className="fa fa-align-justify"/>
                </button>
                <CreatePostFileInput onChange={event => {setCommentImage(event.target.files[0])}}></CreatePostFileInput>
            </div>
            <div ref={textLine} className={classes.RTEHeaderInput} contentEditable="true"/>
            <CreateComment onClick={CreateCommentFunction} ></CreateComment>
        </div>
    );
};

export default ChatMassageInput;