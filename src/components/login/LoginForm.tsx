import { useState } from "react";
import { addUser } from "../context/authentication/AuthProvider";
import "./LoginAdminStyle.scss";
interface loginProps {
  Login: (details: addUser) => void;
}
function LoginForm({ Login }: loginProps) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <section className="loginSection">
      <h1 className="signInTitle">Sign In</h1>
      <form onSubmit={(e) => submitHandler(e)} className="loginForm">
        <label htmlFor="name" className="emailLabel">
          Email:
        </label>
        <input
          className="emailInput"
          type="text"
          id="name"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
        />
        <label htmlFor="password" className="passwordLabel">
          Password:
        </label>
        <input
          className="passwordInput"
          type="password"
          id="password"
          required
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <button className="signInButton">Sign In</button>
      </form>
    </section>
  );
}

export default LoginForm;
