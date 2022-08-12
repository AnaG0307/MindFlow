import React from 'react';
import '../../App.css'
import '../../style/Header.css'
import '../../style/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar2';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";

function App() {
  
  return (
    <div className='App'>
    <Container>
    <h1> This is statistics page!</h1>
      <Row>
        <Col xs={12} lg={4}>

        </Col>
        <Col xs={12} lg={4}>


        </Col>
        <Col xs={12} lg={4}>


        </Col>
      </Row>
      <Sidebar />        
    </Container>
    </div>  
  );
}

export default App;



