import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errors, setErrors] = useState({});

  const storedSignupEmail = localStorage.getItem("signupEmail");
  const storedSignupPassword = localStorage.getItem("signupPassword");

  const handleLogin = (event) => {
    event.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate email and password
    if (
      loginEmail.trim() !== storedSignupEmail ||
      loginPassword.trim() !== storedSignupPassword
    ) {
      setErrors({ credentials: "Invalid email or password" });
      return;
    }

    // If login details are correct, navigate to the movie page
    navigate("/movie");
  };

  return (
    <div className="Sign template d-flex justify-content-center align-items-center 100-w vh-100 sign  ">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      ></img>
      <h2>Login Page</h2>
      <div className="40-w p-5 rounded  bg-white">
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          {errors.credentials && <div>{errors.credentials}</div>}
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Don't have an account? Sign up here.</Link>
      </div>
    </div>
  );
};

export default Login;
