import React, { useContext } from "react";
import Projects from "./projects";
import AnimatedPage from "./animatedPage";
import { dataContext } from "../context/dataContext";

const ProjectsParent = () => {
  const myState = useContext(dataContext);
  const {other} = myState.data;
  const themeMode = myState.mode;
  return (
    <>
      <AnimatedPage>
        <h1 style={{ color: !themeMode && "#AEBCCF" }}>{other.proj}</h1>
        <article>
          <Projects />
        </article>
      </AnimatedPage>
    </>
  );
};

export default ProjectsParent;
