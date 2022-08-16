import { sendOtpApi, verifyOtpApi } from "../../apis/auth";
import { OTP_SENT, OTP_SENT_ERROR, OTP_SENT_LOADING, SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../constants";

export const signUpLoading = () => {
  return {
    type: SIGNUP_LOADING,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signUpError = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

export const sendOtpSuccess = (payload) =>{

    return {
        type: OTP_SENT,
        payload
    }
}

export const sendOtpError = (payload) =>{
    
        return {
            type: OTP_SENT_ERROR,
            payload
        }
}

export const sendOtpLoading = () =>{
    return{
        type: OTP_SENT_LOADING
    }
}

export const sendOtp = (payload) =>async (dispatch) => {
  dispatch(sendOtpLoading());

  try{
    const response = await sendOtpApi(payload);
    dispatch(sendOtpSuccess(response.data));
  }
  catch(error){
    dispatch(sendOtpError(error));
  }
};

export const verifySignUp = (payload) =>async (dispatch) => {
  dispatch(signUpLoading());
  try{
    await verifyOtpApi(payload);
    dispatch(signUpSuccess());
  }
  catch(error){
    dispatch(signUpError());
  }
}