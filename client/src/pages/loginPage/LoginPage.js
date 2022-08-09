import React from 'react';
import '../../App.css'
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/logo2.png"
import RegisterPage from "../../assets/RegisterPage.png"
import '../../style/Header.css'
import '../../style/index.css'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';


import Login from '../../components/login/Login';




import Sidebar from "../../components/sidebar/Sidebar";


function SignIn() {

  const navigate = useNavigate();
  
  const navReset = () => {
    navigate("/Reset");
  };
  return (

    <div className="App">
    <div>
      
      <Login />

    </div>
   <button onClick={navReset} className="btn" type="button">
   Reset your password
   </button>
    
</div>
   
   
    
  );
}

export default SignIn;