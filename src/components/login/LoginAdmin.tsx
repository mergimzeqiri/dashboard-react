import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authentication/Authcontext";
import { addUser } from "../context/authentication/AuthProvider";
import LoginForm from "./LoginForm";

function LoginAdmin() {
  const auth = useAuthContext();
  const navigate = useNavigate();

  const adminUser = {
    email: "mergim@hotmail.com",
    password: "123",
  };

  const Login = (details: addUser) => {
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      auth.addUserFunction(details);
      navigate("/");
    } else alert("YOUR USERNAME OR PASSWORD IS WRONG");
  };
  return (
    <div>
      <LoginForm Login={Login} />
    </div>
  );
}

export default LoginAdmin;
