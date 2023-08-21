import React from 'react';

function Contact (values) {  
    return (
      <ul>            
              
        <li>
          <div className="personalContactInfo">      
            <div className="infoIcon">
            <img               
              src={require( `../images/icons/icon-${values.info}.png`)} 
              alt="Profile" />   
                
            </div>          
            
            <div className="mediaWrap">              
              <h1 className="infoType">{values.info}</h1>              

              {values.info === 'Email' ? (
                <a className="infoValue" href={values.value}>ggzmiranda@gmail.com</a>
              ) : (
                <h1 className="infoValue">{values.value}</h1>
              )}  

            </div>
          </div> 
        </li>       
      
      </ul>     
      
    );
  
  }

export default Contact;