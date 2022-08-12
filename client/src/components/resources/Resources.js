import "../../App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Resources() {
  return (
    <div>
      <h1> Welcome </h1>
      <Routes>
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default Resources;
