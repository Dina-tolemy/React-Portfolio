import React from "react";
import "./card.css";

function ProjectCard(props) {
    return (
        <div className="card projectCard col-sm-12  col-md-6 col-lg-4">

            <div className="content">
            <strong className="projectTitle"> {props.projectName}</strong>
                <ul>
                    <li>
                        <strong> Summary:</strong><p>{props.summary}</p>
                    </li>
                    <li>
                        <a href={props.githubLink} >
                            GitHub Repo </a>{" - "}
                            <a href={props.deployedLink} >
                            Deployed link </a>
                    </li>
                </ul>
            </div>
            <div className="img-container">
                <img alt={props.projectName} src={props.img} />
            </div>
        </div>
    );
}

export default ProjectCard;