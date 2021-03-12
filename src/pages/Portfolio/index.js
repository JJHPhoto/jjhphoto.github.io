import React from "react";
import Project from "../../components/Project";
import Wrapper from "../../components/Wrapper";
import projects from "../../projects.json";

export const Portfolio = () => {
  return (
    <div>
      <Wrapper>
        <Project
          name={projects[0].name}
          image={projects[0].image}
          occupation={projects[0].occupation}
          location={projects[0].location}
        />
        <Project
          name={projects[1].name}
          image={projects[1].image}
          occupation={projects[1].occupation}
          location={projects[1].location}
        />
      </Wrapper>
    </div>
  );
};
