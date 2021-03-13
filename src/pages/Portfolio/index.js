import React from "react";
import Project from "../../components/Project";
import Wrapper from "../../components/Wrapper";
import projects from "../../components/projects";

//function component to spread data from json file. look at .map

export const Portfolio = () => {
  return (
    <div>
      <Wrapper>
        {projects.map((project) => {
          return (
            <Project
              title={project.name}
              image={project.image}
              links={project.links}
              team={project.team}
              description={project.description}
            />
          );
        })}
      </Wrapper>
    </div>
  );
};
