import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Close from "../assets/images/close_arrow.svg";
import leftCropedArrow from '../assets/images/maps/left-arrow-croped.png'
// import indiaSvg from "../assets/images/maps/india (1).svg"
import gsap from 'gsap';
import MapCard from '../components/MapCard';
import BlurSvg from '../components/BlurSvg';
import MapSvg from '../components/MapSvg';
import frameBg from "../assets/images/maps/extra/Dots 1 new.webp"
import indiaSvg from "../assets/images/maps/India-new-2.png"
import DotsImg from "../assets/images/maps/extra/Dots 1.webp"
import { FaChevronLeft } from 'react-icons/fa6';
import ReddropSvg from '../components/ReddropSvg';
import mapData from '../components/data/mapData';
import CommonSlideYearProduct from './Product/CommonSlideYearProduct';
import CustomDialog from '../components/CustomDialog';
import { FaChevronRight } from "react-icons/fa6";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import { clearSelectedCity, setSelectedCity } from '../features/presenceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PwInIndiaImage } from '../components/data/pwInIndiaImage';
const MapScreen = () => {
  const buttonsRef = useRef([]);
  const spansRef = useRef([]);
  const mapRef = useRef(null);
  const cardRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImages, setDialogImages] = useState([]);
  const isFirstRender = useRef(true);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedCityIndex, selectedCityData } = useSelector(
  (state) => state.presence
);

const rtxGallery = [
    { img: PwInIndiaImage.image.RTX_gallery_1 },
  { img: PwInIndiaImage.image.RTX_gallery_2 },
  { img: PwInIndiaImage.image.RTX_gallery_3 },
  { img: PwInIndiaImage.image.RTX_gallery_4 },
  { img: PwInIndiaImage.image.RTX_gallery_5 },
  { img: PwInIndiaImage.image.RTX_gallery_6 },
  { img: PwInIndiaImage.image.RTX_gallery_7 },
  { img: PwInIndiaImage.image.RTX_gallery_8 },
  { img: PwInIndiaImage.image.RTX_gallery_9 },
  { img: PwInIndiaImage.image.RTX_gallery_10 },
  { img: PwInIndiaImage.image.RTX_gallery_11 },
  { img: PwInIndiaImage.image.RTX_gallery_12 },
  { img: PwInIndiaImage.image.RTX_gallery_13 },
  { img: PwInIndiaImage.image.RTX_gallery_14 },
  { img: PwInIndiaImage.image.RTX_gallery_15 },
  { img: PwInIndiaImage.image.RTX_gallery_16 },
  { img: PwInIndiaImage.image.RTX_gallery_17 },
  { img: PwInIndiaImage.image.RTX_gallery_18 },
  { img: PwInIndiaImage.image.RTX_gallery_19 },
  { img: PwInIndiaImage.image.RTX_gallery_20 },
  { img: PwInIndiaImage.image.RTX_gallery_21 },
  { img: PwInIndiaImage.image.RTX_gallery_22 },
  { img: PwInIndiaImage.image.RTX_gallery_23 },
  { img: PwInIndiaImage.image.RTX_gallery_24 },
  { video: PwInIndiaImage.video.RTX_video },
  { pdf: PwInIndiaImage.image.RTX_pdf },
]

