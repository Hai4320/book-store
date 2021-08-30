import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import {isLoginState$, userState$} from '../../redux/selectors'
import './Login.scss'
import PageHero from '../../components/PageHero/PageHero'
import * as userActions from '../../redux/actions/user.actions'

const Login = () => {
    const dispatch = useDispatch();
    const userRes = {...JSON.parse(useSelector(userState$))};
    const [isSet,setisSet] = useState(true);
    const [user,setUser] = useState({email: '', password: ''});
    if (userRes.email!==undefined&& isSet) {
        setUser({...user,email: userRes.email, password: userRes.password});
        setisSet(false);
    }
    console.log(userRes)
    const history = useHistory();
    const isLogin= useSelector(isLoginState$);
    if (isLogin) history.goBack();
    const linkBefore=[
        {
            name: 'Home',
            link: '/'
        },
    ];
    


    const handleLoginSummit = async (e) => {
        e.preventDefault();
        if (user.email!==''&&user.password!=='') {
            try {
                 dispatch(userActions.login.loginRequest(user));
            }
            catch (err) {
                console.log(err);
            }
        } 
        else alert('Fill all fields') ;
    }
    React.useEffect(() =>window.scrollTo(0,0),[]);
    return (
        <div className="Login">
            <PageHero page="Login" linkBefore={linkBefore}></PageHero>
            <div className="LoginContainer">
                <form className="LoginForm" onSubmit={handleLoginSummit}>
                    <div className='InputContainer'>
                        <label for="email">Email: </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="Input" 
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
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
                            onChange={(e) => setUser({...user, password: e.target.value})}
                        />
                    </div>
                    <button type='submit' className='LoginBtn'>Login</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login
