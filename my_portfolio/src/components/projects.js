import React, { useContext } from "react";
import Proje from "../components/proje";
import { dataContext } from "../context/dataContext";

const Projects = () => {
  const myState = useContext(dataContext);
  const { projects } = myState.data;

  return (
    <>
      {projects.map((content, index) => {
        return <Proje key={index} projeData={content} />;
      })}
    </>
  );
};

export default Projects;
