import React from "react";
import "../../App.css";
import "../../style/Header.css";
import "../../style/index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Statistics from "../../components/statistics/Statistics";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar2";

function StatisticsPage() {
  return (
    <div className="Statistics">
      <Sidebar />
      <Statistics />
      <Container>
        <p>statistics page</p>
        <Row>
          <Col xs={12} lg={4}></Col>
          <Col xs={12} lg={4}></Col>
          <Col xs={12} lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default StatisticsPage;
