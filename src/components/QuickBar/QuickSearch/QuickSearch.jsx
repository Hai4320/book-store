import React,{useState} from 'react'
import './QuickSearch.scss'
import {FiSearch} from 'react-icons/fi'

const QuickSearch = () => {
    const [st,setHover] = useState(0);
    const onHover = () =>{
        if (st===0) setHover(1);
    }
    const leaveHover = () =>{
        if (st===1) setHover(0);
    }
    const onFos = () =>{
        if (st===1) setHover(2);
    }
    const leaveFos = () =>{
        setHover(0);
    }
    return (
        <div className='QuickSearchContainer' onMouseEnter={onHover} onMouseLeave={leaveHover}>
            <form className='SearchForm' action='' method='get' >
                <div className='SearchBox'>
                    <input type='search' autoCapitalize='none' autoComplete='off' placeholder='Search...' id='search' className='SearchInput' style={{display: st>0 ? 'flex' : 'none'}} onFocus={onFos} onBlur={leaveFos}></input>
                    <div></div>
                    <button type='submit' className='SearchBtn' title='Search' disabled>
                        <FiSearch className='SearchIcon'></FiSearch>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default QuickSearch
