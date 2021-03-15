import React from "react";
import "./Project.css";
// import photos from "../photos/"

function Project(props) {
  return (
    <div className="project-card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          {/* <li>
            <strong>Project:</strong> {props.title}
          </li> */}
          <li>
            <h4>App Description:</h4> {props.description}
          </li>
          <li>
            <h4>App Links</h4> {props.liveSite} {props.repo}
          </li>
          {/* <li>
            <h4>Project Repository</h4>
          </li> */}
          <li>
            {props.teamTitle}
            {props.team1} {props.team2}
            {props.team3} {props.team4} {props.team5}
          </li>
          {/* <li>
            <strong>Team:</strong> {props.team}
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Project;
