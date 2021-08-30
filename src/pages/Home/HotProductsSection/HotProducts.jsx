import React,{useState} from 'react'
import './HotProducts.scss'
import Cart from '../../../components/Cart/Cart'
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai'

import { useDispatch, useSelector } from 'react-redux'
import * as booksActions from '../../../redux/actions/books.actions'
import { booksState$ } from '../../../redux/selectors' 

const HotProducts = () => {
    const [page, setPage] = useState(1);
    const [typebook, setTypeBooks] = useState(0);
    const dispatch = useDispatch();
    const books = useSelector(booksState$);


    let booklist=[];

    if (typebook===0) {
        booklist = books;
    }
    else{
            booklist = books.filter((book) => book.type === typebook.toString());
    }
    let Num = booklist.length;
    if (Num%5===0)  {
        Num=Num/5;
    }
    else  {
        Num = Num/5+1;
    }
    let pagelist= [];
    for (let i=page-2; i<=page+2; i++)
    {
        if (i>=1&&i<=Num) pagelist.push(i);
    }
    React.useEffect(() => setPage(1),[typebook]);


    React.useEffect(() => {
        dispatch(booksActions.getBooks.getBooksRequest())
    }, [dispatch]);

    return (
        <div className="HotProducts">
            <div className="SectionContainer">
                <div className="SectionTitleContainer"><h1 className='SectionTitle'>Bestseller Books</h1></div>
                <div className="BookTypeSection">
                    <div className="BookTypeContainer">
                        <div className='BookType' style={{backgroundColor: typebook===0 ? '#118768': '#fff'}} onClick={() => setTypeBooks(0)}>ALL</div>
                        <div className='BookType' style={{backgroundColor: typebook===1 ? '#118768': '#fff'}} onClick={() => setTypeBooks(1)}>SELF HELPS</div>
                        <div className='BookType' style={{backgroundColor: typebook===2 ? '#118768': '#fff'}} onClick={() => setTypeBooks(2)}>CHILDREN'S BOOK</div>
                        <div className='BookType' style={{backgroundColor: typebook===3 ? '#118768': '#fff'}} onClick={() => setTypeBooks(3)}>WORKS STYLE</div>
                        <div className='BookType' style={{backgroundColor: typebook===4 ? '#118768': '#fff'}} onClick={() => setTypeBooks(4)}>SCIENCE</div>
                        <div className='BookType' style={{backgroundColor: typebook===5 ? '#118768': '#fff'}} onClick={() => setTypeBooks(5)}>NOVEL</div>
                        <div className='BookType' style={{backgroundColor: typebook===6 ? '#118768': '#fff'}} onClick={() => setTypeBooks(6)}>OTHER</div>
                    </div>
                </div>
                <div className="CartsContainer">
                    {
                        [1,2,3,4,5].map(i => <Cart className='CartItem' book={booklist[(5*page)+i -6]}/>)
                        
                    }
                    
                </div>
                <div className='PageNumberContainer'>
                <div className='PageNumberIcon 'onClick={() =>setPage(1)} style={{display: pagelist[0]===1||Num<6 ? 'none' : 'flex'}}><AiOutlineDoubleLeft/></div>
                    {
                        pagelist.map(i =>  <div className={'PageNumber '+(i === page ? 'PageNumberAc': '')} onClick={() =>setPage(i)}>{i}</div>)
                    }
                   
                   <div className='PageNumberIcon' onClick={() =>setPage(Num) } style={{display: pagelist[pagelist.length-1]===Num||Num<6 ? 'none' : 'flex'}}><AiOutlineDoubleRight/></div>    
                </div>
            </div>
            
        </div>
    )
}

export default HotProducts
