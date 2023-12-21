import React, { useContext, useState } from "react";
import { dataContext } from "../context/dataContext";
import AnimatedPage from "./animatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../css/moreInfo.css";

const SpesificContainer = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { gender, military, nation, driver, gen, mil, nat, dr } =
    state.data.infoPage.spesificInfo;

  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div className="spec-info">
        <div>
          <span>{gender}</span>
          <span style={fontColor}>{gen}</span>
        </div>
        <div>
          <span>{military}</span>
          <span style={fontColor}>{mil}</span>
        </div>
        <div>
          <span>{nation}</span>
          <span style={fontColor}>{nat}</span>
        </div>
        <div>
          <span>{driver}</span>
          <span style={fontColor}>{dr}</span>
        </div>
      </div>
    </AnimatedPage>
  );
};

const IntroContainer = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { introInfo } = state.data.infoPage;
  const fontColor = {
    color: !mode && "#fff",
  };
  return (
    <AnimatedPage>
      <div className="intro-info">
        <h3>{introInfo.summary}</h3>
        <p style={fontColor}>{introInfo.content}</p>
      </div>
    </AnimatedPage>
  );
};
const ExperienceContainer = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { exper } = state.data.infoPage;
  const fontColor = {
    color: !mode && "#fff",
  };
  return (
    <AnimatedPage>
      <div className="intro-info">
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              color: mode ? "rgb(143, 136, 255)" : "#fff",
              fontWeight: "bold",
            }}
          >
            {exper.date}
          </li>
          <li
            style={{
              color: mode ? "rgb(143, 136, 255)" : "#fff",
              margin: "15px 0",
              fontWeight: "bold",
            }}
          >
            {exper.company}
          </li>
        </ul>
        <h3 style={fontColor}>{exper.job}</h3>
        <p style={fontColor}>{exper.content}</p>
      </div>
    </AnimatedPage>
  );
};
const EducationContainer = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { edu } = state.data.infoPage;
  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div className="intro-info">
        <h3>{edu[0]}</h3>
        <p style={fontColor}>{edu[1]}</p>
        <h3 style={{paddingTop : "10px"}}>{edu[2]}</h3>
        <p style={fontColor}>{edu[3]}</p>
      </div>
    </AnimatedPage>
  );
};
const ContactContainer = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { contactMe } = state.data.infoPage;
  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div className="intro-info">
        <h3>{contactMe.mob[0]}</h3>
        <p style={fontColor}>{contactMe.mob[1]}</p>
        <h3 style={{ marginTop: "5px" }}>{contactMe.emailMe[0]}</h3>
        <p style={fontColor}>{contactMe.emailMe[1]}</p>
      </div>
    </AnimatedPage>
  );
};
const LanguageContainer = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { lang } = state.data.infoPage;
  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div className="lang-div">
        <p>
          <span>{lang.lg[0]}</span>
          <span style={fontColor}>{lang.level[0]}</span>
        </p>
        <p>
          <span>{lang.lg[1]}</span>
          <span style={fontColor}>{lang.level[1]}</span>
        </p>
      </div>
    </AnimatedPage>
  );
};
const HobbiesContainer = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { hobbies } = state.data.infoPage;
  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div className="hobies-div">
        <ul style={{ listStyleType: "none" }}>
          {[...hobbies].map((context, index) => {
            return (
              <li style={fontColor} key={index}>
                {context}
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatedPage>
  );
};

const MoreInfo = () => {
  const state = useContext(dataContext);
  const { mode } = state;
  const { my_Info, general } = state.data.infoPage;
  const { spec, inInfo, ex, cn, edu, lan, hob } = general;

  const resumeUrl = "http://localhost:3000/mesResume.pdf";

  const [openContainer, setOpenContainer] = useState({
    spesificCon: false,
    introCon: false,
    contactCon: false,
    experienceCon: false,
    educationCon: false,
    languageCon: false,
    hobbiesCon: false,
  });

  const downloadResume = (url) => {
    const pdfName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", pdfName);

    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const openContainerMethod = (e) => {
    const { id } = e.target;
    setOpenContainer({
      ...openContainer,
      [id]: !openContainer[id],
    });
  };

  return (
    <div
      className="infoBody"
      style={{ backgroundColor: !mode && "rgb(37, 33, 40)" }}
    >
      <h2 style={{ color: !mode && "#fff" }}>
        {my_Info}
        <span>✍️</span>
      </h2>
      <div className="moreInfoPage">
        <div className="moreInfo">
          <div className="spesific_">
            <span>{spec}</span>
            <FontAwesomeIcon
              id="spesificCon"
              className="ReIcon"
              icon={openContainer.spesificCon ? faChevronUp : faChevronDown}
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.spesificCon && <SpesificContainer />}
          <div className="intro_">
            <span>{inInfo}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.introCon ? faChevronUp : faChevronDown}
              id="introCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.introCon && <IntroContainer />}
          <div className="experience_">
            <span>{ex}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.experienceCon ? faChevronUp : faChevronDown}
              id="experienceCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.experienceCon && <ExperienceContainer />}
          <div className="contact_">
            <span>{cn}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.contactCon ? faChevronUp : faChevronDown}
              id="contactCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.contactCon && <ContactContainer />}
          <div className="education_">
            <span>{edu}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.educationCon ? faChevronUp : faChevronDown}
              id="educationCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.educationCon && <EducationContainer />}
          <div className="language_">
            <span>{lan}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.languageCon ? faChevronUp : faChevronDown}
              id="languageCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.languageCon && <LanguageContainer />}
          <div className="hobbies_">
            <span>{hob}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.hobbiesCon ? faChevronUp : faChevronDown}
              id="hobbiesCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.hobbiesCon && <HobbiesContainer />}
          <button
            type="button"
            style={{
              color: !mode && "#ffff",
              border: !mode && "1px solid #6b7280",
              backgroundColor: !mode && "rgb(56, 56, 56)",
            }}
            className="resumeButton"
            onClick={() => {
              downloadResume(resumeUrl);
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};
export default MoreInfo;
