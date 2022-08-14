import React from "react";
import "../../App.css";
import "../../style/Period.css";
import "../../style/Header.css";
import "../../style/index.css";
import Period from "../../components/period/Period.js";
import Sidebar from "../../components/sidebar/Sidebar2.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarPage from "../../assets/CalendarPage.png";

function PeriodPage() {
  return (
    <div className="PeriodPage">
    <Sidebar />
      <Container>
          <h3 className="ppagetitle">Calculate Your Next Period</h3>

            <div className="prightcol">
              <Period />
            </div>
      </Container>
    </div>
  );
}

export default PeriodPage;
