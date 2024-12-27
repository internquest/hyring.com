import React from 'react'
import Marquee from "react-fast-marquee";
import Marqindiv from './Marqindiv';
const Marqueecards = ({marqCards}) => {

  return (
    
    <Marquee className='py-14'>


      {
        marqCards.map((card,index)=>{return(<Marqindiv key={index} index={index} text={card.text} bgcolor={card.bgcolor} fillcolor={card.fillcolor}/>)})
      }
        {/* <Marqindiv text={} fillcolor={} bgcolor={}/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/>
        <Marqindiv/> */}
    </Marquee>
  )
}

export default Marqueecards
