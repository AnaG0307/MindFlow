import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Landing Page/App';
import Header from './Components/Header';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer'
import Dashboard from './pages/Dashboard';
import Registration from './Components/Login/Registration';
import Login from './Components/Login/login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} /> 
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
