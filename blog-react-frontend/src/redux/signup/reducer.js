import { OTP_SENT, OTP_SENT_ERROR, OTP_SENT_LOADING, SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../constants"

const initialState ={
    loading: false,
    error: null,
    success: false,
    failure: false,
    otp_sent: false,
    otp_sent_response: null,
    otp_sent_error: false,
    otp_sent_error_response: null,
    otp_sent_loading: false,
}

export const signUpReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case SIGNUP_LOADING:
            return {
                ...state,
                loading: true,
                otp_sent:true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                otp_sent:true
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true,
                otp_sent:true
            }
        case OTP_SENT:
            return {
                ...state,
                otp_sent:true,
                otp_sent_loading:false,
                otp_sent_error:false,
                otp_sent_error_response:null,
                otp_sent_response: payload
            }
        case OTP_SENT_ERROR:
            return {
              ...state,
              otp_sent_error: true,
              otp_sent: false,
              otp_sent_error_response: payload,
            };
        case OTP_SENT_LOADING:
            return{
                ...state,
                otp_sent_loading:true
            }

        default:
            return {
                ...state
            }
    }
}