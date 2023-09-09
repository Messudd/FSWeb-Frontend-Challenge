import React from 'react'
import '../css/skill.css';

function Skill({skill_name,skill_content}) {
  return (
    <div className='card-skill'>
      <h2>{skill_name}</h2>
      <p>{skill_content}</p>
    </div>
  )
}

export default Skill;
