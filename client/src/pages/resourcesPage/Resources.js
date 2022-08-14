import React from "react";
import "../../App.css";
import "../../style/index.css";
import Sidebar from "../../components/sidebar/Sidebar2.js";
import Resources from "../../components/resources/Resources.js";
import "../../style/Resources.css";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import ResourcesImage from "../../assets/Resources.png"
import Article from "../../assets/Article.png"
import Friend from "../../assets/friend.png"
import Mentalhealth from "../../assets/mental-health.png"

function ResourcesPage() {
  return (
    <div className="ResourcesPage">
    <Sidebar />
      <Container>
        <Row>
          <h3 className="firstTitle">Your mental wellbeing matters</h3>
          <h3 className="resourcesHeading"> If you are in need of help please see some links and helpful guides below </h3> 
          <Col xs={12} lg={8} style={{ paddingLeft: 0 }}>
            <div className="rightcols">
              <Resources />
            </div>
          </Col>
          <Col xs={10} lg={4} style={{ paddingLeft: 0, marginLeft: 500 }}>
            <div>
              <img src={ResourcesImage} alt= "2 ladies" className="resources-image"/>
            </div>
        <div className="Resources-table">
        <div className="Resources">
        <h3 className="paragraph"> <a href="https://www.mentalhealth.org.uk/explore-mental-health/blogs" target="_blank" rel="noreferrer"><img src={Article} alt= "article" className="article-image"/></a>Helpful Articles</h3>
        <p> Helpful articles, blogs and personal experiences and tips from young people and our MindFlow team.
       </p>
       </div>
     <div className="Resources">
       <h3 className="paragraph"><a href="https://www.nhs.uk/nhs-services/mental-health-services/" target="_blank" rel="noreferrer"><img src={Mentalhealth} alt= "mental-health" className="mental-image"/></a>Mental Health</h3>
         <p> Start or join a conversation with our friendly MindFlow community.
        </p>
         </div>
         <div className="Resources">
        <h3 className="paragraph"><a href="https://www.counselling-directory.org.uk/" target="_blank" rel="noreferrer"><img src={Friend} alt= "friend" className="friend-image"/></a>Chat to a specialist</h3>
        <p> Find some local therapists in your area to receive extra counselling.
        </p>   
          </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



export default ResourcesPage;


