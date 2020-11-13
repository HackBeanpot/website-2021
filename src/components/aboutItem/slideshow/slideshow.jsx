import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RedPanda2 from '../../../images/redpanda.jpg';

export default function SimpleSlider() {
  const settings = {
    centerMode: true,
    centerPadding: 0,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3, //changes on responsive
    dots: true,
    arrows: true,
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
        <div className='about-slideshow-item' style={{width: 400}}>
          <img src={RedPanda2}/>
        </div>
        <div className='about-slideshow-item' style={{width: 400}}>
          <img src={RedPanda2}/>
        </div>
        <div className='about-slideshow-item' style={{width: 400}}>
          <img src={RedPanda2}/>
        </div>
        <div className='about-slideshow-item' style={{width: 400}}>
          <img src={RedPanda2}/>
        </div>
        <div className='about-slideshow-item' style={{width: 400}}>
          <img src={RedPanda2}/>
        </div>
        <div className='about-slideshow-item' style={{width: 400}}>
          <img src={RedPanda2}/>
        </div>
      </Slider>
    </div>
  );
}
