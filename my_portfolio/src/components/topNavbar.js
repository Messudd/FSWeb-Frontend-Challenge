import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  dataContext,
  writeLocalStorage,
  writeModeLocalStorage,
} from "../context/dataContext";
import myInfo from "../data/EN_portfolioData";
import myTR_Info from "../data/Tr_portfolioData";
import { Link } from "react-router-dom";
import "./../css/topnav.css";

const TopNavbar = () => {
  const myData = useContext(dataContext);
  const { mode, language, setData } = myData;

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
      theme: "light",
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
    console.log("language : ", language);
    language === false ? setData({ ...myInfo }) : setData({ ...myTR_Info });
  }, [language, setData]);

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
            {!language ? "TÜRKÇE" : "İNGİLİZCE"}
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
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
      <div className="nav-seccond">
        <span
          style={{
            backgroundColor: !mode && "#4731D3",
            color: !mode && "#8F88FF",
          }}
        >
          M
        </span>
        <div className="links">
          <AnchorLink href="#skillss" style={navColor}>
            Skills
          </AnchorLink>
          <AnchorLink href="#projectss" style={navColor}>
            Projects
          </AnchorLink>
          <Link to = '/contact_me' className="hire_me" style={activeNavColor}>
            Hire me
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
