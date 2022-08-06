import React from "react";
import ReactDOM from "react-dom";
import '../../style/Sidebar2.css';

ReactDOM.render(
    <div>
      <div className="container">
        <ul className="sidebar">
          <li>
            <span>MindFlow</span>
          </li>
          <li>
            <span>
              <i className="fa fa-home"></i>
            </span>
            <span>Home</span>
          </li>
          <li>
            <span>
              <i className="fa fa-dashboard"></i>
            </span>
            <span>Dashboard</span>
          </li>
          <li>
            <span>
              <i className="fa fa-users"></i>
            </span>
            <span>User Profile</span>
          </li>
          <li>
            <span>
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span>Calendar</span>
          </li>
          <li>
            <span>
              <i className="fa fa-bookmark"></i>
            </span>
            <span>Bookmarks</span>
          </li>
          <li>
            <span>
              <i className="fa fa-gear"></i>
            </span>
            <span>Settings</span>
          </li>
        </ul>

        <div className="content"></div>
      </div>
    </div>,
  document.getElementById("root")
);
