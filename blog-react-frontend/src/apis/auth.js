import axios from 'axios';

export const sendOtp=(email)=>{
    return axios.post('http://localhost:8000/users/send-otp/', email);
}

export const verifyOtp=(payload)=>{
    return axios.post('http://localhost:8000/users/signup/', payload);

}