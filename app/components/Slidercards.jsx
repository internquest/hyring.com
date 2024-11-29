import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderIndiv from './SliderIndiv';

const Slidercards = () => {
    var settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
        
            <SliderIndiv/>
        
        
            <SliderIndiv/>

        </Slider>
  )
}

export default Slidercards
