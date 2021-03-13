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
          <li>
            <strong>Project:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Links:</strong> {props.links} {props.team}
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
