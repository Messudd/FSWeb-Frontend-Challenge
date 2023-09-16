import React, { useContext } from "react";
import Skill from "./skill";
import { dataContext } from "../context/dataContext";
import "../css/skills.css";
import AnimatedPage from "./animatedPage";

const Skills = () => {
  const myState = useContext(dataContext);
  const skillName = myState.data.skills.name;
  const temaMode = myState.mode;

  return (
    <AnimatedPage>
      <div className="skills">
        <h1 style={{ color: !temaMode && "#AEBCCF" }}>
          {myState.data.other.skill}
        </h1>
        <div className="skillsMap">
          {skillName.map((skill_name, index) => (
            <Skill key={index} skill_name={skill_name} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Skills;
