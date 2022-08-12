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
import Sidebar from "../../components/sidebar/Sidebar2.js";
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
        <Col xs={12} lg={1}>
        <Sidebar />
        </Col>
        <Col xs={12} lg={7} style={{ padding: 0}}>
        <h2 className="pagetitle">Calculate Your Next Period</h2>
        <div className= "rightcol">
        <Period />
        </div>
        </Col>
        <Col xs={12} lg={4} style={{paddingLeft:0 }}>
        <div>          
        
        <img
          src={CalendarPage} 
          alt= "CalendarPagePNG" 
          className="CalendarPagePNG"
          width="450" 
          height="400"
          /> 
        </div>

        </Col>
      </Row>
      
    </Container>
    </div>
  );
}

export default PeriodPage;

