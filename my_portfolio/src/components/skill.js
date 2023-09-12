import React, { useContext } from 'react'
import { dataContext } from '../context/dataContext';
import '../css/skill.css';

function Skill({skill_name,skill_content}) {
  const allData = useContext(dataContext);
  const temaMod = allData.mode;
  const textColor = {
    color: !(temaMod) && '#fff'
  }
    return (
    <div className='card-skill'>
      <h2 style={{color: !(temaMod) && '#B7AAFF'}}>{skill_name}</h2>
      <p style={textColor}>{skill_content}</p>
    </div>
  )
}

export default Skill;
