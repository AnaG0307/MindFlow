import React from "react";
import "../../App.css";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import LandingImage from "../../assets/LandingImage.png";
import "../../style/Header.css";
import "../../style/index.css";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img
        src={Logo2}
        alt="MindFlow logo"
        className="mfl-logo"
        width="120"
        height="100"
      />
      <h1>MindFlow</h1>
      <h4>Your wellbeing companion</h4>
      <img
        src={LandingImage}
        alt="MindFlow logo"
        className="mfl-logo"
        width="550"
        height="500"
      />
      <h4>Your journey starts here</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Button variant="signup" size="lg">
        <Link to="registerpage.js">Sign Up</Link>
      </Button>{" "}
      <p>OR</p>
      <Button variant="login" size="lg">
        Log in
      </Button>{" "}
      <Button variant="period" size="lg">
        <Link to="./Period/period.js">Period Calendar</Link>
      </Button>{" "}
    </div>
  );
}

export default App;
