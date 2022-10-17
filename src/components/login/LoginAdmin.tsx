import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../authentication/Authcontext";
import LoginForm from "./LoginForm";

function LoginAdmin() {
  const auth = useAuthContext();

  const navigate = useNavigate();

  const adminUser = {
    email: "mergim@hotmail.com",
    password: "123",
  };

  const Login = (details) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      auth.addUserFunction(details);
      navigate("/");
    } else {
      alert("YOUR USERNAME OR PASSWORD IS WRONG");
    }
  };
  return (
    <div>
      <LoginForm Login={Login} />
    </div>
  );
}

export default LoginAdmin;
