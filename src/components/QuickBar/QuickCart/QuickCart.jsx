import React,{useState} from 'react'
import './QuickCart.scss'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const QuickCart = ({values}) => {
    const [shover,setHover] = useState(false);
    return (
        <div className='QuickCartConTainer'>
            <div className='QuickCartInfor' style={{display: shover ? 'flex' : 'none'}}> 
                <span className='QuickCartValue'>{values}</span> Books in Shopping Cart
            </div>
            <div className='QuickCartBtn' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <AiOutlineShoppingCart className='CartBtn'></AiOutlineShoppingCart>
            </div>
        </div>
    )
}

export default QuickCart
