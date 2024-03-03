import React from "react";
import "./Page.css";
import SideBar from "../components/SideBar";
import Topbar from "../components/Topbar";
import Main from "../components/Main";

const Page2 = () => {
  return (
    <div className="page">
      <div className="up">
        <Topbar />
      </div>
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Page2;
