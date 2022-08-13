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
      <Container>
        <Row>
          <Col xs={12} lg={1}>
            <Sidebar />
          </Col>
          <h3 className="ppagetitle">Calculate Your Next Period</h3>
          <Col xs={12} lg={7}>
            <div className="prightcol">
              <Period />
            </div>
          </Col>
          <Col xs={12} lg={4} style={{ paddingLeft: 0 }}>
            <div>
              <img
                src={CalendarPage}
                alt="CalendarPagePNG"
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
