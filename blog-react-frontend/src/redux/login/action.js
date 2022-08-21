import {logInApi} from '../../api/login';

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
        dispatch(loginSuccess(response.data));
    }
    catch(error){
        dispatch(loginFailure(error));
    }
}
