import React, { useState, useEffect } from 'react';
import './Carousel.css';

import BuildingImage from '../assets/images/Building.jpg';
import DoctorsImage from '../assets/images/Doctors.jpg';
import OurPeopleImage from '../assets/images/Our-people.jpg';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    BuildingImage,
    DoctorsImage,
    OurPeopleImage,
  ];

  useEffect(() => {
    // Start the slideshow
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const renderButtonLinks = () => {
    return images.map((image, index) => (
      <div
        key={index}
        className={`button-link-${index + 1} ${index === currentImageIndex ? 'active' : ''}`}
      ></div>
    ));
  };

  return (
    <div className="divrslides-inner">
      <div className="list-1">
        <img className="building" src={images[currentImageIndex]} alt="Building" />
      </div>
      <div className="list-2">
        {renderButtonLinks()}
      </div>
    </div>
  );
}

export default Carousel;
