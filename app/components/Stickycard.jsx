'use client'
import React from 'react'
import Slidercards from './Slidercards'
import Marqueecards from './Marqueecards'



const Stickycard = ({topval,zval,cards,marqCards,title,no,borderb,endgate,id}) => {
 
  return (
   <div style={{zIndex:`${zval}`}} class={`sticky ${id==='1'&&'top-0'} ${id==='2'&&'top-4 xl:top-6'} ${id==='3'&&'top-8 xl:top-12'}  h-full`}>
    <div class={`w-full h-[100vh] grid grid-cols-1 justify-center px-2 bg-white border-2  xs:px-[20px] md:px-10 lg:px-16 xl:!px-[80px] pt-14 rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px] border-primary-brown  ${borderb?'!border-b-0':'border-b-2'} `}>
                    <div>
                    <div class="flex justify-between text-3xl sm:text-4xl lg:text-[46px] text-[#462B34] font-primaryMedium  "><h1>{title}</h1> <p>0{no}</p>
                    </div>
                    <div class="mt-[30px] mb-[40px] border sm:border-2 border-primary-brown  "></div>
                    <div class=" xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[50px]   ">
                        <Slidercards cards={cards}/>
                        
                    </div>
                    <Marqueecards marqCards={marqCards} />
                    </div>
                </div>
{
  endgate&&
  <div>
    <div class="carousel_zigzag h-20 overflow-hidden"> </div>
  </div>
}
   </div>
  )
}

export default Stickycard
