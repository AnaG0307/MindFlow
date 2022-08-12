import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import '../../style/SideBar2.css'
import {Link} from 'react-router-dom';


function Sidebar () {
    return (
    <div>
    <div className="container">
      <ul className="sidebar">
        <li>
          <span>
          <Link to="/questionnaire">
            <div className="Questionnaire"></div>
            </Link>
          </span>
          <span>Questionnaire</span>
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
            <div className="Statistics"></div>
          </span>
          <span>Statistics</span>
        </li>
        <li>
          <span>
            <div className="Resources"></div>
          </span>
          <span>Resources</span>
        </li>
      </ul>
      <div className="content"></div>
    </div>
    </div>
    )
    };
    
    export default Sidebar

{/* 
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
    // </ProSidebar> */}