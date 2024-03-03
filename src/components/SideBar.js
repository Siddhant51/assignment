import React from "react";
import "./SideBar.css";
import Tree from "./Tree";

const SideBar = () => {
  const treeData = [
    {
      key: "0",
      label: "Events",
      children: [
        {
          key: "0-0",
          label: "New Requests",
        },
        {
          key: "0-1",
          label: "Estimates",
        },
        {
          key: "0-2",
          label: "Events",
        },
        {
          key: "0-3",
          label: "Partial Requests",
        },
      ],
    },
    {
      key: "1",
      label: "Positions",
    },
    {
      key: "2",
      label: "Contractors",
    },
    {
      key: "3",
      label: "Users",
      children: [
        {
          key: "3-0",
          label: "Admins",
        },
        {
          key: "3-1",
          label: "Clients",
        },
        {
          key: "3-2",
          label: "Coordinators",
        },
      ],
    },
    {
      key: "4",
      label: "Profile",
    },
    {
      key: "5",
      label: "Logout",
    },
  ];

  return (
    <div className="sidebar">
      <Tree treeData={treeData} />
    </div>
  );
};

export default SideBar;
