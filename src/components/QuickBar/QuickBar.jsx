import React,{useState} from 'react'
import './QuickBar.scss'
import QuickCart from './QuickCart/QuickCart'
import ToTop from './ToTop/ToTop'
import ChatBox from './ChatBox/ChatBox' 
import QuickSearch from './QuickSearch/QuickSearch'

const QuickBar = () => {
    const [show,setShow] = useState(false);
    const changeShow = () => {
        if (window.scrollY >= 800)  {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
    window.addEventListener('scroll', changeShow);
    return (
        <div>
            <ToTop></ToTop>
            <div className='QuickBar' style={{display: show ? 'flex' : 'none'}}>
                <QuickSearch></QuickSearch>
                <QuickCart values='1'></QuickCart>
                <ChatBox></ChatBox>
            </div>
            
        </div>
    )
}
export default QuickBar
