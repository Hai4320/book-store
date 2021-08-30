import React from 'react'
import {FiSearch} from 'react-icons/fi'
import './SearchBox.scss'

const SearchBox = () => {
    return (
        <div className='SearchBar'>
            <form className='SearchForm' action='' method='get' >
                <div className='SearchBox'>
                    <input type='search' autoCapitalize='none' autoComplete='off' placeholder='Search...' id='search' className='SearchInput'></input>
                    <button type='submit' className='SearchBtn' title='Search'>
                        <FiSearch className='SearchIcon'></FiSearch>
                    </button>
                </div>
            </form>

        </div>
    )
}

export default SearchBox
