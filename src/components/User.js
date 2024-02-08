import React from "react";
import { CssBaseline, Grid, Typography,Button } from "@mui/material";
import ResetPassword from "./auth/ResetPassword";
import Navbar from "./Navbar";
import { useNavigate} from "react-router-dom";

const User = () => {
  const navigate=useNavigate();
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Grid>
        <Grid item sm={2} sx={{ backgroundColor: "#d6e6ff", p: 5, color: "#003f5c" }}>
        <h1 style={{textAlign:"center", margin:"1%"}}>Dashboard</h1>
          <Typography variant="h5">Email:suraj212@gmail.com</Typography>
          <Typography variant="h6">Name: suraj</Typography>
          <Button
              sx={{ backgroundColor: "#1e3d58", m: 2, color: "#e8eef1" }}
              type="submit"
              size="small"
              color="primary"
              onClick={()=>{navigate("/")}}
              variant="contained">
              Logout
            </Button>
          <ResetPassword xs={7}/>
        </Grid>
      </Grid>
    </>
  );
};

export default User;
