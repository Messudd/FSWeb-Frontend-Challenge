import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/dashboard.css";

const Dashboard = () => {
  const [openSide, setOpenSide] = useState(false);

  const openSideBar = () => {
    setOpenSide(!openSide);
  };

  const about = "About - Me";
  const allAbout = [];

  for (let i = 0; i < 10; i++) {
    allAbout.push(about);
  }

  return (
    <>
      <div className="dash-header">
        <span className="side-icon" onClick={openSideBar}>
          <FontAwesomeIcon className="fa" icon={faBars} />
        </span>
        <h1> Mesud - Resume :) </h1>
      </div>
      <div className="dashboard-main">
        {openSide && (
          <div className="dashboard-left">
            {allAbout.map((item, index) => {
              return <li key={index}>About - Me</li>;
            })}
          </div>
        )}
        <div className="dashboard-right">
            mesud aydın
        </div>
      </div>
    </>
  );
};
export default Dashboard;
