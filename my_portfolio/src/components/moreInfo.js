import React, { useContext, useState } from "react";
import { dataContext } from "../context/dataContext";
import AnimatedPage from "./animatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../css/moreInfo.css";

const SpesificContainer = () => {
  const state = useContext(dataContext);
  const {mode}= state;
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
  const {mode}= state;
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
  const {mode}= state;
  const fontColor = {
    color: !mode && "#fff",
  };
  return (
    <AnimatedPage>
      <div style={fontColor}>Experience - Container</div>
    </AnimatedPage>
  );
};
const EducationContainer = () => {
  const state = useContext(dataContext);
  const {mode}= state;
  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div style={fontColor}>Education - Container</div>
    </AnimatedPage>
  );
};
const ContactContainer = () => {
  const state = useContext(dataContext);
  const {mode}= state;
  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div style={fontColor}>Contact - Container</div>
    </AnimatedPage>
  );
};
const LanguageContainer = () => {
  const state = useContext(dataContext);
  const {mode}= state;
  const {lang} = state.data.infoPage;
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
  const {mode}= state;
  const {hobbies} = state.data.infoPage;
  const fontColor = {
    color: !mode && "#fff",
  };

  return (
    <AnimatedPage>
      <div className="hobies-div">
        {[...hobbies].map((context, index) => {
          return (
            <li style={fontColor} key={index}>
              {context}
            </li>
          );
        })}
      </div>
    </AnimatedPage>
  );
};

const MoreInfo = () => {
  const state = useContext(dataContext);
  const {mode}= state;
  const { my_Info, general } = state.data.infoPage;
  const { spec, inInfo, ex, cn, edu, lan, hob } = general;

  const [openContainer, setOpenContainer] = useState({
    spesificCon: false,
    introCon: false,
    contactCon: false,
    experienceCon: false,
    educationCon: false,
    languageCon: false,
    hobbiesCon: false,
  });


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
              icon={openContainer.spesificCon ? faChevronDown : faChevronUp}
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.spesificCon && <SpesificContainer/>}
          <div className="intro_">
            <span>{inInfo}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.introCon ? faChevronDown : faChevronUp}
              id="introCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.introCon && <IntroContainer/>}
          <div className="experience_">
            <span>{ex}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.experienceCon ? faChevronDown : faChevronUp}
              id="experienceCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.experienceCon && <ExperienceContainer/>}
          <div className="contact_">
            <span>{cn}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.contactCon ? faChevronDown : faChevronUp}
              id="contactCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.contactCon && <ContactContainer/>}
          <div className="education_">
            <span>{edu}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.educationCon ? faChevronDown : faChevronUp}
              id="educationCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.educationCon && <EducationContainer/>}
          <div className="language_">
            <span>{lan}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.languageCon ? faChevronDown : faChevronUp}
              id="languageCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.languageCon && <LanguageContainer/>}
          <div className="hobbies_">
            <span>{hob}</span>
            <FontAwesomeIcon
              className="ReIcon"
              icon={openContainer.hobbiesCon ? faChevronDown : faChevronUp}
              id="hobbiesCon"
              onClick={(e) => openContainerMethod(e)}
            />
          </div>
          {openContainer.hobbiesCon && <HobbiesContainer/>}
        </div>
      </div>
    </div>
  );
};
export default MoreInfo;

// #6B7280; font-color
