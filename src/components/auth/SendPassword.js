import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";

import {
  Grid,
  TextField,
  Button,
  Box,
  Alert
} from "@mui/material";

import { NavLink ,useNavigate} from "react-router-dom";

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

const SendPassword = () => {
    const navigate=useNavigate();
    const [error, setError] = useState({
        status:false,
        msg:"",
        msgshow:false
    
      });

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data=new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),    
        }

        if(actualData.email ){
            console.log(actualData)
            document.getElementById('password_reset_form').reset()
            setError({status:false,msg:`Password link sent to ${actualData.email} Successfully`,msgshow:true})
              setTimeout(()=>{
          navigate('/>reset/:token')
         },2000)
       }else{
           setError({status:true,msg:"Email is Required",msgshow:true})
       }}

  return (
    <>
    <ThemeProvider theme={theme}>
        <Grid container justifyContent="center">
          <Grid item sm={6} md={5} xs={10}>
          <Box  component="form" noValidate sx={{ m: 2 }} id="password_reset_form" onSubmit={handleSubmit}>
          <TextField fullWidth required id="email" name="email" label="Email Address" variant="outlined" sx={{ mb: 3 }} />
          <Box textAlign="center">
            <Button
              sx={{ bgcolor: "primary.darker", m: 2, color: "primary.light" }}
              type="submit"
              color="primary"
              variant="contained">
              Send Reset Link
            </Button>
          </Box>
          <NavLink to="/login">Login</NavLink>
          {error.msgshow?<Alert severity={error.status?"error":"success"} >{error.msg}</Alert>:null}
        </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      
    </>
  )
}

export default SendPassword
