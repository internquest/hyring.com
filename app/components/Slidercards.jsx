'use client'
import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderIndiv from './SliderIndiv';

const Slidercards = ({cards}) => {
    var settings = {
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      // console.log(cards);
      
  return (
    <Slider {...settings}>
        

        {
          cards.map((card,index)=>{
            return(
              <SliderIndiv key={index} title={card.title} desc={card.desc} image={card.image} bgcolor={card.bgcolor}/>
            )
          })
        }
         

        </Slider>
  )
}

export default Slidercards
