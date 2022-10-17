import { useState } from "react";

function LoginForm({ Login }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <section>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <button>Sign In</button>
      </form>
    </section>
  );
}

export default LoginForm;
