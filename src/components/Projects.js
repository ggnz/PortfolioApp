import React, { useState } from "react";
import '../stylesheets/projectsstyle.css';
import '../stylesheets/carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

function Projects(props) {
  const { name, desc, link, code } = props;
  const images = [props.img1, props.img2, props.img3]; // Rutas de tus imágenes

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="project-container">
      <div className="project-card">
        <div className="carousel-container">
        <button id="prevBtn2" onClick={prevSlide}>〈⠀ </button>
          <div className="carousel"
          
            style={{
              transform: `translateX(-${currentSlide * 101.5}%)`,
              transition: "transform 0.5s ease-in-out",
            }} >
              
            {images.map((image, index) => (
              
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
              
              
                <img
                  src={require(`../images/projects/${image}.png`)}
                  alt={`Slide ${index + 1}`}
                />

              
              
              </div>
              
            ))}
            
          </div> 
                   
          <button id="prevBtn3" onClick={nextSlide}>⠀〉</button>
        </div>

        <h1 className="project-name">{name}</h1>
        <p className="project-subname">{code}</p>
        <p className="project-text">{desc}</p>

         
          

        <div className="project-button">
          <a href={link} rel="noreferrer" target="_blank">
            <span>🔗 View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;



