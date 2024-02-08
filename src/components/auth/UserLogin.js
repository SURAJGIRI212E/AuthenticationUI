import React, { useState, useEffect } from "react";
import {  useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  TextField,
  Button,
  Box,
  Alert,
  InputAdornment,
  OutlinedInput,
  IconButton,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink ,useNavigate} from "react-router-dom";
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

const  UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    status:false,
    msg:"",
    msgshow:false
  });
  const navigate = useNavigate();

  const { myvalue } = useParams();
  const [value, setValue] = useState(myvalue === 'true');
  useEffect(() => {
    if (value) {
      CustomAlert.showAlert("Password Reset Successfully", 'success');
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password')
    };
    
    if (actualData.email && actualData.password) {
      
      document.getElementById('login-form').reset();
      setError({status:false,msg:"Login Successfully",msgshow:true});
      CustomAlert.showAlert("Login Succecfully", 'success')
      navigate("/user");
    } else {
      setError({status:true,msg:"All fields are Required",msgshow:true});
      // CustomAlert.showAlert("All fields are Required", 'error')
    }
  };

  return (
    <>
      {/* {value ? <Alert sx={{top:'0px'}} severity="success" onClose={() =>setValue(false)}>Password reseted</Alert> : null} */}
    
      <ThemeProvider theme={theme}>
        <Box  component="form" noValidate sx={{ m: 2 }} id="login-form" onSubmit={handleSubmit}>
          <TextField fullWidth required id="email" name="email" label="Email Address" variant="outlined" sx={{ mb: 3 }} />
          <FormControl fullWidth variant="outlined">
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
          <Box textAlign="center">
            <Button
              sx={{ bgcolor: "primary.darker", m: 2, color: "primary.light" }}
              type="submit"
              color="primary"
              variant="contained">
              Login
            </Button>
          </Box>
          <NavLink to="/forgetpassword">Forget Password?</NavLink>
          {error.msgshow ? <Alert severity={error.status ? "error" : "success"}>{error.msg}</Alert> : null}
          <CustomAlert />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default UserLogin;
