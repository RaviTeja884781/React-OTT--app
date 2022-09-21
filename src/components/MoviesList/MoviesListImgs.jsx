import React from "react";
import "./MoviesListImgs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import poster1 from "../../images/movieposters/poster1.jpg";
import poster2 from "../../images/movieposters/poster2.jpg";
import poster3 from "../../images/movieposters/poster3.jpg";
import poster4 from "../../images/movieposters/poster4.jpg";
import poster5 from "../../images/movieposters/poster5.jpg";
import poster6 from "../../images/movieposters/poster6.jpg";

const MoviesListImgs = () => {
  return (
    <div>
      <Carousel
        className="carousel"
        infiniteLoop={true}
        autoFocus={true}
        showArrows={true}
        autoPlay={true}
        stopOnHover={true}
      >
        <div className="posters">
          <img src={poster1} alt="poster1" />
          <p className="legend">Mortal Kombat</p>
        </div>
        <div className="posters">
          <img src={poster2} alt="poster2" />
          <p className="legend">The Great Wall</p>
        </div>
        <div className="posters">
          <img src={poster3} alt="poster3" />
          <p className="legend">Mortal Engine</p>
        </div>
        <div className="posters">
          <img src={poster4} alt="poster4" />
          <p className="legend">Deep Sea</p>
        </div>
        <div className="posters">
          <img src={poster5} alt="poster5" />
          <p className="legend">Alien</p>
        </div>
        <div className="posters">
          <img src={poster6} alt="poster6" />
          <p className="legend">Hollywood Collection</p>
        </div>
      </Carousel>
    </div>
  );
};

export default MoviesListImgs;
