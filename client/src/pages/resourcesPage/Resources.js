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

// function ResourcesPage() {
//   return (
//     <div className="ResourcesPage">
//     <Container>
//       <Row>
//         <Sidebar />
//         <div>    
//         <img src={ResourcesImage} alt= "2 ladies" className="resources-image"/>
//         </div>
//         <div>
//         <h1 className="firstTitle"> Your mental wellbeing matters </h1>
//         <h3 className="resourcesHeading"> If you are in need of help please see some links and helpful guides below 
//         </h3> 
//         <div className="Resources-table">
//         <div className="Resources">
//         <h3 className="paragraph">Helpful Articles</h3>
//         <p> Helpful articles, personal experiences and tips from young people and our MindFlow team.
//         </p>
//         </div>
//         <div className="Resources">
//         <h3 className="paragraph">Mental Health</h3>
//         <p> Start or join a conversation with our friendly MindFlow community.
//         </p>
//         </div>
//         <div className="Resources">
//         <h3 className="paragraph">Chat to a specialist</h3>
//         <p> Links to local therapists in your area.
//         </p>
//         </div>
//         </div>
//         </div>
//         <Resources />
//       </Row>
//       </Container>
      
//     </div>
//   );
// }

function ResourcesPage() {
  return (
    <div className="ResourcesPage">
    <Sidebar />
      <Container>

        <Row>
          <h3 className="firstTitle">Your mental wellbeing matters</h3>
          <h3 className="resourcesHeading"> If you are in need of help please see some links and helpful guides below 
          </h3> 
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
        <p> Links to local therapists in your area.
        </p>
        <div className="Resources">
        <h3 className="paragraph">Chat to a specialist</h3>
        <p> Links to local therapists in your area.
        </p>
        </div>      
          </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



export default ResourcesPage;


