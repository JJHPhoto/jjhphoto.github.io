import React from "react";
import Project from "../../components/Project";
import Wrapper from "../../components/Wrapper";
import projects from "../../components/projects";

export const Portfolio = () => {
  return (
    <div>
      <Wrapper>
        {projects.map((project) => {
          return (
            <Project
              title={project.name}
              image={project.image}
              repo={project.repo}
              team1={project.team1}
              team2={project.team2}
              team3={project.team3}
              team4={project.team4}
              team5={project.team5}
              description={project.description}
              liveSite={project.liveSite}
              teamTitle={project.teamTitle}
            />
          );
        })}
      </Wrapper>
    </div>
  );
};
