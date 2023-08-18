import React from "react";
import '../stylesheets/skillsstyle.css';

function Skills(props){  
  return (     
       
    <div className="skills-container">
      
      <div className="skill-card">
        <img 
            className="skill-img"
            src={require( `../images/icon-${props.img}.png`)}  
            alt="Profile" 
        />

        <h1 className="skill-name">
          {props.name}      
        </h1>               

        <div className="progress-bar">
          <div className="progress" style={{ width: `${props.percentage}%` }}>
              {/*props.percentage}%*/}
          </div>
        </div>  
        
        
      </div>        
      
    </div>    
  
);

}

export default Skills;