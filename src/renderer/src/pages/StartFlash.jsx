import React, { useEffect, useRef } from 'react'
import CircleLogo from "../assets/images/circle logo.svg"
import NameLogo from "../assets/images/name logo.svg"
import IndiaInrective from "../assets/images/INDIA _INTERACTIVE.svg"
import MapImage from "../assets/images/Map.svg"
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import SvgBtn from '../components/buttons/SvgBtn'
import MapGif from "../assets/images/home/plain animation 1 copy.gif"

const StartFlash = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const devRef = useRef(null);
  const buttonRef = useRef(null);
  const footerRef = useRef(null);
  const gifsRef = useRef([]);
      useEffect(() => {
         const timeline = gsap.timeline();
        // Animation for devRef (top-left to middle)
        gsap.fromTo(
          devRef.current,
          { x: '-100%', y: '-500%', opacity: 1 }, // Start position (top-left corner)
          { x: '0%', y: '-250%', opacity: 1, duration: 1.5, ease: 'power3.out' } // End position (center)
        );
    
        // Animation for MapImage (scale 0.4 to 1)
        gsap.fromTo(
          footerRef.current,
          { scale: 0.2, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' } // Delayed start
        );

        timeline.to(gifsRef.current, {
          duration: 1,
          autoAlpha: 1,
          stagger: 0.3, // optional: shows gifs one by one
          ease: "power2.out",
        });
      }, []);

  return (
     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: '100vw' }} className="overflow-hidden relative flex flex-col justify-center items-center">
          <div ref={devRef} className="relative flex gap-4 w-[521px] h-[100px]">
            {/* First Image */}
            <img
              src={CircleLogo}
              ref={img1Ref}
              className="w-[100px] h-[100px] "
            />
    
            <img
              src={NameLogo}
              ref={img2Ref}
              className="w-[421px] h-[100px] "
            />
          </div>
          <div className="absolute flex flex-col justify-center items-center gap-16 z-40" ref={buttonRef}>
            <img src={IndiaInrective} className="w-[267px] h-[35px] " alt="india itrective" />
            <Link to="/home">
            <SvgBtn  text="Tap to Start" height="56px" width="386px" textClass="font-bold text-lg" />
         {/* <div className='relative'>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white font-bold text-lg flex justify-center items-center">
         
         Tap to start

       </div>
         <div className='absolute -z-10 -top-[50px] left-1/2 -translate-x-1/2 w-[480px] h-[155px]'>
         <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
          preserveAspectRatio="none"
    viewBox="0 0 412 118"
     className="w-full h-full"
  >
    <g filter="url(#filter0_f_1053_1261)">
      <path
        fill="#CE1126"
        fillOpacity="0.3"
        d="M366.806 30.776a2 2 0 0 0-1.582-.776H32a2 2 0 0 0-2 2v34.871a2 2 0 0 0 .46 1.277l15.863 19.129a2 2 0 0 0 1.54.723H380a2 2 0 0 0 2-2V51.091c0-.443-.147-.874-.418-1.224z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_f_1053_1261"
        width="412"
        height="118"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_1053_1261"
          stdDeviation="15"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
         </div>
         <div className='w-[386px] h-[56px]'>
         <svg
    xmlns="http://www.w3.org/2000/svg"
  className="w-full h-full"
    fill="none"
    viewBox="0 0 226 34"
      preserveAspectRatio="none"
  >
    <path
      fill="#D91027"
      stroke="#3B3B3B"
      d="M214.071 1.19c.699 0 1.366.292 1.839.807l8.895 9.663c.425.462.66 1.066.66 1.693v17.268a2.5 2.5 0 0 1-2.5 2.5H13.293a2.5 2.5 0 0 1-1.78-.745l-9.57-9.703a2.5 2.5 0 0 1-.719-1.756V3.69a2.5 2.5 0 0 1 2.5-2.5h210.347Z"
    ></path>
  </svg>
         </div>

     
         </div> */}
            </Link>
          </div>
          <div ref={footerRef} className="absolute -bottom-[0px] w-full z-10">
            <img src={MapImage} alt="map images" className="w-screen h-full" />
       
         
            {/* <video className="absolute bottom-0" src={MapVideo} muted loop autoPlay></video> */}
          </div>
          {[  
                 { className: 'w-[600px] h-[300px] bottom-[25%] right-[13%]' },
                 { className: 'w-[350px] h-[200px] bottom-[22%] right-[22%]' },
                 { className: 'w-[350px] h-[200px] bottom-[16%] right-[14%]' },
                 { className: 'w-[300px] h-[150px] bottom-[30%] left-[24%]' },
                 { className: ' w-[300px] h-[150px] bottom-[29%] left-[22%]' },
               ].map((style, i) => (
                 <div
                   key={i}
                   ref={el => gifsRef.current[i] = el}
                   className={`absolute opacity-0 z-20 ${style.className}`}
                 >
                   <img
                     src={MapGif}
                     alt={`map gif ${i + 1}`}
                     className="w-screen h-full"
                   />
               
                 </div>
               ))}
        </div>
  )
}

export default StartFlash