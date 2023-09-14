import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { dataContext } from "../context/dataContext";
import { Link } from "react-router-dom";
import "./../css/info.css";

function Info() {
  const myData = useContext(dataContext);
  const themeMode = myData.mode;
  const [hover, setIsHover] = useState(false);
  const [hoverGit, setIsHoverGit] = useState(false);

  const text_color_head = {
    color: !themeMode && "#AEBCCF",
  };
  const text_color = {
    color: !themeMode && "#fff",
  };
  const textName = {
    color: !themeMode && "#B7AAFF",
    position: "relative",
  };
  const buttonTheme = {
    color: !themeMode && "#E1E1FF",
    backgroundColor: !themeMode && "#383838",
    border: !themeMode && "1px solid #E1E1FF",
  };

  const hoverEnterMethod = () => {
    setIsHover(true);
  };
  const hoverLeaveMethod = () => {
    setIsHover(false);
  };

  const hoverEnterMethodSeccond = () => {
    setIsHoverGit(true);
  };
  const hoverLeaveMethodSeccond = () => {
    setIsHoverGit(false);
  };

  return (
    <>
      <div className="info_right">
        <h3 style={textName} id="referans">
          <span style={textName}>—————</span>Mesud AYDIN
        </h3>
        <h1 style={text_color_head}>{myData.data.intro.head}</h1>
        <p style={text_color}>{myData.data.intro.content}</p>
        <div className="buttons">
          <Link
            to="/contact_me"
            className="default"
            style={{
              padding: "12px 22px",
              backgroundColor: !themeMode ? "#E1E1FF" : "#3730A3",
              color: !themeMode ? "#000" : "#fff",
            }}
          >
            {myData.data.other.hireMe}
          </Link>
          <Link
            to={{ pathname: "https://github.com/Messudd" }}
            target="_blank"
            style={{
              ...buttonTheme,
              transform: hoverGit && "scale(1.05 ,1)",
            }}
            onMouseEnter={hoverEnterMethodSeccond}
            onMouseLeave={hoverLeaveMethodSeccond}
          >
            <FontAwesomeIcon
              className="icon"
              style={{ color: !themeMode && "#BAB2E7" }}
              icon={faGithub}
            />
            Github
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/messud"}}
            target="_blank"
            onMouseEnter={hoverEnterMethod}
            onMouseLeave={hoverLeaveMethod}
            style={{
              ...buttonTheme,
              transform: hover && "scale(1.05 ,1)",
            }}
          >
            <FontAwesomeIcon
              className="icon"
              style={{ color: !themeMode && "#BAB2E7" }}
              icon={faLinkedin}
            />
            Linkedin
          </Link>
        </div>
      </div>
      <div className="info-img"></div>
    </>
  );
}

export default Info;
