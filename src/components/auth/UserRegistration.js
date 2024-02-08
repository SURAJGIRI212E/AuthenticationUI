
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
  Alert,
  InputAdornment,
  OutlinedInput,
  IconButton,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate} from "react-router-dom";

const theme = createTheme({
    palette: {
      primary: {
        light: "#d1dbe4",
        main: "#a3b7ca",
        dark: "#476f95",
        darker: "#194a7a",
      },
    },
  });

const UserRegistration = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    status:false,
    msg:"",
    msgshow:false

  });
  const navigate=useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
const handleSubmit=(e)=>{
    e.preventDefault()
    const data=new FormData(e.currentTarget);
    const actualData={
        name:data.get('name'),
        email:data.get('email'),
        password:data.get('password'),
        confirm_password:data.get('confirm_password'),
        tc:data.get('tc')
    }
    
    if(actualData.name && actualData.password &&
         actualData.email && actualData.confirm_password && actualData.tc!==null){
          if(actualData.password === actualData.confirm_password){
         console.log(actualData)
         document.getElementById('Registration-form').reset()
         setError({status:false,msg:"Registration Successfully",msgshow:true})
         navigate("/user")}
         else{
          setError({status:true,msg:"Password and Confirm Password not match",msgshow:true})
         }
    }else{
        setError({status:true,msg:"All fields are Required",msgshow:true})
    }
}

  return (
    <>
    <ThemeProvider theme={theme}>
        <Box  component="form" noValidate sx={{ m: 1 }} id="Registration-form" onSubmit={handleSubmit}>
          <TextField fullWidth required id="name" name="name" label="Full Name" variant="outlined" sx={{ mb: 3 }} />
          <TextField fullWidth required id="email" name="email" label="Email Address" variant="outlined" sx={{ mb: 3 }} />
          {/* <TextField required type='password' id="password" name='password' label="Password" variant="outlined" /> */}
          <FormControl fullWidth variant="outlined" sx={{mb:2}}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
{/*  */}
          <FormControl fullWidth variant="outlined">
<InputLabel htmlFor="confirm_password"> Confirm Password</InputLabel>
            <OutlinedInput
              label="Confirm Password"
              id="confirm_password"
              name="confirm_password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControlLabel required control={<Checkbox color="primary" value="agree" name="tc" id="tc" />} label="I Agree to Terms and Condition" />
              
          <Box textAlign="center">
            <Button
              sx={{ bgcolor: "primary.darker", mt:1, color: "primary.light" }}
              type="submit"
              color="primary"
              variant="contained">
              Registration
            </Button>
          </Box>

         
          {error.msgshow?<Alert severity={error.status?"error":"success"}>{error.msg}</Alert>:null}
        </Box>
      </ThemeProvider>
      
    </>
  )
}

export default UserRegistration

