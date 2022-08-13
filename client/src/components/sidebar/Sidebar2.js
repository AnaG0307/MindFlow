import React from "react";
import "../../style/SideBar2.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Sidebar() {
  return (
    <div className="ALLSIDEBAR">
      <ul className="sidebar" >
        <div className="logo">
          <img
            src={Logo}
            alt="MindFlow logo"
            className="mfl-logo"
            width="49"
            height="40"
          />
        </div>
        <li>
          <span>
            <Link to="/questionnaire">
              <div className="Questionnaire"></div>
              Questionnaire
            </Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/period">
              <div className="Calendar"></div>
              Calendar
            </Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/statistics">
              <div className="Statistics"></div>
              Statistics
            </Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/resources">
              <div className="Resources"></div>
              Resources
            </Link>
          </span>
        </li>
      </ul>
      <div className="content"></div>
    </div>
  );
}

export default Sidebar;

{
  /* 
    // <ProSidebar className='container'>
    //     <SidebarHeader> Dashboard</SidebarHeader>
    //     <SidebarContent>
    //         <Menu iconShape='column'>
    //         <MenuItem>User profile</MenuItem>
    //         <MenuItem>Daily Quiz</MenuItem>
    //         <MenuItem>Calendar/Cycle tracker</MenuItem>
    //         <MenuItem>User Stats</MenuItem>
    //     </Menu>
    //     </SidebarContent>
    // </ProSidebar> */
}
