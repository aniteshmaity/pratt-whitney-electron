
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import SvgBtn from '../buttons/SvgBtn';

const Card = ({ title, description, imageUrl, videoUrl, link, isButton, triggerCloseAnimation, index, activeIndex }) => {

  const handleOpenExe = () => {
    const exeName = 'connected-aviation.exe'; // ✅ Must match a key in your allowedExes map

    if (!window.api) {
      console.error("❌ window.api is undefined! Check if preload is loaded.");
      return;
    }

    if (!window.api.openExe) {
      console.error("❌ window.api.openExe is not defined! Check preload exposure.");
      return;
    }

    console.log(`🟢 Requesting to launch ${exeName}`);
    window.api.openExe(exeName);
  };
  const videoRef = useRef(null);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);
  return (

    <div className='relative cursor-pointer'>
      <div className='w-[16px] h-[210px] absolute bg-[#E11C37] top-0 -left-[16px] ' />
      <div className='main_box drop-shadow-2xl'>
        <div
          className="h-[432px] bg-white"
          style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 85%, 87% 100%, 53% 100%, 0 100%, 0 0)" }}
        >
          <div className='relative w-full h-[210px] '>

            {/* <img style={{ objectFit: 'cover' }} className='w-full h-full' src={imageUrl} /> */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              // controls
              playsInline
              className=" w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='w-full p-5'>
            <p className='text-[30px] font-[900] pb-2'><span className='text-black'>{title.startName}</span>  <span className='text-[#E11C37]'>{title.endName}</span></p>
            <p className='text-base  pb-5 font-frutiger'>{description}</p>
            {/* Conditional Rendering: Button or Link */}
            {isButton ? (
              index === activeIndex && (<div
                onClick={handleOpenExe}
              >
                <SvgBtn text={`${activeIndex == 0 ? "View Timeline" : "View"}`} height="40px" width="200px" type="timeline-1" textClass="font-frutiger text-[17px] text-bold" showArrow />
              </div>)

            ) : (
              <Link to={{
                pathname: link,
              }}
                state={{ triggerCloseAnimation }}>
                {index === activeIndex && (<SvgBtn text={`${activeIndex == 0 ? "View Timeline" : "View"}`} height="40px" width="200px" type="timeline-1" textClass="font-frutiger text-[17px] text-bold" showArrow />)}

              </Link>
            )}
            {/* <Link to={{
              pathname: link,
            }}
              state={{ triggerCloseAnimation }}>
                {index === activeIndex && (<SvgBtn  text={`${activeIndex == 0 ? "View Timeline" : "View"}`} height="40px" width="200px" type="timeline-1" textClass="font-frutiger text-[17px] text-bold" showArrow />)}
                
               </Link> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Card