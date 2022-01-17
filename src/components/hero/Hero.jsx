import React from "react";

import { Carousel } from "react-responsive-carousel";
import photo1 from "../../assets/images/fondo.jpg";
import photo2 from "../../assets/images/fondo2.jpg";
import photo3 from "../../assets/images/fondo3.jpg";
import "./hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Hero = () => {
  return (
    <Carousel>
      <div className="caorusel-container">
        <img src={photo1} alt="fondo" />
        <button className="btn button-hero position">
        </button>
      </div>
      <div>
        <img src={photo2} alt="fondo1" />
        <button className="btn button-hero position">
        </button>
      </div>
      <div>
        <img src={photo3} alt="fondo2" />
        <button className="btn button-hero position">

        </button>
      </div>
    </Carousel>
  );
};

export default Hero;
