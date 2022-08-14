import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "../../style/Login.css";
import {getAuth, signInWithEmailAndPassword,} from "firebase/auth";

//Log in firebase function

export default function Login() {

  const location = useLocation();
  const navigate = useNavigate();


  const navSignUp = () => {
    navigate("/SignUp");
  };
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const auth = getAuth();

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        fields.email,
        fields.password
      );
      if (user) {

        navigate("/questionnaire");
        console.log("Called");
        console.log(user);
      }
    } catch (err) {
      console.log(err);
      setError("Invalid email address or password.");
    }
  };

  return (
    <div>
      {location.state && location.state.message ? (
        <p>{location.state.message}</p>
      ) : null}
      <h1 className="logintxt">Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="emailtxt">
            Email Address
          </label>
        </div>
        <div>
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
          <label htmlFor="password" className="passtxt">
            Password
          </label>
        </div>
        <div classname="break">
        </div>
        <div>
          <input
            className="input"
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            required
          />
        </div>

        {error ? <p>Error: {error}</p> : null}
        <div>
          <button className="submitbtn" type="submit">
            Submit
          </button>
          <hr />
          <button onClick={navSignUp} className="regbtn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
