import React,{useState} from 'react'
import './Login.scss'
import PageHero from '../../components/PageHero/PageHero'
import {useHistory} from 'react-router-dom'
import {isLoginState$} from '../../redux/selectors'
import { useDispatch,useSelector} from 'react-redux'
import * as userActions from '../../redux/actions/user.actions'

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLogin = useSelector(isLoginState$);
    if (isLogin) history.push('/');
    const [user,setUser] = useState({
        email: '', 
        name: '',
        phone:'',
        address: '',
        password:'',
    });
    const [cfpass,setCfpass] = useState('');
    const [acceptTerm,setAcceptTerm] = useState(false);
    const linkBefore=[
        {
            name: 'Home',
            link: '/'
        },
    ];
    const handleRegisterSummit = async (e) =>{
        e.preventDefault();
        if (user.email===''||user.name===''||user.password===''||cfpass==='')
        {
            alert('Fill all fields');
        }
        else
        {
            if (user.password!==cfpass) {
                alert("Cofirm password is incorrect");
            }
            else {
                await dispatch(userActions.register.registerRequest(user));
                history.push('/login'); 
            }
        }

    }

    return (
        <div className='Login'>
          <PageHero page="Register" linkBefore={linkBefore}></PageHero>
            <div className="LoginContainer">
                <form className="LoginForm" onSubmit={handleRegisterSummit}>
                    <div className='InputContainer'>
                        <label for="email">Your Email: </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="Input" 
                            value={user.email}
                            onChange={(e)=> setUser({...user, email: e.target.value})}
                        />
                    </div>
                    <div className='InputContainer'>
                        <label for="name">Full Name: </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="Input" 
                            value={user.name}
                            onChange={(e)=> setUser({...user, name: e.target.value})}
                        />
                    </div>
                     <div className='InputContainer'>
                        <label for="phone">Phone: </label>
                        <input 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            className="Input" 
                            value={user.phone}
                            onChange={(e)=> setUser({...user, phone: e.target.value})}
                        />
                    </div>
                    <div className='InputContainer'>
                        <label for="address">Address: </label>
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            className="Input" 
                            value={user.address}
                            onChange={(e)=> setUser({...user, address: e.target.value})}
                        />
                    </div>
                    <div className='InputContainer'>
                        <label for="password">Password: </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="Input" 
                            value={user.password}
                            onChange={(e)=> setUser({...user, password: e.target.value})}
                        />
                    </div>
                    <div className='InputContainer'>
                        <label for="cfpassword">Confirm : </label>
                        <input 
                            type="password" 
                            name="cfpassword" 
                            id="cfpassword" 
                            className="Input" 
                            value={cfpass}
                            onChange={(e)=> setCfpass(e.target.value)}
                        />
                    </div>
                    <div className='AcceptTerm'>
                        <input type='checkbox' id='acceptTerm' name='acceptTerm' onChange={()=> setAcceptTerm(!acceptTerm)}/>
                        <div className='textAccept'> I am accepted with all&nbsp; <div className='link'> Terms of Service&nbsp;</div> and&nbsp;<div className='link'>Policy</div>.</div>
                    </div>
                    {
                        acceptTerm ?
                        <button type='submit' className='LoginBtn'>Create</button>: 
                        <button type='submit' className='LoginBtnUnacctive'>Create</button>
                    }
                    
                    
                </form>
            </div>  
        </div>
    )
}

export default Register
