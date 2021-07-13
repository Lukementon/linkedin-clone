import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Luke Menton</h2>
        <h3>lukementon15@gmail.com</h3>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,431</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,390</p>
        </div>
      </div>

      <div className="sidebar_bottom"></div>
    </div>
  );
};

export default Sidebar;
