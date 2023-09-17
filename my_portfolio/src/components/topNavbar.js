import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  dataContext,
  writeLocalStorage,
  writeModeLocalStorage,
  readLocalStorage
} from "../context/dataContext";
import myInfo from "../data/EN_portfolioData";
import myTR_Info from "../data/Tr_portfolioData";
import "./../css/topnav.css";

const TopNavbar = () => {
  const myData = useContext(dataContext);
  const { mode, language, setData, data } = myData;

  const navColor = {
    color: !mode && "#6B7280",
    backgroundColor: !mode && "#252128",
  };
  const activeNavColor = {
    color: !mode && "#3730A3",
    backgroundColor: !mode && "#fff",
  };

  const dataChange = () => {
    toast.success("Dil Değiştirildi !", {
      position: "top-right",
      autoClose: 300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: mode ? 'light' : 'dark'
    });
    setTimeout(() => {
      myData.setLanguage(!language);
    },400);
  };

  const themeMode = (e) => {
    myData.setMode(e.target.checked);
  };

  useEffect(() => {
    language === false
      ? writeLocalStorage(myInfo, "info")
      : writeLocalStorage(myTR_Info, "info");
  }, [language]);

  useEffect(() => {
     setData(readLocalStorage('info'));
  }, [language,setData]);

  useEffect(() => {
    console.log("switch tıklandı : ", mode);
    writeModeLocalStorage(mode, "mode");
  }, [mode]);

  return (
    <>
      <div className="nav-first">
        <label className="switch">
          <input type="checkbox" checked={mode} onChange={themeMode} />
          <span className="slider round"></span>
        </label>
        <span
          className="mode-span"
          style={{
            color: !mode ? "#D9D9D9" : "rgba(119, 119, 119, 1)",
            letterSpacing: "0.1rem",
          }}
        >
          {mode ? "DARK MODE" : "LIGHT MODE"}
        </span>
        <span className="tick">|</span>
        <button
          className="language-btn"
          style={{
            color: !mode ? "#777777" : "rgba(119, 119, 119, 1)",
            letterSpacing: "0.1rem",
            backgroundColor: !mode && "#252128",
          }}
          onClick={dataChange}
        >
          <span
            style={{
              color: !mode ? "#BAB2E7" : "rgba(71, 49, 211, 1)",
              letterSpacing: "0.1rem",
              fontSize: "12px",
            }}
          >
            {data.other.lang}
          </span>
          'YE GEÇ
        </button>
        <ToastContainer
          position="top-right"
          autoClose={300}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme= {mode ? 'light' : 'dark'}
        />
        {/* Same as */}
        <ToastContainer />
      </div>
      <div className="nav-seccond">
        <span className="letter-M"
          style={{
            backgroundColor: !mode && "#4731D3",
            color: !mode && "#8F88FF",
          }}
        >
          M
        </span>
        <div className="links">
          <AnchorLink href="#skillss" style={navColor}>
            {data.other.skill}
          </AnchorLink>
          <AnchorLink href="#projectss" style={navColor}>
            {data.other.proj}
          </AnchorLink>
          <Link to = '/contact_me' className="hire_me" style={activeNavColor}>
            {data.other.hireMe}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
