import React from "react";
import "../../App.css";
import Sidebar from "../../components/sidebar/Sidebar2.js";
import Resources from "../../components/resources/Resources.js";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResourcesImage from "../../assets/Resources.png"

function ResourcesPage() {
  return (
    <div className="ResourcesPage">
    <Container>
      <Row>
        <Col xs={12} lg={1}>
        <Sidebar />
        </Col>
        <Col xs={12} lg={7} style={{ padding: 0}}>
        <h1 className="pagetitle"> Your mental wellbeing matters </h1>
        <div className="rightcol">
        <h3 className="heading"> If you are in need of help please see some links and helpful guides below 
        </h3> 
        <div className="Resources-table">
        <div className="Resources">
        <h3 className="paragraph">Helpful Articles</h3>
        <p> Helpful articles, personal experiences and tips from young people and our MindFlow team.
        </p>
        </div>
        <div className="Resources">
        <h3 className="paragraph">Mental Health</h3>
        <p> Start or join a conversation with our friendly MindFlow community.
        </p>
        </div>
        <div className="Resources">
        <h3 className="paragraph">Chat to a specialist</h3>
        <p> Chat to our helpful team about anything that's on your mind. Message us or have a live chat.
        </p>
        </div>
        </div>
        </div>
        <Resources />
        </Col>
        <Col xs={12} lg={4} style={{paddingLeft:0 }}>
        <div> 
        <img
			src={ResourcesImage} 
			alt= "2 ladies" 
			className="resources-image"
			width="850" 
      height="750"
      style={{ paddingRight: 10, paddingTop: 20}}
			/>
        </div>
        </Col>
      </Row>
      </Container>
      
    </div>
  );
}

export default ResourcesPage;


