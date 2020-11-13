import React from 'react';
import SlideShow from "./slideshow/slideshow";
import AboutRightFoot from "../../images/svg/about-rightfoot";
import AboutLeftFoot from "../../images/svg/about-leftfoot";

const AboutItem = props => {
  return (
    <div className="about-item">
      <div className="about-title">
        HackBeanpot is about...
      </div>
      <SlideShow/>

      <div className='about-content'>
        <div className="about-footsteps">
          <AboutLeftFoot/>
        </div>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="about-footsteps" style={{paddingTop: '10%'}}>
          <AboutRightFoot/>
        </div>
      </div>
    </div>
  )
}

export default AboutItem;
