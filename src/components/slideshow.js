import React, { useState } from 'react';

import bio1 from "../images/bio1.jpg"
import bio2 from "../images/bio2.jpg"
import bio3 from "../images/bio3.jpg"
import bio4 from "../images/bio4.jpg"


const images = [bio1, bio2, bio3, bio4];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="prev-button" onClick={prevImage}><i className="fa-solid fa-angle-left"></i>
      </div>
      <img
        className="slider-image"
        src={images[currentImageIndex]}
        alt={` ${currentImageIndex + 1}`}
      />
      <div className="next-button" onClick={nextImage}><i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Slider;
