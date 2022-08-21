import { AppBar, Button, TextField, Toolbar, Typography, FormControl, FormLabel, FormHelperText } from '@mui/material'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/login/action'



export const Login = () => {
    const [fields, setFields] = useState({})
    const [emailError, setEmailError] = useState(false)
    const [fieldError, setFieldError] = useState(false)

    const dispatch = useDispatch()
    const data = useSelector(state => state.login)

    
    function ValidateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    }

   const handleChange = (event) => {
     setFields({
       ...fields,
       [event.target.name]: event.target.value,
     });
     if (event.target.name == "email") {
       setEmailError(false);
       setFields({
         ...fields,
         [event.target.name]: event.target.value,
       });
     }
   };

   const handleSubmit = async () => {

    const keys = Object.keys(fields)
    console.log(keys)

    if(keys.length < 2 || fields.email == "" || fields.password == ""){
      setFieldError(true)
    }
    else{
       setEmailError(false);
       setFieldError(false);
       if(ValidateEmail(fields.email)){
        setEmailError(false);
          dispatch(login(fields))
       }
        else
       {
          setEmailError(true);
       }
       
    }
      
  
   }
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">sign up page</Typography>
        </Toolbar>
      </AppBar>
      <FormControl>
        <FormHelperText></FormHelperText>
        <TextField
          id=""
          label="Email"
          type="email"
          name="email"
          margin="normal"
          error={emailError}
          onChange={handleChange}
        />
        {emailError && (
          <FormHelperText id="my-helper-text">
            Invalid email address.
          </FormHelperText>
        )}
        <TextField
          id=""
          label="Password"
          name="password"
          type="password"
          margin="normal"
          onChange={handleChange}
        />
        <Button
          loadingPosition="start"
          variant="contained"
          color="primary"
          margin="normal"
          onClick={handleSubmit}
        >
          Log In
        </Button>
        {fieldError && (
          <FormHelperText id="my-helper-text">
            All Fields required
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}
