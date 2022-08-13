import React from "react";
import "../../App.css";
import "../../style/Header.css";
import "../../style/index.css";
import Container from "react-bootstrap/Container";
import logout from "../../assets/logout.png";
import "../../style/Logout.css";

function Logout() {
  return (
    <div className="App">
      <Container>
        <h1 className="seeya"> See you again soon!</h1>
        <img
          src={logout}
          alt="logoutpng"
          className="logoutpng"
          width="250"
          height="500"
        />
      </Container>
    </div>
  );
}

export default Logout;
