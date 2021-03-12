import React from "react";
import Project from "../../components/Project";
import Wrapper from "../../components/Wrapper";
import projects from "../../projects.json";

//function component to spread data from json file. look at .map

export const Portfolio = () => {
  return (
    <div>
      <Wrapper>
        <Project
          project={projects[0].project}
          image={projects[0].image}
          links={projects[0].links}
          team={projects[0].team}
          description={projects[0].description}
        />
        <Project
          project={projects[1].project}
          image={projects[1].image}
          links={projects[1].links}
          team={projects[1].team}
          description={projects[1].description}
        />
        <Project
          project={projects[2].project}
          image={projects[2].image}
          links={projects[2].links}
          team={projects[2].team}
          description={projects[2].description}
        />
        <Project
          project={projects[3].project}
          image={projects[3].image}
          links={projects[3].links}
          team={projects[3].team}
          description={projects[3].description}
        />
        <Project
          project={projects[4].project}
          image={projects[4].image}
          links={projects[4].links}
          team={projects[4].team}
          description={projects[4].description}
        />
        <Project
          project={projects[5].project}
          image={projects[5].image}
          links={projects[5].links}
          team={projects[5].team}
          description={projects[5].description}
        />
      </Wrapper>
    </div>
  );
};
