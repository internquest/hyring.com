'use client'
import Image from "next/image";
import bglottie from '@/public/bg-lottie.png';
import Stickycard from "./components/Stickycard";
import Marqueecards from "./components/Marqueecards";
import Hyringaproach from "./components/Hyringaproach";
import { useEffect, useState } from "react";
// import Stickycard from "./components/Stickycard";

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [positionY, setPositionY] = useState(30);
  const [dragStartY, setDragStartY] = useState(0);
  const handleMouseDown = (e) => {
      setIsDragging(true);
      setDragStartY(e.clientY - positionY);
    };
  // console.log(dragStartY);
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      // Calculate new position
      const newPosition = e.clientY - dragStartY;
      
      // Clamp the position between 30 and 744
      const clampedPosition = Math.min(Math.max(newPosition, 30), 744);
      setPositionY(clampedPosition);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  // console.log(positionY,isDragging);
  useEffect(() => { 
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  },[])
  
  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
  <div className="relative overflow-hidden">
    <div className="w-screen justify-center flex items-center min-h-[540px]  h-screen  overflow-hidden !cursor-default" id="whyIndia">
    <div className="max-h-[600px] flex flex-col py-4 gap-0 sm:gap-0 justify-center items-center ">
      <div className="text-center text-[2rem] sm:text-[2.25rem] md:text-[2.5rem]  lg:text-5xl  leading-[50px]    text-white  font-primaryBold px-5 ">Why Hire Indian Talents</div>

      <div className=" select-none scale-[1.4] xs:scale-[1.4] sm:scale-[1.25] md:scale-[1.1]  h-[70vh] !cursor-default">
        <div  role="button" aria-label="animation" tabIndex="0" style={{width: '100%', height: '100%', overflow: 'hidden', margin: '0px auto', outline: 'none'}} fdprocessedid="2wty7c">
           <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 906" width="1440" height="906" preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible',}}>
          <defs>
          <clipPath id="__lottie_element_116"><rect width="1440" height="906" x="0" y="0"></rect></clipPath>
          <clipPath id="__lottie_element_127"><path d="M0,0 L841,0 L841,600 L0,600z"></path></clipPath>
          <clipPath id="__lottie_element_163"><path d="M0,0 L108,0 L108,120 L0,120z"></path></clipPath>
          <clipPath id="__lottie_element_156"><path d="M0,0 L108,0 L108,120 L0,120z"></path></clipPath>
          <clipPath id="__lottie_element_149"><path d="M0,0 L108,0 L108,120 L0,120z"></path></clipPath>
          </defs>
          <g clip-path="url(#__lottie_element_116)">
<g clip-path="url(#__lottie_element_127)" style={{display: 'block',}} transform="matrix(1,0,0,1,351.5,141)" opacity="1">
  <g style={{display: 'block'}} transform='matrix(1,0,0,1,-0.25,130.75900268554688)'  opacity="1"><image width="781px" height="449px" preserveAspectRatio="xMidYMid slice" xlinkHref='./bg-lottie.png'></image></g>
  <g class="ai" clipPath="url(#__lottie_element_163)" style={{display: 'block'}} transform="matrix(1,0,0,1,96,225.5)" opacity="1">
  <g class="ai animate-number-scale" style={{display: 'block'}} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
    <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
  </g>
  </g>
  <g class="ai" clip-path="url(#__lottie_element_156)" style={{display: 'block'}} transform="matrix(1,0,0,1,308,225.5)" opacity="1">
    <g class="ai animate-number-scale" style={{display: 'block'}} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
      <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image>
    </g>
  </g>
  <g class="ai" clip-path="url(#__lottie_element_149)" style={{display: 'block'}} transform="matrix(1,0,0,1,524,225.5)" opacity="1">
    <g class="ai animate-number-scale" style={{display: 'block'}} transform="matrix(1,0,0,1,4,-1032)" opacity="1">
     <image width="108px" height="1456px" preserveAspectRatio="xMidYMid slice" href="./numbersscale.png"></image> 
    </g>
  </g>
 </g>

          </g>
          </svg>  
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative min-h-[90vh] mt-20 max-w-[1800px] mx-auto my-0">
  <Stickycard topval={0}/>
  <Stickycard topval={1.5}/>
  <Stickycard topval={3} zval={20}/>
  </div>
  <Hyringaproach onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} positionY={positionY}/>
<div className="h-screen w-full"></div>
  {/* <Marqueecards/> */}
  </div>
  );
}
