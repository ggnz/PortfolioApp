import React from "react";
import '../stylesheets/projectsstyle.css';

function Projects(props){  
  return (             
      <div className="project-container">
        
        <div className="project-card">
          <img 
              className="project-img"
              src={require( `../images/projects/card-${props.img}.png`)}  
              alt="Profile" 
          />

          <h1 className="project-name">
            {props.name}      
          </h1>
          <p className="project-subname">
            {props.code} 
          </p>
          <p className="project-text">
            {props.desc}
          </p>          
          <div class="project-button">
             <a href={props.link} rel="noreferrer" target="_blank"><span>🔗 View Project</span> </a>
          </div>
        </div>
        
      </div>    
    
  );
}

export default Projects;

