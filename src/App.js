import './App.css';
import Skills from './components/Skills';

import Navbar from './components/NavBar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Techs from './components/OtherTech';
import Footer from './components/Footer';

function App() {   

  return (
    <div className="App">
      <Navbar /> 

      <section id="home">
        <div className='container-main'>        
          <Profile           
            name='Gerson'
            puesto='Software Engineer'            
            img='me'
            about='I am a recent graduate of the Computer Systems Engineering career'
            />            
      </div> 
      </section>      
      <section id="skills">  
        <div className='section-title'>
          <h3>FEATURES</h3> 
          
          <h1>Skills</h1> 
        </div>   
                 
        <div className='container-skills'>          
          <Skills            
            name='JavaScript'   
            desc=''
            img='js'
            percentage='85'/>           
          <Skills            
            name='HTML'   
            desc=''
            img='html'
            percentage='90'/>
          <Skills            
            name='CSS'   
            desc=''
            img='css'
            percentage='90'/>
            
          <Skills            
            name='React'   
            desc=''
            img='react'
            percentage='65'/>
          <Skills            
            name='C#'   
            desc=''
            img='c'
            percentage='85'/>
          <Skills            
            name='.Net Core'   
            desc=''
            img='net'
            percentage='80'/>
          
          <Skills            
            name='MySql'   
            desc='main'
            img='mysql'
            percentage='85'/>
          <Skills            
            name='SQL Server'   
            desc=''
            img='server'
            percentage='85'/>
          <Skills            
            name='Oracle DB'   
            desc=''
            img='oracle'
            percentage='70'/>          
          
        </div>
        <h2 className='section-subtitle'>Other Technologies</h2>           
          <div className='container-techs'> 
            <Techs            
              name='Git'   
              desc=''
              img='git'
              percentage=''/> 
            <Techs            
              name='Jira'   
              desc=''
              img='jira'
              percentage=''/>
           
            <Techs            
              name='Linux'   
              desc=''
              img='linux'
              percentage=''/>  
            <Techs            
              name='Azure'   
              desc=''
              img='azure'
              percentage=''/>
            <Techs            
              name='Docker'   
              desc=''
              img='docker'
              percentage=''/> 
          </div>
      </section>

      <section id="projects"> 
             
        <div className='section-title'>
          <h3>PROJECTS</h3> 
          <h1>My Portfolio</h1> 
        </div>     
        <div className='container-projects'>              
          <Projects   
            name='Clinicas Trip'   
            desc='Alex app, is a tourist services management application with dynamic map searches, data table, offline use, and administrator page.'
            img='project4'
            link='https://github.com/ggnz/CRM'
            code='.NET / C# / SQL Server'
           />
           
          <Projects   
            name='Unity Game'   
            desc='Alex app, is a tourist services management application with dynamic map searches, data table, offline use, and administrator page.'
            img='project4'
            link='https://github.com/ggnz/UnityProject'
            code='Unity / C# '
            />
          
               
        </div>
      </section>


        
      <footer>
        <Footer/>
      </footer>
    </div>

    
    
    
    
  );
}

export default App;


