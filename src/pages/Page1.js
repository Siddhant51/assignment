import React from "react";
import "./Page.css";
import SideBar from "../components/SideBar";
import Topbar from "../components/Topbar";
import Table from "../components/Table";

const Page1 = () => {
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
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Page1;
