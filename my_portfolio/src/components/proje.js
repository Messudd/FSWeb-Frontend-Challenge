import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { dataContext } from "../context/dataContext";
import '../css/proje.css'

const Proje = ({ projeData }) => {
  const { used } = projeData;
  const stateMine = useContext(dataContext);
  const {other} = stateMine.data;
  const tema = stateMine.mode;

  const span_tema = {
    color: !tema && '#8F88FF',
    backgroundColor: !tema && '#383838',
    border: !tema && '1px solid #8F88FF'
    }
    
  return (
    <div className="proje-card">
      <div className="url">
        <img src= {projeData.image} alt="proje_görseli" width={250}/>
      </div>
      <h2 style={{color: !(tema) && '#CFCBFF'}}>{projeData.name}</h2>
      <p style={{color: !tema && '#FFFFFF'}}>{projeData.content}</p>
      <div className="proje-spans">
        {used.map((item, index) => (
          <span style={span_tema} key={index}>{item}</span>
        ))}
      </div>
      <div className="linkss">
        <Link to = {{pathname: `${projeData.github}`}} target = '_blank' style = {{color: !tema && '#E1E1FF',borderBottom: !tema && '1px solid #E1E1FF'}}>Github</Link>
        <Link to = {{ pathname :`${projeData.url}` }} target = '_blank' style = {{color: !tema && '#E1E1FF',borderBottom: !tema && '1px solid #E1E1FF'}}>{other.visit}</Link>
      </div>
    </div>
  );
};

export default Proje;
