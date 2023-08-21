import React from "react";
import '../stylesheets/techsstyle.css';

function Techs(props){  
  return (     
       
    <div className="tech-container">
      
      <div className="tech-card">
        <img 
            className="tech-img"
            src={require( `../images/icons/icon-${props.img}.png`)}  
            alt="Profile" 
        />

        <h1 className="tech-name">
          {props.name}      
        </h1>                
        
        
      </div>        
      
    </div>    
  
);

}

export default Techs;