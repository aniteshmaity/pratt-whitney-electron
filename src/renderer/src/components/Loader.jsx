import React, { useEffect, useRef } from 'react'
import CircleLogo from "../assets/images/circle logo.svg"
import { Html } from '@react-three/drei';
import gsap from 'gsap';

const Loader = () => {

    const imgRef = useRef(null);

    useEffect(() => {
     
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          rotation: 360,
          repeat: -1,
          duration: 1.5,
          ease: "linear",
        });
      }
    }, []);
  return (
    <Html center>
       <div className="flex justify-center items-center">
      <div
        className={`w-[90px] h-[90px] border-[6px] border-t-transparent border-white rounded-full animate-spin`}
      ></div>
    </div>
  </Html>
  )
}

export default Loader