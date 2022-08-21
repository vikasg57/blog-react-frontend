import {logInApi} from '../../apis/auth';
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from '../constants';

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
}

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
}

export const logout = () =>{
    return {
        type: LOGOUT,
    }
}

export const login = (payload) => async (dispatch) => {
    dispatch(loginLoading());
    try{
        const response = await logInApi(payload);
        console.log(response);
        dispatch(loginSuccess(response.data));

    }
    catch(error){
        dispatch(loginFailure(error));
    }
}
