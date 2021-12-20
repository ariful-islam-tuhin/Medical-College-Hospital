import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { regiError, registerNewUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    /*  if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    } */
    registerNewUser(email, password, name);
  };
  return (
    <div className="login-form p-4">
      <div>
        <h2>Register:Create Account</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            onBlur={handleNameChange}
            name=""
            id="text"
            placeholder="Your Name"
          />
          <br />
          <input
            type="email"
            onBlur={handleEmailChange}
            name=""
            id="email"
            placeholder="Your Email"
          />
          <br />
          <input
            type="password"
            name=""
            onBlur={handlePasswordChange}
            id="pass"
            placeholder="Your PassWord"
          />
          <br />
          <span>{error || regiError}</span>
          <input className="text-white pl-4 pr-4" type="submit" value="submit" />
        </form>
        <p>
          Already have an a account? <Link to="/login">Login</Link>
        </p>
        <div>---------or ----------</div>

        <button className="btn-regular bg-primary text-white p-1">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
