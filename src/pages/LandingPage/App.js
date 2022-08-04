import React from 'react';
import '../../App.css'
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/logo2.png"
import '../../style/Header.css'
import '../../style/index.css'


function App() {
  
  return (

    <div className='App'>
    <img
    src={Logo2} 
    alt= "MindFlow logo" 
    className="mfl-logo"
    width="120" 
    height="100"
    />	
      <h1>MindFlow</h1>
      <h3>Your wellbeing companion</h3>
    </div>
  );
}

export default App;
