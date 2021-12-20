import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";

const Login = () => {
  const { logError, processLogin, handleGoogleSignIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    handleGoogleSignIn().then(() => {
      history.push(redirect_uri);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    processLogin(email, password);
  };
  return (
    <div>
      <div className="login-form">
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogIn}>
            <input
              type="email"
              onBlur={handleEmailChange}
              name=""
              id="gmail"
              placeholder="Your Email"
            />
            <br />
            <input
              type="password"placeholder="Password"
              onBlur={handlePasswordChange}
              name=""
              id="password"
            />
            <br />
            <br />
        
            <span>{logError}</span>
            <input className="ps-3 pe-3 text-white" type="submit" placeholder="Submit"/>
            <br />
            <br />
            <br />
          </form>

          <p>
            new to Arif medical college <Link to="/register">Creat Account</Link>{" "}
          </p>

          <div>---------or ----------</div>
          <br />
       
          <button className="btn-regular bg-primary text-white p-1" onClick={handleGoogleLogin}>
            Google Sign In
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
