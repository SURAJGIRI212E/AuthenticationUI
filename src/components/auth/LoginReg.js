import React, { memo, useState } from "react";
import { Grid, Card, Tabs, Tab, Box } from "@mui/material";
import p1 from "../../images/p1.png";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div  hidden={value !== index}>
      {value === index ? <Box>{children}</Box> : null}
    </div>
  );
};

const Image=memo(()=>{
    return(
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            height:"90%",
            backgroundImage: `url(${p1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
    )
})

const LoginReg = () => {
  const [value, setValue] = useState(0);

  const handlechange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ height: "85vh" }}>
        <Image />
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box sx={{ borderBottom: "1px blue dotted" }}>
                <Tabs
                  sx={{
                    ".MuiTabs-indicator": {
                      backgroundColor: "#194a7a",
                    },
                  }}
                  value={value}
                  onChange={handlechange}
                  textColor="primary"
                  indicatorColor="secondary"
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
               {/* my component */}
              <TabPanel value={value} index={0}>
               
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <UserRegistration />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
