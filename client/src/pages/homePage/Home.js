import React from "react";
import "../../App.css";
import Sidebar from "../../components/sidebar/Sidebar2.js";

function Home(props) {
  return (
    <div className="App">
      <h2>Hello, how are you feeling today?</h2>
      <span>😀 😐 🙁 </span>
      <Sidebar />
    </div>
  );
}

export default Home;
