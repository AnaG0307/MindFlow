import React from "react";
import "../../App.css";
import Logo2 from "../../assets/logo2.png"
import Sidebar from "../sidebar/Sidebar2";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";

function Questionnaire () {
return (
    <div> 
    <Sidebar />
    <h1> This is a questionnaire </h1>
    <Routes>
          <Route path="/questionnaire" element={<Questionnaire/>} />
        </Routes>
    </div>
)

}
export default Questionnaire;