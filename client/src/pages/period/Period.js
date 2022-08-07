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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarPage from "../../assets/CalendarPage.png"

function PeriodPage() {
  return (
    <div className="PeriodPage"> 
    <Container>
      <Row>

        <Col xs={12} lg={6}>
          <div>
          <img
            src={CalendarPage} 
            alt= "CalendarPagePNG" 
            className="CalendarPagePNG"
            width="570" 
            height="600"
            /> 
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div>
          <Period />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default PeriodPage;
