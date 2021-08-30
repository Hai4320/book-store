import { takeLatest, call, put } from 'redux-saga/effects'
import * as apis from '../../apis'
import * as userActions from '../actions/user.actions'

function* fetchUserSaga(action)
{
    try{
        const login =  yield call(apis.login, action.payload);
        localStorage.setItem('isLogin', true);
        const user =  JSON.stringify(login.data.user);
        localStorage.setItem('userData',user)
        alert(login.data.message);
        yield put(userActions.login.loginSuccess(user));

    } catch(err){
        if (err.response.status === 400 ) alert(err.response.data.message);
        else alert(err.response.error)
        yield put(userActions.login.loginFailure(err));
        
    }
}
function FetchLogout(action){
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userData');
    alert("Logout Success!");
}

function* fetchRegisterSaga(action){
    try{
        const register = yield call(apis.register, action.payload);
        alert("Register Success!");
        const user = JSON.stringify({...register.data.user, password: action.payload.password});
        yield put(userActions.register.registerSuccess(user));
    }
    catch(err){
        alert(err.response.data.message);
        yield put(userActions.register.registerFailure(err));
    }
}

function* mySaga(){
    yield takeLatest(userActions.login.loginRequest, fetchUserSaga )
    yield takeLatest(userActions.login.logout, FetchLogout)
    yield takeLatest(userActions.register.registerRequest, fetchRegisterSaga) 
}
export default mySaga;