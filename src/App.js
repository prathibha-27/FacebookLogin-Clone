import React, { useState } from "react";
import "./App.css";

function App() {
  const pass = "Mythireyan";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);

  const emailValidation = () => {
    return (email && !email.includes("@")) || !email.includes(".com")
      ? true
      : false;
  };

  const passwordValidation = () => {
    return password !== pass ? true : false;
  };

  const validateForm = (e) => {
    e.preventDefault();
    setClick(true);
    return emailValidation() || passwordValidation()
      ? null
      : alert("logged in successfully");
  };
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">facebook</h1>
        <div className="card">
          <h6>Log in to Facebook</h6>
          <form
            autoComplete="off"
            className="form"
            onSubmit={(e) => validateForm(e)}
          >
            <input
              type="text"
              name="name"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address or phone number"
            />
            {click && !email ? (
              <p className="errorMessage">This is a required field</p>
            ) : null}
            {click && email && emailValidation() ? (
              <p className="errorMessage">Invalid email</p>
            ) : null}
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            {click && !password ? (
              <p className="errorMessage">This is a required field</p>
            ) : null}
            {click && password && passwordValidation() ? (
              <p className="errorMessage">Invalid password</p>
            ) : null}
            <button type="submit">Log In</button>
          </form>
          <div className="cta">
            <a className="cta_forgot" href="#">
              forgotten account
            </a>
            <a className="cta_signup" href="">
              signup for facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
