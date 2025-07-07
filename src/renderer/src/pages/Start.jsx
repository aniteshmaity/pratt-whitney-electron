import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CircleLogo from "../assets/images/circle logo.svg"
import NameLogo from "../assets/images/name logo.svg"
import IndiaInrective from "../assets/images/INDIA _INTERACTIVE.svg"
import MapImage from "../assets/images/Map.svg"

import { Link } from "react-router-dom";
import SvgBtn from "../components/buttons/SvgBtn";
import MapGif from "../assets/images/home/plain animation 1 copy.gif"
import splashVideo from "../assets/images/video/splash-video.mp4"

const TimelineAnimation = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const devRef = useRef(null)
  const buttonRef = useRef(null)
  const footerRef = useRef(null)
  const gifsRef = useRef([]);
    // const videoRef = useRef(null);
    //  const [videoEnded, setVideoEnded] = useState(false);
  useEffect(() => {
    // Create a GSAP timeline
    const timeline = gsap.timeline();


    // Hide the second image initially
    gsap.set(img2Ref.current, { autoAlpha: 0 });
    gsap.set(buttonRef.current, { autoAlpha: 0 });
    gsap.set(footerRef.current, { autoAlpha: 0 })

    // Animation for the first image (rotate in center)
    timeline
      .to(img1Ref.current, {
        duration: 5, // 3 seconds
        rotate: -360, // full rotation
        ease: "power2.inOut", // easing
      })
      .to(
        [img1Ref.current, img2Ref.current],
        {
          duration: 2,
          autoAlpha: 1,
          x: (index) => (index === 0 ? -230 : 70), // img1 moves left (-300), img2 moves right (300)
          ease: "power2.inOut",
        }
      )
      .to(
        [devRef.current, buttonRef.current],
        {
          duration: 1,
          autoAlpha: 1,
          y: (index) => (index === 0 ? -250 : 0), // img1 moves left (-300), img2 moves right (300)
          ease: "power2.inOut",
        }
      )
      .to(footerRef.current, {
        duration: 2, // 3 seconds
        autoAlpha: 1, // full rotation
        ease: "power2.inOut", // easing
      });
        // Then fade in all gifs
        timeline.to(gifsRef.current, {
      duration: 1,
      autoAlpha: 1,
      stagger: 0.3, // optional: shows gifs one by one
      ease: "power2.out",
    });

  }, []);




  return (
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: '100vw' }} className="overflow-hidden relative flex flex-col justify-center items-center">
      <div ref={devRef} className="relative w-[521px] h-[100px]">
        {/* First Image */}
        <img
          src={CircleLogo}
          ref={img1Ref}
          className="w-[100px] h-[100px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />

        <img
          src={NameLogo}
          ref={img2Ref}
          className="w-[421px] h-[100px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center gap-16 z-50" ref={buttonRef}>
        <img src={IndiaInrective} className="w-[267px] h-[35px] " alt="india itrective" />
        <Link to="/home">
        <SvgBtn  text="Tap to Start" height="56px" width="386px" textClass="font-bold text-lg" />
         
        </Link>
        {/* <Link to="/home">
          <div className="relative w-[386px] h-[46px] border-[#A10000] hover:bg-[#A10000] transition-all ease-in duration-75 border-[0.5] bg-[#D91027] text-white font-bold text-lg flex justify-center items-center">
            <div className="w-[18px] absolute -top-[9px] -right-[9px] h-[18px] bg-white rotate-45" />
            <div className="w-[18px] absolute -bottom-[9px] -left-[9px] h-[18px] bg-white rotate-45" />
            Tap to start
          </div>
        </Link> */}
      </div>
      <div ref={footerRef} className="absolute -bottom-[0px] w-full z-10">
        <img src={MapImage} alt="map images" className="w-screen h-full " />
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
  );
};

export default TimelineAnimation;