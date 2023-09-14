import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../context/dataContext";
import "../css/bottomNav.css";

const BottomNav = () => {
  const myState = useContext(dataContext);
  const { other } = myState.data;
  const themeMode = myState.mode;

  return (
    <div className="bottom-nav">
      <h2 style={{ color: !themeMode && "#AEBCCF" }}>{other.footerSlogan}</h2>
      <div className="bottomNav-contact">
        <div className="contact-email">
          <span>👉</span>
          <Link to="/" style={{ color: !themeMode && "#BAB2E7" }}>
            eem.mesud.28@gmail.com
          </Link>
        </div>
        <div className="link-group">
          <Link to="/" style={{ color: !themeMode && "#E1E1FF" }}>
            {other.per}
          </Link>
          <Link to={{ pathname: "https://github.com/Messudd" }} target="_blank">
            Github
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/messud" }}
            target="_blank"
          >
            Linkedin
          </Link>
          <Link to="/moreInfo">{other.more}</Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
