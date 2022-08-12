import React from "react";
import "../../App.css";
import Logo2 from "../../assets/logo2.png";
import Sidebar from "../sidebar/Sidebar2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Resources() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  );
}

export default Resources;
