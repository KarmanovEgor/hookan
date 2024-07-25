import React, { useState } from "react";
import "./Carousel.css";
import { slideImages } from "../constants/constCarousel";

export default function Carousel({openPopup}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + slideImages.length) % slideImages.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__container"> 
        <div className="carousel__indicators">
          {slideImages.map((photo, index) => (
            <div
              key={index}
              className={
                currentPhotoIndex === index ? "carousel__indicator-active" : "carousel__indicator"
              }
            ></div>
          ))}
        </div>
        <div className="carousel__text">
          <h1 className="carousel__title">{slideImages[currentPhotoIndex].text}</h1>
          <button className="carousel__button" type="button" name="calling" onClick={openPopup}>БРОНИРОВАТЬ</button>
        </div>
        <div className="carousel__photo">
          <img
            src={slideImages[currentPhotoIndex].image}
            alt={slideImages[currentPhotoIndex].alt}
            className="carousel__photo-front"
          />
          <img
            src={
              slideImages[(currentPhotoIndex + 1) % slideImages.length].image
            }
            alt={slideImages[(currentPhotoIndex + 1) % slideImages.length].alt}
            className="carousel__photo-back"
          />
        </div>
        <div className="carousel__btns">
          <button className="carousel__btn carousel__btn-left" onClick={handlePrevPhoto}>
            
          </button>
          <button className="carousel__btn carousel__btn-right" onClick={handleNextPhoto}>
            
          </button>
        </div>
      </div>
    </div>
  );
}
