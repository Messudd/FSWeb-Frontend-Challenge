import React, { useContext, useEffect } from "react";
import { dataContext, writeLocalStorage } from "../context/dataContext";
import myInfo from "../data/EN_portfolioData";
import myTR_Info from "../data/Tr_portfolioData";
import "./../css/topnav.css";

const TopNavbar = () => {
  const myData = useContext(dataContext);

  const dataChange = () => {
    myData.setLanguage(!myData.language);
  };

  const themeMode = (e) => {
    myData.setMode(e.target.checked);
  };

  useEffect(() => {
    myData.language === false
      ?  writeLocalStorage(myInfo,'info')
      :  writeLocalStorage(myTR_Info,'info')
  }, [myData.language]);
  
  useEffect(() => {
    console.log('language : ',myData.language);
    myData.language === false ? myData.setData({...myInfo}):myData.setData({...myTR_Info});
  }, [myData.language]);

  useEffect(() => {
    console.log("switch tıklandı : ", myData.mode);
  }, [myData.mode]);

  return (
    <>
      <div className="nav-first">
        <label className="switch">
          <input type="checkbox" onChange={themeMode} />
          <span className="slider round"></span>
        </label>
        <span
          className="mode-span"
          style={{ color: "rgba(119, 119, 119, 1)", letterSpacing: "0.1rem" }}
        >
          DARK MODE
        </span>
        <span className="tick">|</span>
        <button
          className="language-btn"
          style={{ color: "rgba(119, 119, 119, 1)", letterSpacing: "0.1rem" }}
          onClick={dataChange}
        >
          <span
            style={{
              color: "rgba(71, 49, 211, 1)",
              letterSpacing: "0.1rem",
              fontSize: "12px",
            }}
          >
            TÜRKÇE
          </span>
          'YE GEÇ
        </button>
      </div>
      <div className="nav-seccond">
        <span>A</span>
        <div className="links">
          <button>Skills</button>
          <button>Projects</button>
          <button className="hire_me" href="">
            Hire me
          </button>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
