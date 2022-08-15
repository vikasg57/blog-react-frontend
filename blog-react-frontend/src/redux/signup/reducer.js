import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../constants"

const initialState ={
    loading: false,
    error: null,
    success: false,
    failure: false
}

export const signUpReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SIGNUP_LOADING:
            return {
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true
            }

        default:
            return {
                ...state
            }
    }
}