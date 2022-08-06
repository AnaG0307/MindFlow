import React from "react";
import Period from "../components/period/Period.js"

import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";

function App () {
  return (
    <div>
      <Period/>
    </div>
  );
}

export default App;