import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { getAuth } from "firebase/auth";
import axios from "axios";
import "../../style/SignUpPage.css";

//Register user function

export default function Registration() {
  
  const auth = getAuth();
  const navigate = useNavigate();
  const navLogIn = () => {
    navigate("/Login");
  };


  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // Send user data to a database

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fields.password.length < 6) {
      return setError("Password must be at least 6 characters in length.");
    }
    if (fields.confirmPassword !== fields.password) {
      return setError("Password and confirm password must match.");
    }

    try {
      const req = await axios.post("http://localhost:4000/api/user", {
        email: fields.email,
        password: fields.password,
        name: fields.name,
        surname: fields.surname,
      });
      const message = req.data.success;
      return navigate("/Login", {
        replace: true,
        state: {
          message,
        },
      });
    } catch (err) {
      const errMessage = err.response.data.error;
      return setError(errMessage);
    }
  };

  return (
    <div className="App">
      <div className="form">
        <div>
          <h2 className="register">Register</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="name">
              First Name
            </label>
            <input
              className="input"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="label" htmlFor="surname">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              name="surname"
              value={fields.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="label" htmlFor="password">
              Password
            </label>

            <input
              className="input"
              type="password"
              name="password"
              value={fields.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="confirmPassword">
              Confirm Password
            </label>
          </div>
          <div>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              value={fields.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error ? <p>Error: {error}</p> : null}
          <div>
            <button type="submit" className="signupbutt1">
              Sign Up
            </button>
            <hr />
            <button onClick={navLogIn} className="signupbutt2" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
