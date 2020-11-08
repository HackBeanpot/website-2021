import React from 'react';
import CarouselSlide from "./slideshow/slideshow";
import AboutFootsteps from "../../images/svg/footsteps";


const AboutItem = props => {
  return (
    <div className="about-item">
      <div className="about-title">
        HackBeanPot is about...
      </div>
      <CarouselSlide/>
      <p className="about-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <AboutFootsteps/>
    </div>
  )
}

export default AboutItem;
