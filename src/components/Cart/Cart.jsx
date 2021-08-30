import React from 'react'
import './Cart.scss'
import {FiSearch,FiShoppingCart} from 'react-icons/fi'
import ReactStars from 'react-rating-stars-component'
import { useHistory } from 'react-router-dom'

const Cart = ({book}) => {
    const history = useHistory();
    if (book!==undefined) {
    return (
        <div className="CartContainer">
            <div className="CartBorder">
                <div className="CartImageContainer">
                    <img src={book.image} alt={book.bookname} className="CartImage"/>
                    <div className="CartAction">
                        <div className='detailAction CartBtn' onClick={() => history.push(`/books/${book._id}`)}>
                            <FiSearch></FiSearch>
                        </div>
                        <div className='addAction CartBtn'>
                            <FiShoppingCart></FiShoppingCart>
                        </div>
                    </div>
                </div>
                <div className='CartInfor'>
                    <div className='CartName' onClick={() => history.push(`/books/${book._id}`)}>{book.bookname}</div>
                    <div className='CartAuthor'>BY <span className='AuthorName'>{book.author}</span></div>
                    <div className='CartPriceContainer'>
                        <div className='CartPrice'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price)}</div>
                        <div className='CartSale'>-{book.sale ? book.sale: '20'}%</div>
                    </div>
                    <div className='CartStar'>
                    <ReactStars
                            className='Stars'
                            count={5}
                            value={book.star}
                            size={24}
                            edit={false}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>
        </div>
    )} else return null;
}

export default Cart
