import React, {useState} from 'react';
import SlideShow from "./slideshow/slideshow";
import AboutRightFoot from "../../images/svg/about-rightfoot";
import AboutLeftFoot from "../../images/svg/about-leftfoot";
import Slide1 from '../../images/slide1.jpg';
import Slide2 from '../../images/slide2.jpg';
import Slide3 from '../../images/slide3.jpg';
import Slide4 from '../../images/slide4.jpg';
import Slide5 from '../../images/slide5.jpg';

const AboutItem = props => {
  const [currSlide, updateSlide] = useState(0);
  const SlideArray = [{
    picture: Slide1,
    caption: "Building connections"
  }, {
    picture: Slide2,
    caption: "Creating new projects"
  }, {
    picture: Slide3,
    caption: "Learning new things"
  }, {
    picture: Slide4,
    caption: "Connecting with our partners in the Boston tech community"
  }, {
    picture: Slide5,
    caption: "Fostering a sense of community"
  }];
  return (
    <div className="about-item">
      <div className="about-title">
        HackBeanpot is about...
      </div>
      <SlideShow slides={SlideArray} currSlide={currSlide} updateSlide={updateSlide}/>

      <div className='about-content'>
        <div className="about-footsteps">
          <AboutLeftFoot/>
        </div>
        <p className="about-paragraph">
          {SlideArray[currSlide].caption}
        </p>
        <div className="about-footsteps" style={{paddingTop: '10%'}}>
          <AboutRightFoot/>
        </div>
      </div>
    </div>
  )
}

export default AboutItem;
