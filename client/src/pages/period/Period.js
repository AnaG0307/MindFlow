import React from "react";
import "../../App.css";
import "../../style/Period.css";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import LandingImage from "../../assets/LandingImage.png";
import "../../style/Header.css";
import "../../style/index.css";
import Period from "../../components/period/Period.js";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";

function PeriodPage() {
  return (
    <div>
      <Period />
    </div>
  );
}

export default PeriodPage;
