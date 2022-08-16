import axios from 'axios';

export const sendOtpApi=(email)=>{
    return axios.post('http://localhost:8000/users/send-otp/', email);
}

export const verifyOtpApi=(payload)=>{
    return axios.post('http://localhost:8000/users/signup/', payload);

}

export const logInApi=(payload)=>{
    return axios.post('http://localhost:8000/users/login/', payload);
} 