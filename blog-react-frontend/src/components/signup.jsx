import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { Button, Input, InputLabel } from '@mui/material'
import { sendOtp, verifyOtp } from '../apis/auth'




export function Signup() {
    const [fields, setFields] = useState({})
    const [email, setEmail] = useState({})
    const [otpSent, setOtpSent] = useState(false)

    const handleChange = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        })

        if(event.target.name == 'email'){
            setEmail({
              email: event.target.value,
            });
        }
    }

    const handleOtp =async () =>{
        try{
            const res = await sendOtp(email)
            alert(res?.data?.message)
            setOtpSent(true)
        }
        catch(err){
            console.log(err)
        }

    }

    const handleSubmit = async () =>{
        try{
            const res = await verifyOtp(fields)
            console.log(res?.data)
        }
        catch(er){

        }

    }
  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">sign up page</Typography>
        </Toolbar>
      </AppBar>
      <FormControl>
        {!otpSent ?
        <>
        <TextField
          id=""
          label="First Name"
          type="text"
          name="first_name"
          error={false}
          margin="normal"
          onChange={handleChange}
        />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
        <TextField
          id=""
          label="Last Name"
          name="last_name"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          id=""
          label="Email"
          name="email"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          id=""
          label="Password"
          type="password"
          name="password"
          margin="normal"
          onChange={handleChange}
        />
        <TextField id="" label="Confirm Password" margin="normal" />
        <TextField
          id=""
          label="Mobile"
          type="mobile"
          name="mobile"
          margin="normal"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          margin="normal"
          onClick={handleOtp}
        >
          Send OTP
        </Button>
        </>
        :
        <>
        <TextField
          id=""
          label="OTP"
          type="mobile"
          name="otp"
          margin="normal"
          onChange={handleChange}
        />
         <Button  variant="contained" color="primary" onClick={handleSubmit} >
          Login
        </Button> 
          </>
}
      </FormControl>
    </div>
  );
}

