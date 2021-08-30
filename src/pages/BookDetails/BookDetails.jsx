import React,{useState} from 'react'
import './BookDetails.scss'
import PageHero from '../../components/PageHero/PageHero'
import ReactStars from 'react-rating-stars-component'
import * as booksActions from '../../redux/actions/books.actions'
import { useDispatch,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { bookState$ } from '../../redux/selectors' 
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const BookDetails = () => {
    const [count,setCount] = useState(1)  
    const dispatch = useDispatch();
    const {id} = useParams();
    const data= useSelector(bookState$);
    const [tabbar,setTabbar] = useState(0);
    const book= data.book;
    const comments= data.comments;
    console.log(data)
    console.log(comments)
    const linkBefore=[
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Books',
            link: '/'
        }
    ];
    React.useEffect(() => {
        dispatch(booksActions.getBookById.getBookByIdRequest(id))
    }, [dispatch, id]);

    React.useEffect(() =>window.scrollTo(0,0),[]);
    if (book===undefined) return null;
    if (book.sale===undefined) book.sale=0;
    const countDecrease = () =>{
        if (count>1) setCount(count-1);
    }
    const countIncrease = () => {
        setCount(count+1)
    }
    const price =book.price*(1-book.sale/100);
    return (
        <div className='BookDetails'>
            <PageHero page="Book" linkBefore={linkBefore}></PageHero>
            <div className="BookCartSection">
                <div className='ImageSection'>
                    <div className='ImageShow'>
                        <img src={'../'+book.image} alt={book.bookname} className='MainImage' />
                    </div>
                    <div className='ImageList'>
                    <img src={'../'+book.image} alt={book.bookname} className='SubImage' />
                    </div>
                </div>
                <div className='CartSection'>
                    <form className='CartForm'>
                        <h1 className='BookName'>{book.bookname}</h1>
                        <div className='BookInfor'>
                            <div className="BookAuthor">BY&nbsp;<span className='AuthorName'>{book.author}</span></div>
                            <div className='BookStar'>
                                <ReactStars
                                    className='Stars'
                                    count={5}
                                    value={book.star}
                                    size={22}
                                    edit={false}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />&nbsp;({comments===undefined ?  '0': comments.length}&nbsp;reviews)
                            </div>
                            <div className="BookRemain">
                                Remaining:&nbsp; <div>{book.remaining}</div>
                            </div>
                        </div>
                        <div className="BookPrice">
                            <div className='PriceSell'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</div>
                            <div className='PriceInfor'>
                                <div className='Price'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.price)}</div>
                                <div className='Sale'>-{book.sale}%</div>
                            </div>
                        </div>
                        <div className='BookProducer'>
                            <div className='Producer'>
                            Producer: <div className='ProducerName'> &nbsp;{book.producer}</div>
                            </div>
                            <div className='Producer'>
                            Company: <div className='ProducerName'> &nbsp;{book.company}</div> 
                            </div>
                        </div>
                        <div className='BookCount'>
                            <div className='CountDecrease' onClick={countDecrease}><AiOutlineMinus/></div>
                            <div className='Count'>{count}</div>
                            <div className='CountIncrease' onClick={countIncrease}><AiOutlinePlus/></div>
                        </div>
                        <div className='AddToCart'>
                            <button className='AddToCartBtn' type='submit'> ADD TO CART</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="BookMoreInforSection">
                <div className='TabBar'>
                    <div className={'TabName '+( tabbar===0 ?  "TabActive" : '')} onClick={() => setTabbar(0)}>MORE INFORMATIONS</div>
                    <div className={'TabName '+( tabbar===1 ?  "TabActive" : '')} onClick={() => setTabbar(1)}>COMMENTS ({comments.length})</div>
                </div>
                {
                    tabbar===0 ? 
                    <div className='InforContainer'>
                        <p className='InforText'>&nbsp;&nbsp;&nbsp;&nbsp; {book.detail}</p>
                    </div>
                    : 
                    <div className='InforContainer'></div>
                }
            </div>
        </div>
    )
}



export default BookDetails
