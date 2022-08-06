import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Registration from "./registration";
import Dashboard from "../../pages/dashboard";

function login() {
  // Navigate between pages
  const navigate = useNavigate();
  const navigatetoDashboard = () => {
    navigate("/Dashboard");
  };
  const navigatetoReg = () => {
    navigate("/Registration");
  };
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  /* WORK IN PROGRESS 
Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
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
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
}; */
  return (
    <div className="App">
      <div className="form">
        <div>
          <h1>User Login</h1>
        </div>

        <form>
          <div>
            <label className="label">Enter Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="input"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <div>
            <label className="label">Enter Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <div>
            <button onClick={navigatetoDashboard} className="btn" type="submit">
              Submit
            </button>
            <hr />
            <button onClick={navigatetoReg} className="btn" type="submit">
              Register Here{" "}
            </button>
          </div>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </form>
      </div>{" "}
    </div>
  );
}

export default login;
