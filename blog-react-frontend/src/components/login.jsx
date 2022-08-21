import { AppBar, Button, TextField, Toolbar, Typography, FormControl, FormLabel, FormHelperText } from '@mui/material'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInApi } from '../apis/auth'


export const Login = () => {
    const [fields, setFields] = useState({})
    const [emailError, setEmailError] = useState(false)

    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(state => state.auth)


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
    const res = await logInApi(fields);
    console.log(res.data)
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
          onChange={handleChange}
        />
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
      </FormControl>
    </>
  );
}
