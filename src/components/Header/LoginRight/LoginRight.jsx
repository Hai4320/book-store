import React from 'react'
import './LoginRight.scss'
import {AiOutlineDown} from 'react-icons/ai'


import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import * as userActions from '../../../redux/actions/user.actions'
import { userState$, isLoginState$ } from '../../../redux/selectors'

const LoginRight = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogin = useSelector(isLoginState$);
    const user = JSON.parse(useSelector(userState$));
    const LogOut = () =>{
        dispatch(userActions.login.logout());
    }
    if (!isLogin) {
    return (
        <div className='loginBtnRight'>
            <div className='loginLink' onClick={()=> history.push('/login')}>
                <div className='loginContainer'>
                    <p className='loginTitle'> Login </p>
                </div>
            </div>
        </div>
    )
    } else {
    return (
        <div className='user'>
            <div className="userContainer" onClick={LogOut}>
                <div className='userAvatar'>
                    <img src={user.avatar==='' ? './images/user.png': user.avatar} alt="" className='avatar'/> 
                </div>
                 <div className="userName">{user.name}</div>
                <div className='userBntDown'>
                    <AiOutlineDown></AiOutlineDown>
                </div>

                    
                
            </div>
        </div> 
    )   
    }
}

export default LoginRight
