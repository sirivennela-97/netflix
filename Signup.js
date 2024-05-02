import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    // Store signup details in local storage
    localStorage.setItem("signupEmail", signupEmail);
    localStorage.setItem("signupPassword", signupPassword);

    // After successful signup, navigate to login
    navigate("/login");
  };

  return (
    <div className="Sign template d-flex justify-content-center align-items-center 100-w vh-100 sign  ">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      ></img>

      <h2>Signup Page</h2>
      <div className="40-w p-5 rounded  bg-white">
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        <Link to="/login">Already have an account? Login here.</Link>
      </div>
    </div>
  );
};

export default SignUp;
