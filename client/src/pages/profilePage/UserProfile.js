import React from "react";
import "../../App.css";
import "../../style/Header.css";
import "../../style/index.css";
import UserProfile from "../../components/userProfile/UserProfile"
import Sidebar from "../../components/sidebar/Sidebar2";

function UserPage() {
  return (
    <div className="App">
    <Sidebar/> 
    <UserProfile />
    </div>
    
  );
}

export default UserPage;
