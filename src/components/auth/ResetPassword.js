import { Grid } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,Box,Alert,InputAdornment,Button,OutlinedInput,IconButton,InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate, Navigate} from "react-router-dom";
import CustomAlert from '../Utlis/CustomAlert';



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


const ResetPassword = () => {
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
const handleSubmit= async(e)=>{
    e.preventDefault()
    const data=new FormData(e.currentTarget);
    const actualData={
        password:data.get('password'),
        confirm_password:data.get('confirm_password'),   
    }
    
    if(actualData.password && actualData.confirm_password ){
          if(actualData.password === actualData.confirm_password){
         document.getElementById('Reset-form').reset();
         setError({status:false,msg:" Password Reset Successfully",msgshow:true}) ;
          // CustomAlert.showAlert(" Password Reset Successfully", 'success');
         navigate('/login/true')
        //  setTimeout(()=>{
        //   navigate('/login/true')
        //  },2000)
    }
         else{
          setError({status:true,msg:"Password and Confirm Password not match",msgshow:true})
        
          CustomAlert.showAlert("Password and Confirm Password not match", 'error');
         }
    }else{
        setError({status:true,msg:"All fields are Required",msgshow:true})
      
        CustomAlert.showAlert("All fields are Required", 'error');
    }
}
  return (
    <>
   
      <Grid container justifyContent="center">
        <Grid item sm={6} md={5} xs={10}>
        
            <Box  component="form" noValidate sx={{ m: 1 }} id="Reset-form" onSubmit={handleSubmit}>
        <FormControl fullWidth variant="outlined" sx={{mb:2}}>
            <InputLabel htmlFor="password">New Password</InputLabel>
            <OutlinedInput
              label="New Password"
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

          <Box textAlign="center">
            <Button
              sx={{ bgcolor: "#1e3d58", m: 2, color: "#e8eef1" }}
              type="submit"
              size="small"
              variant="contained">
              Reset
            </Button>
            <CustomAlert />
          </Box>
          </Box>
         
          {/* <Navbar data={"Password Reset Successfully"} /> */}
          
          {/* {error.msgshow?<Alert severity={error.status?"error":"success"}>{error.msg}</Alert>:null} */}
      
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
