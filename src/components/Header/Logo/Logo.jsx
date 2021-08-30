import React from 'react'
import './Logo.scss'
import { useHistory } from "react-router-dom";

const Logo = () => {
    const history = useHistory();
    return (
        <div className="logo" onClick={() => history.push("/")}>
           <h1 className="logoTitle">BookStore</h1>
        </div>
    )
}

export default Logo
