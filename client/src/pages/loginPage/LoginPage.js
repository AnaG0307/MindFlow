import React from "react";
import "../../App.css";
import SignInPage from "../../assets/SignInPage.png";
import "../../style/Header.css";
import "../../style/index.css";
import "../../style/Login.css";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Login from "../../components/login/Login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SignIn() {
  const navigate = useNavigate();

  const navReset = () => {
    navigate("/Reset");
  };
  return (
    <div>
      <div className="App">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <div>
                <h1 className="signinheadline">Welcome Back!</h1>
                <img
                  src={SignInPage}
                  alt="SignInPagePNG"
                  className="SignInPagePNG"
                  width="500"
                  height="550"
                />
              </div>
            </Col>

            <Col xs={12} lg={4} style={{ paddingRight: 100, paddingTop: 50 }}>
              <div className="col2">
                <Login />
              </div>
              <div>
                <button onClick={navReset} className="resetbtn" type="button">
                  Reset your password
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SignIn;
