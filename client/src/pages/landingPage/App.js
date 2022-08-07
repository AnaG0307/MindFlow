import React from 'react';
import '../../App.css'
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/logo2.png"
import LandingImage from "../../assets/LandingImage.png"
import '../../style/Header.css'
import '../../style/index.css'
import Button from 'react-bootstrap/Button';
import '../../style/LandingPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  
  return (
    <div className='App'>
    <Container>
      <Row>
        <Col xs={12} lg={6}>
            <img
            src={Logo2} 
            alt= "MindFlow logo" 
            className="landinglogo"
            width="120" 
            height="100"
            />	
              <h1 className="landingheader">MindFlow</h1>
              <h4 className="landingtagline">Your wellbeing companion</h4>
              <img
            src={LandingImage} 
            alt= "MindFlow logo" 
            className="landingimage"
            width="550" 
            height="500"
            /> 
        </Col>
        <Col xs={12} lg={6}>
          <div className="rhc">
                <h3 className="landingheadline">Your journey starts here</h3>
                <text className="landingpararaph">Lorem ipsum dolor sit amet, consectetur adipiscing elit,adipiscing<br/> 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br/>
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa <br/>
                qui officia deserunt mollit anim id est laborum.</text>	
                <div className="buttongroup">
                <Button className="signupbutton" size="med">Sign Up</Button>
                <h6 className="or">OR</h6>
                <Button className="loginbutton" size="med">Log in</Button>
                </div>
          </div>
        </Col>
      </Row>        
    </Container>
    </div>  
  );
}

export default App;
