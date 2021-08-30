import React,{useState} from 'react'
import Logo from './Logo/Logo'
import LoginRight from './LoginRight/LoginRight'
import NavBar from './NavBar/NavBar'
import './Header.scss'
const Header = () => {
    const [header, setHeader] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80)  {
            setHeader(true);
        }
        else {
            setHeader(false);
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <header className="header" style={{backgroundColor: header ? '#232A34': 'transparent'}}>
            <Logo className="leftLogo"></Logo>
            <NavBar className="center"></NavBar>
            <LoginRight className="right"></LoginRight>
        </header>
    )
}

export default Header
