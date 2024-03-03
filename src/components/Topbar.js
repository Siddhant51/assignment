import React from "react";
import "./TopBar.css";
import { FaRegBell } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";

const name = "Siddhant Sonawane";
const profilePicture = "userprofile.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="icons">
        <GrStatusInfo className="icon" style={{ fontSize: "35px" }} />
        <FaRegBell className="icon" style={{ fontSize: "35px" }} />
      </div>
      <div className="user-validate">
        <h2>Hi, {name}</h2>
        <p>Welcome Back!</p>
      </div>
      <div className="profile">
        <img
          src={profilePicture}
          alt={`${name}'s Profile`}
          className="profile-picture"
        />
      </div>{" "}
    </div>
  );
};

export default Topbar;
