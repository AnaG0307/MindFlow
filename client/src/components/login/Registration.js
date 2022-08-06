import React, { useState } from "react";
import login from "./Login";
import Dashboard from "../../pages/dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Registration() {
  // Navigate between pages
  const navigate = useNavigate();
  const navigatetoDashboard = () => {
    navigate("/Dashboard");
  };
  const navigatetoLogin = () => {
    navigate("/login");
  };
  // Registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleFName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  const handleLName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {firstName} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="form">
        <div>
          <h1>User Registration</h1>
        </div>

        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          <div>
            {/* Labels and inputs for form data */}
            <label className="label">First Name</label>
            <input
              onChange={handleFName}
              className="input"
              value={firstName}
              type="text"
            />
          </div>

          <div>
            <label className="label">Last Name</label>
            <input
              onChange={handleLName}
              className="input"
              value={lastName}
              type="text"
            />
          </div>

          <div>
            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />
          </div>

          <div>
            <button onClick={navigatetoDashboard} className="btn" type="submit">
              Submit
            </button>
            <hr />
            <button onClick={navigatetoLogin} className="btn" type="submit">
              {" "}
              Login Here{" "}
            </button>
          </div>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/login" element={<login />} />
          </Routes>
        </form>
      </div>
    </div>
  );
}

export default Registration;
