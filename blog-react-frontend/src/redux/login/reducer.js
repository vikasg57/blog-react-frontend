import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "../constants";

const initialState = {
  Loading: false,
  Success: false,
  Failure: false,
  Authenticated: false,
  token: null,
  name: null,
  error: null
};

export const logInReducer = (store=initialState, {type, payload}) => {
  switch(type){
        case LOGIN_LOADING:
            return{
                ...store,
                Loading: true,
                Success:false,
                Failure:false,
                Authenticated:false
            }

        case LOGIN_SUCCESS:
            return{
                ...store,
                Success: true,
                Authenticated:true,
                Loading:false,
                failure:false,
                token:payload.refresh[0],
                name:payload.first_name,
                error:null
            }

            case LOGIN_FAILURE:
                return{
                    ...store,
                    Loading:false,
                    Failure:true,
                    Success:false,
                    Authenticated:false,
                    error:payload,
                    token:null,
                    name:null,
                }
            case LOGOUT:

            return{
                ...initialState
            }


        default:
            return {
                ...store,
            }
    }

}
