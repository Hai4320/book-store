import React,{useState} from 'react'
import './ChatBox.scss'
import {BsChatDots} from 'react-icons/bs'

const ChatBox = () => {
    const [hover,setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }
    return (
        <div className='ChatBoxContainer'>
             <div className='ChatBoxInfor' style={{display: hover ? 'flex' : 'none'}}> 
                Click to chat with Admin !
            </div>
            <div className='ChatBoxBtn' onMouseEnter={onHover} onMouseLeave={onHover}>
                <BsChatDots className='CartBtn'></BsChatDots>
            </div>
        </div>
    )
}

export default ChatBox
