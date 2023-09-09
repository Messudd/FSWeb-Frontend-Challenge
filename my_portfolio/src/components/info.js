import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { dataContext } from "../context/dataContext";
import './../css/info.css';

function Info() {

  const myData = useContext(dataContext);

  return (
    <>
      <div className="info_right">
        <h3><span>—————</span>Mesud AYDIN</h3>
        <h1>{myData.data.intro.head}</h1>
        <p>{myData.data.intro.content}</p>
        <div className="buttons">
          <button className="default" style={{padding: '12px 22px',backgroundColor:'#3730A3'}}>Hire me</button>
          <button>
           <FontAwesomeIcon className="icon" icon = {faGithub}/>
            Github
          </button>
          <button>
            <FontAwesomeIcon className="icon" icon = {faLinkedin}/>
            Linkedin
          </button>
        </div>
      </div>
      <div className="info-img"></div>
    </>
  );
}

export default Info;
