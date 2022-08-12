import React from "react";
import "../../App.css";
import Logo2 from "../../assets/logo2.png";
import Sidebar from "../sidebar/Sidebar2";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Resources() {
  return (
    <div>
      <Sidebar />
      <h1> This is resources page again </h1>
      <Routes>
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default Resources;
