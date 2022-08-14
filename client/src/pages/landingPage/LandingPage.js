import React from "react";
import "../../App.css";
import Logo2 from "../../assets/logo2.png";
import LandingImage from "../../assets/LandingImage.png";
import "../../style/Header.css";
import "../../style/index.css";
import Button from "react-bootstrap/Button";
import "../../style/LandingPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row>
          <Col xs={12} lg={6}>
            <img
              src={Logo2}
              alt="MindFlow logo"
              className="landinglogo"
              width="120"
              height="100"
            />
            <h1 className="landingheader">MindFlow</h1>
            <h4 className="landingtagline">Your wellbeing companion</h4>
            <img
              src={LandingImage}
              alt="MindFlow logo"
              className="landingimage"
              width="550"
              height="500"
            />
          </Col>
          <Col xs={12} lg={6}>
            <div>
              <h3 className="landingheadline">Your journey starts here</h3>
              <div className="paracont">
              <p className="landingpararaph">
                At MindFlow, we believe in connecting with both our bodies 
                <br />
                and our cycles. By gaining valuable insight into our menstrual
                <br />
                cycles, we can become better equipped to make decisions 
                <br />
                about our bodies that work for us.
                <br />
                <img
                  src={Logo2}
                  alt="MindFlow logo"
                  className="landinglogo2"
                  width="25"
                  height="22"
                />
                <br />
                It can often be difficult for women to access information and
                <br />
                support for women's health, so here at MindFlow we hope to 
                <br />
                be the first step in your journey to understanding your body's{" "}
                <br />
                relationship mestruation and wellbeing.
              </p>
              </div>
              <div className="buttongroup">
                <Link to="/SignUp">
                  <Button className="signupbutton" size="med">
                    Sign Up
                  </Button>
                </Link>
                <h6 className="or">OR</h6>
                <Link to="/Login">
                  <Button className="loginbutton" size="med">
                    Log in
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
