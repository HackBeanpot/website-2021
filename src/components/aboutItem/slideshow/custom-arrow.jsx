import React  from "react";
import PrevArrow from '../../../images/svg/about-leftarrow';
import NextArrow from '../../../images/svg/about-rightarrow';


export function AboutNextArrow(props) {
  const { style, onClick, currSlide, updateSlide, slideCount } = props;
  return (
    <div
      className="custom-arrow custom-arrow-next"
      style={{...style}}
      onClick={onClick}
    >
      <NextArrow/>
    </div>
  );
}

export function AboutPrevArrow(props) {
  const { style, onClick, currSlide, updateSlide, slideCount } = props;
  return (
    <div
      className="custom-arrow custom-arrow-prev"
      style={{...style}}
      onClick={onClick}
    >
      <PrevArrow/>
    </div>
  );
}
