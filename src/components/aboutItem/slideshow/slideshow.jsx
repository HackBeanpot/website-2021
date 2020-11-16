import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {AboutNextArrow, AboutPrevArrow} from "./custom-arrow";

const Slideshow = ({slides, currSlide, updateSlide}) => {
  const settings = {
    centerMode: true,
    centerPadding: 0,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3, //changes on responsive
    dots: true,
    nextArrow: <AboutNextArrow currSlide={currSlide} updateSlide={updateSlide}/>,
    prevArrow: <AboutPrevArrow currSlide={currSlide} updateSlide={updateSlide}/>,
    beforeChange: (beforeIndex, afterIndex) => {
      updateSlide(afterIndex);
    },
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        variableWidth: true
      }
    }]
  };
  return (
    <div className='about-slideshow'>
      <Slider {...settings}>
        {slides.map(data => (
          <div className='about-slideshow-item' style={{width: 400}}>
            <img src={data.picture}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow
