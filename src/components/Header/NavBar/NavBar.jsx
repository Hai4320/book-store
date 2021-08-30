import React from 'react'
import{useHistory} from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    const history = useHistory();
    return (
        <div className='NavBar'>
            <div className='NavBarContainer'>
                <div className='itemContainer'>
                    <div className='itemLink' onClick={()=> history.push("/")}>Home</div>
                </div>
                <div className='itemContainer'>
                    <div className='itemLink'  onClick={()=> history.push("/store")}>Store</div>
                </div>
                <div className='itemContainer'>
                    <div className='itemLink'>Blog</div>
                </div>
                <div className='itemContainer'>
                    <div className='itemLink'>Forum</div>
                </div>
                <div className='itemContainer'>
                    <div className='itemLink'>About</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
