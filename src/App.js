import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import LoginReg from "./components/auth/LoginReg.js";
import SendPassword from "./components/auth/SendPassword.js";
import ResetPassword from "./components/auth/ResetPassword.js";
import User from "./components/User.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route  index  element={<Home />} />
          <Route  path="contact"  element={<Contact />} />
          <Route  path="login/:myvalue"  element={<LoginReg  />} />  
          <Route  path="forgetpassword"  element={<SendPassword />} />
          <Route  path="reset/:token"  element={<ResetPassword />} />               
          </Route>
          <Route  path="user"  element={<User />} />
          <Route  path="*"  element={<h1>404 Page not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
