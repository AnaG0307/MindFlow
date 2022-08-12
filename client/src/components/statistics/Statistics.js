import React from "react";
import "../../App.css";
import Logo2 from "../../assets/logo2.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Statistics() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Statistics" element={<Statistics />} />
        </Routes>
      </div>
    </>
  );
}

export default Statistics;
