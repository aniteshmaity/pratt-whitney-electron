import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import gtf from '../../assets/100years/gtf-engine.png';
import v2500_1 from '../../assets/100years/v2500-1.png';
import v2500_2 from '../../assets/100years/v2500-2.png';
import v2500_3 from '../../assets/100years/machine-1.png';
import { Link } from 'react-router-dom';
import SvgBtn from '../../components/buttons/SvgBtn';

// const engines = [
//   { id: 'gtf', img: gtf, title: 'GTF Engine', description: "Powering today's Most efficient single aircraft" },
//   { id: 'v2500_1', img: v2500_1, title: 'v2500_1', description: "Powering today's Most efficient single aircraft" },
//   { id: 'v2500_2', img: v2500_2, title: 'v2500_2', description: "Powering today's Most efficient single aircraft" },
//   { id: 'v2500_3', img: v2500_3, title: 'v2500_3', description: "Powering today's Most efficient single aircraft" },
// ];

const ProductCard = ({onExploreClick,engines,activeEngineIndex, setActiveEngineIndex}) => {
  // console.log("engines",engines);
  // console.log("onclikc",onExploreClick);
  // const [activeEngineIndex, setActiveEngineIndex] = useState(0);
  // console.log("activeEngineIndex",activeEngineIndex);

  const handleEngineClick = (index) => {
    if (index === activeEngineIndex) return;

    const outgoingContent = document.querySelector(`.content-${engines[activeEngineIndex].id}`);
    const incomingContent = document.querySelector(`.content-${engines[index].id}`);

    const isBefore = index < activeEngineIndex; // Check if new content is before or after
    const outgoingDirection = isBefore ? 50 : -50; // Outgoing direction depends on order
    const incomingStart = isBefore ? -50 : 50; // Incoming content starts from the correct direction

    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'power2.out',
      },
    });

    // Set the initial state (both contents should overlap)
    gsap.set([outgoingContent, incomingContent], { position: 'absolute', top: 0, left: 0 });

    // Outgoing content animation (smooth exit)
    tl.to(outgoingContent, {
      x: outgoingDirection,
      opacity: 0,
      scale: 0.9, // Shrink the outgoing content
      onComplete: () => {
        gsap.set(outgoingContent, { display: 'none' });
      },
    });

    // Incoming animation
    gsap.set(incomingContent, { display: 'block',position: 'relative', opacity: 0, x: incomingStart, scale: 0.9 });
    tl.to(incomingContent, { opacity: 1, x: 0, scale: 1 });

    // Update the active index after animation
    setActiveEngineIndex(index);

    const outgoingEngine = document.querySelector(`.engine-${engines[activeEngineIndex].id}`);
    const incomingEngine = document.querySelector(`.engine-${engines[index].id}`);

    // Scale down the outgoing engine and scale up the incoming engine
    gsap.to(outgoingEngine, {
      scale: 1, // Reset the scale of the outgoing engine
      duration: 0.4,
    });

    gsap.to(incomingEngine, {
      scale: 1.3, // Enlarge the incoming engine image
      duration: 0.4,
    });
 
  };

  useEffect(() => {
    
    gsap.set(`.engine-${engines[activeEngineIndex]?.id}`, { scale: 1.3 });
    //  setActiveEngineIndex(0);
  }, [engines]);

  useEffect(() => {
    // Set initial state using GSAP for active content
    engines.forEach((_, index) => {
      const content = `.content-${engines[index]?.id}`;
      if (index === activeEngineIndex) {
        gsap.set(content, { display: 'block', opacity: 1 });
      } else {
        gsap.set(content, { display: 'none', opacity: 0 });
      }
    });
    
  }, [engines]);

  return (
    <div className="flex gap-8 items-start justify-start pl-[40px] py-[20px] max-w-[1080px] no-scrollbar overflow-auto">
      {/* Engines with Content in Rows */}
      {engines.map((engine, index) => (
        <div
          key={engine.id}
          className="flex items-center gap-[50px] engine-row relative" // Each row of image + content
        >
          {/* Engine Image */}
          <div className='flex flex-col items-center'>
            <div
              className={`rounded-full scale-[0.9]  w-[125px] h-[125px] shadow-[2px_4px_8px_6px_#b1afaf3d] z-40 relative p-[7px] bg-white cursor-pointer flex flex-col  engine-${engine.id}`}
              onClick={() => handleEngineClick(index)}
            >
              <div className='border-[1px] w-full h-full rounded-full shadow-[1px_0px_4px_3px_#b1afaf3d] overflow-hidden'>
                <img src={engine.img} alt={engine.title} className="w-full h-full object-contain " />
              </div>
            </div>     
            <h2 className='text-[#D91027] font-[900] text-[1.3rem] bottom-0'>{index === activeEngineIndex ? "" : engine.title.length > 7 ? `${engine.title.slice(0, 7)}...` : engine.title}</h2>
          </div>

          {/* Engine Content */}
          <div
            className={`bg-white p-3 rounded-md  content-${engine.id}`}
          >
            <div className="flex flex-col gap-[8px]  w-[180px] ">
              <h2 className="text-[1.6rem] font-[900]"> {engine.title.length > 10 ? `${engine.title.slice(0, 8)}...` : engine.title}</h2>
              <p className="text-[11px] font-[600] max-w-[180px]">{engine.description}</p>
             <button  onClick={() => {
          console.log("Explore clicked!"); // Test console log
          onExploreClick(engine.details);
        }} className="bg-red-600 max-w-[100px] text-white text-[13px] p-1 w-[80%] flex justify-center items-center gap-2 mt-4" style={{
                clipPath: "polygon(7% 0%, 100% 0%, 100% 70%, 93% 100%, 0% 100%, 0% 30%)",
              }}>Explore
              <svg
                            width="10"
                            height="9"
                            viewBox="0 0 9 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.02998 5L0.529984 0.669873V9.33013L8.02998 5Z"
                              fill="white"
                            />
                          </svg>
              </button>

              {/* <SvgBtn text="Explore" height="25px" width="95px" textClass=" font-[700] text-[10px]"  showArrow /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
