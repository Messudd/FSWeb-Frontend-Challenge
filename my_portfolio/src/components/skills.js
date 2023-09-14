import React, { useContext } from "react";
import Skill from "./skill";
import { dataContext } from "../context/dataContext";
import "../css/skills.css";

const Skills = () => {
  const myState = useContext(dataContext);
  const skillName = myState.data.skills.name;
  const skillContent = myState.data.skills.content;
  const temaMode = myState.mode;

  return (
    <div className="skills">
      <h1 style={{ color: !temaMode && "#AEBCCF" }}>
        {myState.data.other.skill}
      </h1>
      <div className="skillsMap">
        {skillName.map((skill_name, index) => (
          <Skill
            key={index}
            skill_name={skill_name}
            skill_content={skillContent[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
