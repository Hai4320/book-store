import React,{useState} from 'react'
import './ToTop.scss'
import {FaChevronUp} from 'react-icons/fa'

const ToTop = () => {
    const [show, setShow] = useState(false);
    const changeShow = () => {
        if (window.scrollY >= 400)  {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
    window.addEventListener('scroll', changeShow);
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth',
    });
      };
    return (
        <div className="ToTopContainer" style={{display: show ? 'block' : 'none'}} onClick={scrollToTop}>
            <div className='ToTopBorder'>
            <FaChevronUp className='ToTopIcon'></FaChevronUp>
            </div>
        </div>
    )
}

export default ToTop
