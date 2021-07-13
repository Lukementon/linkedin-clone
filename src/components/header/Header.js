import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "../headerOption/HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/185627154_245813293969242_894561737991809697_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HpQkXqAG3xYAX-HburB&_nc_ht=scontent-dub4-1.xx&oh=1de37d087fc602a6ef08b1e245f767e5&oe=60F2A0FE"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
