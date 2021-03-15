import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project-card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <h4>App Description:</h4> {props.description}
          </li>
          <li>
            <h4>App Links</h4> {props.liveSite} {props.repo}
          </li>
          <li>
            {props.teamTitle}
            {props.team1} {props.team2}
            {props.team3} {props.team4} {props.team5}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
