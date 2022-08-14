import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import Logo2 from "../../assets/logo2.png";
import "../../style/Header.css";
import "../../style/index.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleAnchorClick = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        navigate("/logout");
        console.log("user signed out");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Navbar key={false} expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Logo2}
            alt="MindFlow logo"
            className="mfl-logo"
            width="49"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
          className="headerbar"
          style={{ fontSize: "20px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavheaderbarbarLabel-expand-false`}>
              MindFlow
              <img
                src={Logo2}
                alt="MindFlow logo"
                className="mfl-logo"
                width="40"
                height="30"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/UserProfile">Profile</Nav.Link>
              <Nav.Link href="/settings">Settings</Nav.Link>
              <Nav.Link onClick={handleAnchorClick}> Log out</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