const indiaGallery = [
    { img: PwInIndiaImage.image.abtInd_1 },
  { img: PwInIndiaImage.image.abtInd_1},
  { img: PwInIndiaImage.image.abtInd_2},
  { img: PwInIndiaImage.image.abtInd_3},
  { img: PwInIndiaImage.image.abtInd_4},
  { img: PwInIndiaImage.image.abtInd_5},
  { img: PwInIndiaImage.image.abtInd_6},
  { img: PwInIndiaImage.image.abtInd_7},
  { img: PwInIndiaImage.image.abtInd_8},
  { img: PwInIndiaImage.image.abtInd_9},
  { img: PwInIndiaImage.image.abtInd_10},
  { img: PwInIndiaImage.image.abtInd_11},
 
]


  const cities = mapData[activeIndex]?.cities || [];
  console.log("activeCity", activeCity);

  const showCards = () => {
    gsap.set(leftCardsRef.current, { x: "-180%", opacity: 0 });
    gsap.set(rightCardsRef.current, { x: "100%", opacity: 0 });

    // Animate in
    gsap.to(leftCardsRef.current, {
      x: "-82%",
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(rightCardsRef.current, {
      x: "0%",
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });
  }; const resetCards = () => {
    if (leftCardsRef.current && rightCardsRef.current) {
      gsap.to(leftCardsRef.current, {
        x: "-180%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to(rightCardsRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };



  const handleClick = (index, type) => {
    console.log("type", type);


    setActiveIndex(index);

    if (type === "navigate") {
      const fletData = mapData[1]?.exploreData
      // console.log("fleetdata", fletData);
      navigate("/products/productdetails", { state: { mapData: fletData, isFleetData: true } });
        dispatch(clearSelectedCity());
       

    }
    if (type === "RTX" || type === "India") {
      console.log("Triggering GSAP showCards");
      showCards();
      dispatch(clearSelectedCity());

    }
    if(type === "India"){
            setActiveCity(null);
    }
    if (type === "animate") {
         setCurrentIndex(null);
            setActiveCity(null);
      console.log("resetAnimation");
      resetCards();
        dispatch(clearSelectedCity());
    }
    // resetCards();

    // Reset all buttons smoothly
    gsap.to(buttonsRef.current, {

      scaleX: 1,
      scaleY: 1,
      backgroundColor: "white",
      color: "black",
      duration: 0.3,
      ease: "power1.out",
    });

    // Apply smooth transformation to the clicked button
    gsap.to(spansRef.current, {
      left: "16px", // Move back to left
      translateX: "-0%",
      duration: 0.3,
      ease: "power1.out",
    });

    // Animate the clicked button + arrow color
    gsap.to(buttonsRef.current[index], {

      scaleX: 1.2, // Grow right
      scaleY: 1.2, // Grow in height

      color: "white",
      duration: 0.3,
      ease: "power1.out",
    });

    // Move text to center
    gsap.to(spansRef.current[index], {
      left: "50%",
      translateX: "-50%",
      duration: 0.7,
      ease: "power1.out",
    });
  };
  useEffect(() => {
    if (buttonsRef.current.length > 0) {
      handleClick(0); // Animate the first button on mount
    }
  }, []);
  // useEffect(() => {

  //   if (mapRef.current) {
  //     if (isFirstRender.current) {
  //       gsap.set(mapRef.current, {
  //         x: cities[currentIndex].x,
  //         y: cities[currentIndex].y,
  //       });
  //     } else {
  //       gsap.to(mapRef.current, {
  //         x: cities[currentIndex].x,
  //         y: cities[currentIndex].y,
  //         duration: 1.3,
  //         ease: "power2.out",
  //       });
  //     }
  //   }
  //   console.log("cardRef.current", cardRef.current);

  //   cardRef.current.forEach((cityGroup, cityIndex) => {
  //     const isActive = cityIndex === currentIndex;

  //     // If the cityGroup is undefined (e.g. cardRef was never set), skip it
  //     if (!cityGroup) return;

  //     Object.values(cityGroup).forEach((cardEl) => {
  //       if (!cardEl) return;

  //       const animationProps = {
  //         opacity: isActive ? 1 : 0,
  //         scale: isActive ? 1 : 0.3,
  //         y: isActive ? 0 : -100,
  //         x: isActive ? 0 : -160,
  //       };

  //       if (isFirstRender.current) {
  //         gsap.set(cardEl, animationProps);
  //       } else {
  //         gsap.to(cardEl, {
  //           ...animationProps,
  //           duration: 0.8,
  //           ease: "power2.out",
  //         });
  //       }
  //     });
  //   });




  //   isFirstRender.current = false;
  // }, [currentIndex]);

  useEffect(() => {
  if (selectedCityIndex !== null && selectedCityIndex !== null) {
    // Automatically re-trigger the city card animation or logic
    setCurrentIndex(selectedCityIndex);
    setActiveCity(selectedCityData)
  }
}, [selectedCityIndex]);

  useEffect(() => {
      if (mapRef.current && currentIndex !== null) {
    const { x, y } = cities[currentIndex];
    if (isFirstRender.current) {
      gsap.set(mapRef.current, { x, y });
    } else {
      gsap.to(mapRef.current, {
        x,
        y,
        duration: 1.3,
        ease: "power2.out",
      });
    }
  }

    cardRef.current.forEach((cityGroup, cityIndex) => {
      if (!cityGroup) return;

      Object.entries(cityGroup).forEach(([key, cardEl]) => {
        if (!cardEl) return;

        const isActive = cityIndex === currentIndex;

        if (isFirstRender.current) {
          gsap.set(cardEl, {
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.3,
            x: isActive ? 0 : -160,
            y: isActive ? 0 : -100,
            pointerEvents: isActive ? "auto" : "none",
          });
        } else {
          gsap.to(cardEl, {
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.3,
            x: isActive ? 0 : -160,
            y: isActive ? 0 : -100,
            pointerEvents: isActive ? "auto" : "none",
            duration: 0.8,
            ease: "power2.out",
          });
        }
      });
    });

    isFirstRender.current = false;
  }, [currentIndex, activeIndex]);



  const handleCityClick = (city) => {
    if(activeIndex === 3) return;
    // If clicked again on the same city, close it
    if (activeCity?.id === city.id) {
      setActiveCity(null);
    } else {
      setActiveCity(city);
    }
  };

  useEffect(() => {
    if (currentIndex === null) return;
    setCurrentIndex(0);
     setActiveCity(null);
  }, [activeIndex])



  const handlePrevClick = () => {
    if (currentIndex === 0) return;

    setCurrentIndex((prev) => (prev === 0 ? cities.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    if (currentIndex === cities.length - 1) return;
    setCurrentIndex((prev) => (prev === cities.length - 1 ? 0 : prev + 1));
  };
 const handlePresenceClick = (index, city) => {
  const isSameCity = activeCity?.id === city.id;

  if (isSameCity) {
    setActiveCity(null);
    setCurrentIndex(null);
    return;
  }

  setActiveCity(city);
  setCurrentIndex(index);
  dispatch(setSelectedCity({ index, city }));
};


  const handleImageClick = (index, img) => {
    console.log("images------", img);
    setDialogImages(img);
    setStartIndex(index);
    setIsDialogOpen(true);
    console.log("handleclick");
  };

  const pageId = 4;
  return (
    <div className=" relative">
      {/* <Link to="/home">
  <div className='absolute bottom-12 right-12 flex text-white z-30 cursor-pointer'style={{
    clipPath: "polygon(0px 0px, 93% 0px, 100% 24%, 100% 100%, 6% 100%, 0px 73%)",
  }}>  
        <div className='flex gap-2 bg-[#acacac] p-2 items-center hover:bg-[#6c6a6a] transition-all'><FaChevronLeft />
        <span className='text-[0.8rem]'>Previous</span></div>
        <div className='flex items-center gap-2 bg-[#E11C37] p-2 hover:bg-[#781a26] transition-all'> <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="16"
    fill="none"
    viewBox="0 0 14 16"
  >
    <path
      fill="#fff"
      d="M0 16V5.5L7 .212 14 5.5V16H8.808V9.616H5.192V16z"
    ></path>
  </svg><span className='text-[0.8rem]'>Home</span></div>
      </div></Link> */}

      <div className="w-screen h-[146px] relative z-30 flex justify-between px-16 items-center border-b border-transparent" style={{
        borderImageSource:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 2.52%, rgba(255, 255, 255, 0.4) 52.55%)",
        borderImageSlice: 1,
      }}>
        {/* <img src={Logo} alt="homeLogo" /> */}
        <div className='flex justify-center items-center gap-8'>
          {/* <Link to="/home">
       <div id="app_closse_2"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 0%, 100% 100%, 21% 100%, 0% 78%, 0% 0%)",
                  }}
                  className="cursor-pointer   w-[44px] h-[32px] bg-[#918F8F]   transition-all flex justify-center items-center text-white font-bold">
        <img src={leftCropedArrow} alt="" />
        </div></Link> */}
          <h2 className='text-[2.1rem] font-[700] font-objektiv leading-[43px]'>Pratt & Whitney in India</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-2xl font-[900]">
            <span className="text-[#E11C37] pr-2">INDIA</span>
            <span className="text-black">INTERACTIVE</span>
          </p>
          <Link to={`/home/${pageId}`}>
            <div
             onClick={() => dispatch(clearSelectedCity())}
              id="app_close"
              className="cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#918F8F] hover:bg-[#727272] flex justify-center items-center text-white font-bold"
            >
              <img src={Close} alt="close_arrow" />
            </div></Link>
        </div>
      </div>
      {/* main section */}
      <div className='w-[560px] absolute z-10 left-[0px] top-[0px]'>

        <div className='relative cursor-pointer'>
          <div className=' drop-shadow-2xl'>
            <div
              className="h-[calc(100vh-200px)] bg-white flex justify-center items-center"
              style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 90%, 87% 100%, 53% 100%, 0 100%, 0 0)" }}
            >
              <div className='w-[70%] m-auto pt-[80px] relative '>
                  <p>
                  <span className='font-[700] font-objektiv text-[2.7rem] '>70 years </span>

                </p>
                <p className='leading-[50px]'>
                  <span className='font-[700] font-objektiv text-[2.7rem]'>of </span>
                  <span className='font-[700] font-objektiv text-[2.7rem] text-[#D91027]'> Powering</span>
                    </p>
                  <p className=' text-[2.7rem] font-objektiv font-[700] leading-[50px] block'>Indian Aviation</p>
              
                <div
                  className="pt-[30px] pl-[30px] flex flex-col justify-center gap-4 mt-10 border-t border-transparent"
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 25.52%, rgba(255, 255, 255, 0.4) 92.55%)",
                    borderImageSlice: 1,
                  }}
                >
                  {mapData.map((button, index) => (
                    <div
                      key={button.id}
                      ref={(el) => (buttonsRef.current[index] = el)}
                      onClick={() => handleClick(index, button.type)}
                      className="relative w-[170px] h-[32px] flex items-center justify-start cursor-pointer transition-all hover:scale-[1.03]"
                      style={{
                        transformOrigin: "left center",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full z-0"
                        fill="none"
                        viewBox="0 0 282 52"
                        preserveAspectRatio="none"
                      >
                        <path
                          fill={activeIndex === index ? "#D91027" : "#FFFFFF"}
                          stroke="#A20000"
                          strokeWidth={activeIndex === index ? "0.5" : "0"}
                          d="M280 .75H14.962a1.25 1.25 0 0 0-1 .501L.998 18.584a1.25 1.25 0 0 0-.249.749V50c0 .69.56 1.25 1.25 1.25h265.921c.404 0 .783-.195 1.017-.523l12.079-16.913c.152-.212.233-.467.233-.727V2c0-.69-.56-1.25-1.25-1.25Z"
                        />
                      </svg>

                      {/* Button text with arrow */}
                      <span
                        ref={(el) => (spansRef.current[index] = el)}
                        className={`relative z-10 ${activeIndex === index ? "text-white" : "text-black"}  font-bold text-sm`}
                      >
                        {button.name}
                        <span className={`
      absolute left-[-18px] top-1/2 -translate-y-1/2
      before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 
      before:border-r-[8px] before:border-transparent 
      before:border-l-[8px] ${activeIndex === index ? "before:border-l-white" : "before:border-l-[#D91027]"} 
      before:border-y-[5px] before:border-y-transparent
    `} />
                      </span>
                    </div>
                  ))}
                </div>



              </div>
            </div>
          </div>


        </div>


        {/* <div className='absolute top-[-100px] left-0'>
          <BlurSvg />
        </div> */}


        {/* svg dots */}
        <div className='absolute top-[146px] left-[70px]'>
          <div className='absolute top-0 translate-x-[-50%] translate-y-[-50%]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <circle cx="9" cy="9" r="9" fill="#000" fillOpacity="0.1"></circle>
              <circle cx="9" cy="9" r="5" fill="#B1B1B1"></circle>
            </svg></div>

          <div className='absolute bottom-0 translate-x-[-50%] translate-y-[50%]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <circle
                cx="9"
                cy="9"
                r="9"
                fill="#000"
                fillOpacity="0.1"
                transform="rotate(90 9 9)"
              ></circle>
              <circle
                cx="9"
                cy="9"
                r="5"
                fill="#D91027"
                transform="rotate(90 9 9)"
              ></circle>
            </svg>
          </div>
          <div className='w-[1px] h-[100px] bg-[#00000066]' />
        </div>
      </div>




      <div className='overflow-hidden w-full   h-[calc(100vh-146px)] bg-[#f5f5f5] relative'>
        <img src={frameBg} alt="" className='w-full h-full absolute top-0 left-0' />
        <div ref={mapRef} className='relative w-[60%] ml-auto h-full'>


          <div ref={leftCardsRef} className="absolute  left-0 w-[400px] " style={{ opacity: 0, transform: "translateX(-100%)" }}>


            <div className=' drop-shadow-2xl'>
              <div
                className="h-[calc(100vh-400px)] bg-white/70 "
                style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 92%, 90% 100%, 53% 100%, 0 100%, 0 0)" }}
              >
                <div className='max-w-[180px] mx-auto pl-[40px] pt-[20%]'

                >
                  {mapData[activeIndex]?.leftCardData?.engineData.map((item, index) => (
                    <div key={index} className="engine-card flex gap-5 mb-4 items-center">
                      <img
                        className="w-[40px] shadow-[3px_7px_20px_10px_#6b646426] h-[40px] object-cover rounded-full"
                        src={item?.logo}
                        alt="card"
                      />
                      <div>
                        <h2 className=" text-[#D91027] text-[1.8rem] font-[800] font-objektiv">{item?.text}</h2>
                        <p className='text-[0.7rem]  font-bold'>{item?.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>





          </div>

          <div ref={rightCardsRef} className={`absolute right-0 top-0 w-[320px] `}
            style={{ opacity: 0, transform: "translateX(100%)" }}
          >
            <div className=' drop-shadow-2xl'>
              <div
                className={` ${mapData[activeIndex]?.rightCardData?.name === "" ? "h-[calc(100vh-400px)]" : "h-[calc(100vh-200px)]"}  bg-white/70 flex justify-center `}
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 140%, 0% 94%, 0% 100%)" }}
              >
                <div className={`   ${mapData[activeIndex]?.rightCardData?.name === "" ? "pt-[20%] pb-[40px]" : "px-4 pt-[20%]"}`}>
                  {mapData[activeIndex]?.rightCardData?.name !== "" && (<h2 className="text-[1.5rem] font-[900] text-[#D91027] mb-4">
                    {mapData[activeIndex]?.rightCardData?.name}
                  </h2>)}

                  {mapData[activeIndex]?.rightCardData?.engineData.map((item, index) => (
                    <div key={index} className={`engine-card ${mapData[activeIndex]?.rightCardData?.name === "" ? "mb-4 w-[180px]" : "mb-4"}`}>
                      {/* <h2>{item?.name}</h2> */}
                      <div className='flex gap-5  items-center'>
                        <img
                          className={` object-cover  shadow-[3px_7px_20px_10px_#6b646426] rounded-full bg-white ${mapData[activeIndex]?.rightCardData?.name === "" ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"}`}
                          src={item?.logo}
                          alt="card"
                        />
                        {
                          mapData[activeIndex]?.rightCardData?.name === "" ? (
                            <div>
                              <h2 className=" text-[#D91027] text-[1.8rem] font-[800] font-objektiv">{item?.text}</h2>
                              <p className='text-[0.7rem] font-bold '>{item?.desc}</p>
                            </div>
                          ) : (
                            <p className='text-[0.8rem]  pt-2 font-bold'>{item?.engine}</p>
                          )
                        }


                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>

          {/* //logo with city */}
          {(activeIndex === 0 || activeIndex === 2 || activeIndex === 3) &&
            mapData[activeIndex]?.cities?.map((city, index) => (
              <div
                key={index}
            onClick={() => {
  if (activeIndex === 0) {
    handlePresenceClick(index,city); 
  } else {
     handleCityClick(city)
  }
}}
                className={`flex flex-col items-center absolute z-[99] ${city.cityPosition} cursor-pointer`}
              >
  
                  <ReddropSvg className={"z-[40px]"}/>
 
                <div>
                  <h2 className="font-objektiv text-[0.8rem] font-semibold">{city.name}</h2>
                </div>
              </div>
            ))}

          {activeCity && activeIndex === 2 && (
            <div className={`absolute  p-4 flex gap-4 w-[380px] z-[999] ${activeCity.position}`}>
              <img
                src={activeCity.data.img}
                alt={activeCity.title}
                className="w-[80px] h-[80px] rounded-full object-cover"
              />
              <div>
                {activeCity.data?.items?.map((item) => (
                  <div key={item.id} className=" mb-2 ">

                    <div>
                      <h3 className="text-[0.7rem] font-black text-[#D91027]">{item.title}</h3>

                      {item.desc && (
                        <p className="text-[0.6rem] pt[1px] text-gray-700 font-[700]">{item.desc}</p>
                      )}

                      {item.descList && (
                        <ul className="list-none leading-[10px] font-[700]  pt-[1px] text-[0.6rem] text-gray-700 space-y-1">
                          {item.descList.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>


            </div>
          )}
          {/* Line from dot to card (corner line example) */}
          {
            activeCity && (
              <svg className={`absolute w-[200px] z-[10] h-[200px] pointer-events-none ${activeCity.svgPosition}`} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {activeCity?.linePath?.length >= 2 &&
                  activeCity.linePath.slice(1).map((point, i) => (
                    <line
                      key={`line-${i}`}
                      x1={activeCity.linePath[i].x}
                      y1={activeCity.linePath[i].y}
                      x2={point.x}
                      y2={point.y}
                      stroke="black"
                      strokeWidth="1.5"
                    />
                  )
                  )}
              </svg>
            )
          }


          <div className='h-[90%] w-[85%] pt-[50px]'>
            <img src={indiaSvg} className='w-full h-full' />
          </div>

          {/* gallery section */}
          {
            (mapData[activeIndex]?.name === "RTX in India" || mapData[activeIndex]?.name === "About India") && (
              <div className='absolute bottom-8'>
                <div className="w-full m-auto">

                  <div className="relative w-[110px] h-[48px]">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 110 42"
                    >
                      <path
                        fill="#242021"
                        stroke="#D91027"
                        d="M.5 11.457 11.457.5H109v30.043L98.043 41.5H.5z"
                      ></path>
                    </svg>
                    <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">Gallery</p>
                    <div className="absolute -right-[88px] top-1/2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="88"
                        height="19"
                        fill="none"
                        viewBox="0 0 88 19"
                      >
                        <path stroke="#D91027" d="M.5 1.25h75.75L87.5 18.5"></path>
                        <path
                          fill="#D91026"
                          d="M48.5 1.25h27.75L83 11l-3-.75-4.5-6.75H50.75z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="slider-section w-[650px]  mt-5">


                  <CommonSlideYearProduct
                    onImageClick={handleImageClick}
                    gallery={ activeIndex === 2 ? rtxGallery : indiaGallery}
                  />

                </div>
              </div>
            )
          }





          {/* <img src={indiaSvg} alt="" className='w-[100%] ' /> */}
          {/* <MapCard  cardclass="absolute top-[50%] left-[40%]" /> */}
          {activeIndex === 0 &&
            cities.map((city, index) => (
              <MapCard
                key={city.id}
                city={city}
                data={city.data}
                cardclass={`absolute ${city.position}`}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
                cardRef={(el, dataIndex) => {
                  if (!cardRef.current[index]) {
                    cardRef.current[index] = {};
                  }
                  cardRef.current[index][dataIndex] = el;
                }}
                currentIndex={currentIndex}
                index={index}
                length={cities.length}
              />
            ))}

        </div>

      </div>

      {isDialogOpen && (
        <CustomDialog
          images={dialogImages}
          startIndex={startIndex}
          onClose={() => setIsDialogOpen(false)}
        />
      )}

      {/* --------------------------buttons------------ */}

      {/* {activeIndex === 0 && (
        <div className='absolute bottom-8 right-16 flex '>
          <div
            className={`left_arrow_clip_path cursor-pointer w-[60px] h-[40px] flex justify-center items-center  ${currentIndex === 0
              ? 'bg-[#918F8F]'
              : 'bg-[#D91027] hover:bg-[#742730]'
              } text-white font-bold z-10`}
            onClick={handlePrevClick}
          >
            <FaChevronLeft />
          </div>
          <div
            className={`right_arrow_clip_path cursor-pointer w-[60px] h-[40px] flex justify-center items-center ${currentIndex === cities.length - 1
              ? 'bg-[#918F8F]'
              : 'bg-[#D91027] hover:bg-[#742730]'
              } text-white font-bold z-10`}
            onClick={handleNextClick}
          >
            <FaChevronRight />
          </div>
        </div>
      )} */}


      <div className="absolute grid grid-cols-2 bottom-8  z-40 left-12" style={{
        clipPath:
          "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
      }}>
        <Link to={`/home/${pageId}`}>
          <div className="bg-[#918F8F] text-white flex justify-center items-center px-3 py-2 gap-1 hover:bg-[#656363]">
            <BiSolidChevronLeft className="h-full w-[20px]" />
            <p className="text-[1rem]">Previous</p>
          </div></Link>

        <Link to={`/home/${pageId}`}>
          <div onClick={""} className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-2 gap-2 hover:bg-red-800">
            <BiHomeAlt2 className="h-full w-[20px]" />
            <p className="text-[1rem]">Home</p>
          </div>
        </Link>
      </div>
    </div>


  )
}

export default MapScreen
