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
            about='"As a recent graduate in Computer Systems Engineering.
            I am deeply enthusiastic about problem-solving and learning from the process to acquire new skills that give me the opportunity to grow as a developer."'
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
            desc='Clinical appointment application created in ASP.NET Core with SQL Azure, using Razor Pages.'
            img1='card-project4'
            img2='card-project5'
            img3='card-project6'
            link='https://github.com/ggnz/CRM'
            code='.NET / C# / SQL'
           />

          {/*
          <Projects   
          name='MVC'   
          desc='MVC CRUD con SQL server'
          img1='card-project4'
          img2='card-project5'
          img3='card-project6'
          link='https://github.com/ggnz/UnityProject'
          code='Unity / C# '
          />*/}
           
          <Projects   
            name='GungeonOps'   
            desc='This project is a 2D TopDown shooting game made in Unity.'
            img1='card-project1'
            img2='card-project2'
            img3='card-project3'
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


