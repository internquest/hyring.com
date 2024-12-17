'use client'
import React from 'react'
import Slidercards from './Slidercards'
import Marqueecards from './Marqueecards'



const Stickycard = ({topval,zval}) => {
  return (
   <div style={{top:`${topval}rem`,zIndex:`${zval}`}} class={`sticky   h-full`}>
    <div class="w-full h-[100vh] grid grid-cols-1 justify-center px-2 bg-white border-2  xs:px-[20px] md:px-10 lg:px-16 xl:!px-[80px] pt-14 rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[120px] xl:rounded-t-[140px] border-primary-brown   ">
                    <div>
                    <div class="flex justify-between text-3xl sm:text-4xl lg:text-[46px] text-[#462B34] font-primaryMedium  "><h1>Employee Retention</h1> <p>01</p>
                    </div>
                    <div class="mt-[30px] mb-[40px] border sm:border-2 border-primary-brown  "></div>
                    <div class=" xxs:px-[40px] md:px-[30px] xs:px-[45px] sm:px-[50px]   ">
                        <Slidercards/>
                        
                    </div>
                    <Marqueecards/>
                    </div>
                </div>
   </div>
  )
}

export default Stickycard
