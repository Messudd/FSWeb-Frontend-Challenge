import React from "react";
import {Link} from 'react-router-dom';
import '../css/proje.css'

const Proje = ({ projeData }) => {
  const { used } = projeData;

  return (
    <div className="proje-card">
      <div className="url">
        <img src= {projeData.image} alt="proje-photo" width={250}/>
      </div>
      <h2>{projeData.name}</h2>
      <p>{projeData.content}</p>
      <div className="proje-spans">
        {used.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="links">
        <Link to = '/'>Github</Link>
        <Link to = '/'>View Site</Link>
      </div>
    </div>
  );
};

export default Proje;
