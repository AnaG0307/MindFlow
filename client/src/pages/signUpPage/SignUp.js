import React from 'react';
import '../../App.css'
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/logo2.png"
import RegisterPage from "../../assets/RegisterPage.png"
import '../../style/Header.css'
import '../../style/index.css'
import Button from 'react-bootstrap/Button';
import Registration from '../../components/login/Registration.js';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';

import Sidebar from "../../components/sidebar/Sidebar";

function SignUp() {
  return (
    <div className="App">
      
      <Registration />
    </div>
  );
}

export default SignUp;