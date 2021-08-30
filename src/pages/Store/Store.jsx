import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { booksState$ } from '../../redux/selectors'
import * as booksActions from '../../redux/actions/books.actions'
import {FaChevronUp,FaChevronDown,FaStar} from 'react-icons/fa'


import './Store.scss'
import PageHero from '../../components/PageHero/PageHero'
import Cart from '../../components/Cart/Cart'

const Store = () => {
    const dispatch = useDispatch();
    const [starShow,setStarShow] = useState(false);
    const [authorShow,setAuthorShow] = useState(false);
    const [priceShow,setPriceShow] = useState(false);
    const [typebook, setTypeBooks] = useState(0);
    const books = useSelector(booksState$);
    const [sortID,setSortID] = useState(0);
    const [starFilter,setStarFilter] = useState(0);
    const [authorFilter,setAuthorFilter] = useState(''); 
    const [priceFilter,setPriceFilter] = useState(0)   



    const linkBefore=[
        {
            name: 'Home',
            link: '/'
        },
    ];
    let booklist=[];
    let author = [];
    let hashtags = [];


    books.forEach((book)=>{
        if (!(book.author in author))
         author.push(book.author);
    });
    const priceVal = [0, 100000, 200000, 300000, 500000 ]

    //Set BookList
    if (typebook===0) {
        booklist = books;
    }
    else{
            booklist = books.filter((book) => book.type === typebook.toString());
    }
    //filter booklist
    // 1 by star
    if (starFilter >0) {
        booklist = booklist.filter((book) => (book.star>=starFilter ));
    }
    // 2 by price
    if (priceFilter>0) {
        if (priceFilter<5)
        {
            booklist = booklist.filter((book) => (book.price <= priceVal[priceFilter]&& book.price>priceVal[priceFilter-1]))
        }
        else 
        {
            booklist = booklist.filter((book) => book.price>priceVal[priceFilter-1])
        }    
    }
    // 3 by author
    if (authorFilter!== '')
    {
        
        booklist = booklist.filter((book) => 
        {
            let s1=book.author.slice();
            let s2=authorFilter.slice();
            return s1.toUpperCase().includes(s2.toUpperCase());
        })
    }
    //Sort booklist

    switch (sortID) {
        case 3:
            booklist.sort((v1,v2) => v1.price > v2.price ? -1 : 1)
        break;
        case 4:
            booklist.sort((v1,v2) => v1.price > v2.price ? 1 : -1)
        break;
        case 5:
            booklist.sort((v1,v2) => v1.bookname > v2.bookname ? 1 : -1)
        break;
        case 6:
            booklist.sort((v1,v2) => v1.bookname > v2.bookname ? -1 : 1)
        break;
        case 7:
            booklist.sort((v1,v2) => v1.star > v2.star ? 1 : -1)
        break;
        default: break; 
    }
    //create hash tags 
    if (priceFilter!==0)
    {
        if (priceFilter<5) 
            hashtags.push('Price: '+priceVal[priceFilter-1]+'đ -'+priceVal[priceFilter]+'đ');
        else hashtags.push('Price: >'+priceVal[priceFilter-1]+'đ');
    }
    if (authorFilter!=='')
    {
        hashtags.push('Author: '+authorFilter);
    }
    if (starFilter!==0)
    {
        hashtags.push('Star: > '+starFilter);
    }


    React.useEffect(() => {
        dispatch(booksActions.getBooks.getBooksRequest())
    }, [dispatch]);
    React.useEffect(() =>window.scrollTo(0,0),[]);
    return (
        <div className="Store">
            <PageHero page="Store" linkBefore={linkBefore}></PageHero>
            <div className='StoreContainer'>
                <div className='BookListSection'>
                    <div className='BookTypeSection'>
                        <div className={'BookType '+  (typebook===0 ? 'BookTypeActive': '')}  onClick={() => setTypeBooks(0)}>ALL</div>
                        <div className={'BookType '+  (typebook===1 ? 'BookTypeActive': '')} onClick={() => setTypeBooks(1)}>SELF HELPS</div>
                        <div className={'BookType '+  (typebook===2 ? 'BookTypeActive': '')} onClick={() => setTypeBooks(2)}>CHILDREN'S BOOK</div>
                        <div className={'BookType '+  (typebook===3 ? 'BookTypeActive': '')} onClick={() => setTypeBooks(3)}>WORKS STYLE</div>
                        <div className={'BookType '+  (typebook===4 ? 'BookTypeActive': '')} onClick={() => setTypeBooks(4)}>SCIENCE</div>
                        <div className={'BookType '+  (typebook===5 ? 'BookTypeActive': '')} onClick={() => setTypeBooks(5)}>NOVEL</div>
                        <div className={'BookType '+  (typebook===6 ? 'BookTypeActive': '')} onClick={() => setTypeBooks(6)}>OTHER</div>
                    </div>
                    <div className='SortSection'>
                        SORT BY:
                        <select name="sort" id="sort" className="SortBox" onChange={() => setSortID(parseInt(document.getElementById("sort").value))}>
                            <option value="0">Default</option>
                            <option value="1">Bestseller</option>
                            <option value="2">News</option>
                            <option value="3">Price High To Low</option>
                            <option value="4">Price Low To High</option>
                            <option value="5">Name A - Z</option>
                            <option value="6">Name Z - A</option>
                            <option value="7">Stars</option>
                        </select>
                            
                    </div>
                    <div className="CartSection">
                        {
                            booklist.map(book => <Cart className='CartItem' book={book}/>)
                        }
                    </div>
                </div>
                <div className='FilterSection'>
                    <div className="FilterContainer">
                        <div className='FilterTitle'>Filter</div>
                        <div className='FilterHashTag'>
                            {   
                                hashtags.length === 0 
                                ? <div className='hashtag'># No hash tags</div>
                                : hashtags.map(hashtag => <div className='hashtag'>#{hashtag}</div>)
                            } 
                            
                        </div>
                        <div className='FilterGroup'>
                            <div className='FilterGroupTitle' onClick={()=>setPriceShow(!priceShow)}>
                                Price {priceShow? <FaChevronUp className="TitleIcon"/> : <FaChevronDown className="TitleIcon"/>}
                            </div>
                            <div className='FilterDataContainer' style={{display: priceShow ? 'flex': 'none'}}>
                                <div className={'FilterData ' + (priceFilter===0 ? 'DataSelect': '')} onClick={()=>setPriceFilter(0)} >All</div>
                                <div className={'FilterData ' + (priceFilter===1 ? 'DataSelect': '')}  onClick={()=>setPriceFilter(1)} >&lt; 100k</div>
                                <div className={'FilterData ' + (priceFilter===2 ? 'DataSelect': '')}  onClick={()=>setPriceFilter(2)} >100k - 200k</div>
                                <div className={'FilterData ' + (priceFilter===3 ? 'DataSelect': '')}  onClick={()=>setPriceFilter(3)}>200k - 300k</div>
                                <div className={'FilterData ' + (priceFilter===4 ? 'DataSelect': '')}  onClick={()=>setPriceFilter(4)}>300k - 500k</div>
                                <div className={'FilterData ' + (priceFilter===5 ? 'DataSelect': '')}  onClick={()=>setPriceFilter(5)}>&gt; 500k</div>
                            </div>
                        </div>
                        <div className='FilterGroup' >
                            <div className='FilterGroupTitle' onClick={()=>setAuthorShow(!authorShow)}>
                                Author{authorShow? <FaChevronUp className="TitleIcon"/> : <FaChevronDown className="TitleIcon"/>}
                            </div>
                            <div className='FilterBySearch' style={{display: authorShow ? 'flex': 'none'}}>
                                Search: <input type="text" className="FilterInput" id="authorInput" list="authorValue" onChange={(e)=> setAuthorFilter(e.target.value)}></input>
                                <datalist id="authorValue">
                                   {author.map((book) => <option> {book} </option>)}
                                </datalist>

                            </div>
                        </div>
                        <div className='FilterGroup' >
                            <div className='FilterGroupTitle' onClick={() => setStarShow(!starShow)}>
                                Stars{starShow? <FaChevronUp className="TitleIcon"/> : <FaChevronDown className="TitleIcon"/>}
                            </div>
                            <div className='FilterDataContainer' style={{display: starShow ? 'flex': 'none'}}>
                                <div className={'FilterData ' + (starFilter===0 ? 'DataSelect': '')} onClick={() => setStarFilter(0)}>0 <FaStar className="Icon"/></div>
                                <div className={'FilterData ' + (starFilter===1 ? 'DataSelect': '')} onClick={() => setStarFilter(1)}>1 <FaStar className="Icon"/></div>
                                <div className={'FilterData ' + (starFilter===2 ? 'DataSelect': '')} onClick={() => setStarFilter(2)}>2 <FaStar className="Icon"/></div>
                                <div className={'FilterData ' + (starFilter===3 ? 'DataSelect': '')} onClick={() => setStarFilter(3)}>3 <FaStar className="Icon"/></div>
                                <div className={'FilterData ' + (starFilter===4 ? 'DataSelect': '')} onClick={() => setStarFilter(4)}>4 <FaStar className="Icon"/></div>
                                <div className={'FilterData ' + (starFilter===5 ? 'DataSelect': '')} onClick={() => setStarFilter(5)}>5 <FaStar className="Icon"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Store
