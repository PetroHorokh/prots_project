import React, {useEffect, useRef} from 'react';
import classes from "./MyInput.module.css";

const ChatMassageInput = () => {

    const ref = useRef();

    useEffect(() =>{
       const element = ref.current;

       const handleClick = event => {
           let command = element.dataset['element'];

           document.execCommand(command, false, null);
       }

       element.addEventListener('click', handleClick);

       return () => {
           element.removeEventListener('click', handleClick);
       }

    },[]);

    return (
        <div className={classes.RTEHeader}>
            <div className={classes.RTEHeaderButtonContainer}>
                <button ref={ref} type="button" data-element="bold">
                    1
                </button>
                <button ref={ref} type="button" data-element="italic">
                    1
                </button>
                <button ref={ref} type="button" data-element="underline">
                    1
                </button>
                <button ref={ref} type="button" data-element="insertUnorderedList">
                    1
                </button>
                <button ref={ref} type="button" data-element="insertOrderedList">
                    1
                </button>
                <button ref={ref} type="button" data-element="createLink">
                    1
                </button>
                <button ref={ref} type="button" data-element="justifyLeft">
                    1
                </button>
                <button ref={ref} type="button" data-element="justifyCenter">
                    1
                </button>
                <button ref={ref} type="button" data-element="justifyRight">
                    1
                </button>
                <button ref={ref} type="button" data-element="justifyFull">
                    1
                </button>
            </div>
            <div className={classes.RTEHeaderInput} contentEditable="true"></div>
        </div>
    );
};

export default ChatMassageInput;