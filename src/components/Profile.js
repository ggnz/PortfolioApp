import React from "react";
import '../stylesheets/profilestyle.css';
import Contact from './Contact';


function Profile(props){  
  return (
    <div className="main">
      <img 
        className="img-card"
        src={require( `../images/card-${props.img}.png`)} 
        alt="Profile" />
      
      <div className="info-card">
          <h1>
            {'Hi, Im ' + props.name + '🤚'}     
          </h1>

          <h2>
            {'Im a ' + props.puesto + '.'} 
          </h2>
          <div className="about">
              {props.about}
          </div> 
          <Contact   
            info='Name'        
            value='Gerson González Miranda'       
              />  
          <Contact   
            info='Location'        
            value='Costa Rica'           
              /> 
          <Contact     
            info='Email'      
            value='mailto:ggzmiranda@gmail.com'      
              /> 
            

          

          <div className="social-card">
          <a href="https://github.com/ggnz?tab=repositories" rel="noreferrer" target="_blank">
            <img src={require('../images/icons/GitHub-Mark.png')} alt="GitHub" />
          </a>             
          <a href="https://www.linkedin.com/in/gerson-gonzález-a52695266/" rel="noreferrer" target="_blank">
            <img src={require('../images/icons/Link-Mark.png')} alt="GitHub" />
          </a>         
          </div>    
      </div>       
    </div>    

    
  );
}

export default Profile;