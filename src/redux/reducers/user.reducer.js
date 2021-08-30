import {INIT_STATE} from '../../constants'
import {login, getType, register} from '../actions/user.actions'

export default function usersReducers(state= INIT_STATE.user , action){
    switch (action.type) {
        //login
        case getType(login.loginRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(login.loginSuccess):
            return {
                ...state, 
                isLoading: false,
                isLogin: true,
                data: action.payload,
            }
        case getType(login.loginFailure):
            return {
                ...state, 
                isLoading: false,
            }

        // logout
        case getType(login.logout):
            return {
                ...state, 
                isLoading: false,
                isLogin: false,
                data: null,
            }

        // register
        case getType(register.registerRequest):
            return {
                ...state, 
                isLoading: true,

            }
        case getType(register.registerSuccess):    
            return {
                ...state, 
                isLoading: false,
                data: action.payload
            }
        case getType(register.registerFailure): 
            return {
                ...state, 
                isLoading: false,
            }
        default: 
            return state;
    }
}