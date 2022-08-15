import { sendOtp, verifyOtp } from "../../apis/auth";
import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../constants";

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

export const signUp = (payload) => (dispatch) => {
  dispatch(signUpLoading());
  sendOtp(payload)
    .then((response) => {
      dispatch(signUpSuccess());
    })
    .catch((error) => {
      dispatch(signUpError());
    });
};
