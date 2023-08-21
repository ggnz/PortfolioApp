import React from "react";
import '../stylesheets/footer.css';

function Footer(props){  
  return (             
    <div class="footer-content">
      
      <div className="social-card">
        <a href="https://github.com/ggnz?tab=repositories">
          <img src={require('../images/icons/GitHub-Mark.png')} alt="GitHub" />
        </a>             
        <a href="https://www.linkedin.com/in/gerson-gonzález-a52695266/">
          <img src={require('../images/icons/Link-Mark.png')} alt="GitHub" />
        </a>         
      </div>  
      <p>&copy; 2023 Gerson González Miranda. All Rights Reserved.</p>
    </div>
    
  );
}

export default Footer;