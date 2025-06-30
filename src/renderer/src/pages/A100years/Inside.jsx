import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Terrain from "../../assets/100years/67d6070a8e0d8b58ee5ae49760b538aa.png";
import Logo from "../../assets/images/home_logo.svg";
import Close from "../../assets/images/close_arrow.svg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { gsap } from "gsap";
// Import local images
import airplaneImage1 from "../../assets/100years/air-1.png";
import airplaneImage2 from "../../assets/100years/aero-2.png";
import airplaneImage3 from "../../assets/100years/aero-3.png";
import airplaneImage4 from "../../assets/100years/aero-4.png";
import bracketImage from "../../assets/100years/bracket-image.png";
import { Link, useNavigate } from "react-router-dom";
import YearCuroselDetails from "./YearCuroselDetails";
import logo100 from "../../assets/100years/100-logo.png";

function YearCurosel() {
    const navigate = useNavigate();
  const years = [
    {
      year: "1950s",
      name: "1950",
      description: "This is the description for the year 2020.",
    },
    {
      year: "1960s",
      name: "1960",
      description: "This is the description for the year 2021.",
    },
    {
      year: "1970s",
      name: "1970",
      description: "This is the description for the year 2022.",
    },
    {
      year: "1980s",
      name: "1980",
      description: "This is the description for the year 2023.",
    },
    {
      year: "1920s",
      name: "1920",
      description: "This is the description for the year 2017.",
    },
    {
      year: "1930s",
      name: "1930",
      description: "This is the description for the year 2018.",
    },
    {
      year: "1940s",
      name: "1940",
      description: "This is the description for the year 2019.",
    },
  ];
  const airplaneImages = [
    airplaneImage1,
    airplaneImage2,
    airplaneImage3,
    airplaneImage4,
    airplaneImage4,
    airplaneImage4,
    airplaneImage3,
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Middle card active by default
  const [prevActiveIndex, setPrevActiveIndex] = useState([]);
  const [translateValues, setTranslateValues] = useState([0]);
  const [sliderReady, setSliderReady] = useState(false);
  const [direction, setDirection] = useState("next"); 
  // const [airplanes, setAirplanes] = useState([
  //   { id: 0, image: airplaneImages },
  // ]);
  // console.log("airplane", airplanes);
  console.log("prevactivity",prevActiveIndex);
  const [imagePosition, setImagePosition] = useState(0);
  const airplaneRefs = useRef([]);
  const [yearDetails, setYearDetails] = useState("");
  console.log("activeindex", activeIndex);
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    variableWidth: false,
    beforeChange: (_, next) => handleSlideChange(next),
  };

  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    setDirection("prev");
    setImagePosition((prev) => prev - 50);
    setPrevActiveIndex((prev) => prev.slice(0, prev.length - 1));
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
    setPrevActiveIndex((prev) => [...prev, activeIndex]);
    setImagePosition((prev) => prev + 50);
    setDirection("next");
   
  };

  const handleSlideChange = (nextIndex) => {
    console.log("nextindex", nextIndex);
    // if (sliderRef.current) {
    //   sliderRef.current.slickGoTo(nextIndex);
    // }

    setActiveIndex(nextIndex);
  };

  // const handleCloseApp = () => {
  //   console.log(window.api);
  //   window.api.closeApp();
  // };

  const handleExplore = () => {
    setYearDetails("view");
 
  };
  // Apply GSAP animation when translateValues change
  // useEffect(() => {
  //   airplaneRefs.current.forEach((airplane, index) => {
  //     if (airplane) {
  //       gsap.to(airplane, {
  //         x: translateValues[index],
  //         duration: 0.6, // Animation duration
  //         ease: "power2.out", // Easing function
  //       });
  //     }
  //   });
  // }, [translateValues]);
  const animateAirplanes = (index,direction) => {
    console.log("indexing-",index);
    airplaneRefs.current.forEach((el, idx) => {
      if (idx === index) {
        if(direction ==="next"){
          gsap.to(el, {
            x: 0, // Active airplane moves to center
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        }else{
          gsap.to(el, {
            x: -130, // Move off-screen
            opacity: 0, // Make invisible
            duration: 0.6,
            ease: "power2.out",
          });
        }
        // Animate the current active airplane
        
      } else if ( prevActiveIndex.includes(idx)) {
        // Keep the previous active airplane at x: 0 and opacity: 1
        gsap.to(el, {
          x: 0, // Keep it at the same position
          opacity: 1, // Keep opacity to 1
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        // Animate other airplanes to off-screen position
      console.log("uu");
      }
    });
  };

  // Update airplanes animation whenever activeIndex changes
  useEffect(() => {
   if(direction ==="prev"){
    animateAirplanes(activeIndex + 1,direction);
   }
   else{
    animateAirplanes(activeIndex,direction);
   }
  }, [activeIndex]);

    // Ensure the slider updates to the correct position on mount or activeIndex change
  // useEffect(() => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(activeIndex);
  //   }
  // }, [activeIndex]);
  useEffect(() => {
    if (sliderRef.current) {
      setSliderReady(true);
    }
  }, [sliderRef]);
  const handleSliderMove = (index) => {
    console.log("sliderRef:", sliderRef.current);
    console.log("handelSlideMove", index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    } else {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
      }, 100); // Retry after 100ms
    }
  };
  
 
  const handleChangeYearFlag = () => {
    setYearDetails("")
    
  }

  const handleClose = () => {
    if(yearDetails === "view"){
      navigate("/A100years", { state: { triggerLogoAnimation: true } });
    }else{
      navigate("/A100years")
    }
   
  };
  return (
    <div className="overflow-hidden relative h-screen">
    {/* Header */}
    <div className="h-[146px] flex justify-between px-16 items-center">
      <img src={Logo} alt="homeLogo" />
      <div className="flex justify-center items-center gap-4">
        <p className="text-2xl font-[900]">
          <span className="text-[#E11C37] pr-2">INDIA</span>
          <span className="text-black">INTERACTIVE</span>
        </p>
    
        <div
        onClick={handleClose}
          id="app_close"
          className="cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold"
        >
          <img src={Close} alt="close_arrow" />
        </div>
     
      </div>
    </div>

    {/* Main Section */}
    <div className="flex gap-3 mt-[40px] justify-center items-center">
      <img src={logo100} alt="" className="w-[440px]" />
      {/* <div className="text-[5.8rem] font-bold flex">
        10
        <div>0</div>
      </div>
      <div className="w-[160px] text-[1.41rem] font-bold">
        YEARS OF POWERING THE FUTURE
      </div> */}
    </div>

    {/* Slider */}
    {yearDetails === "" ? (
      <div className="flex justify-center items-center h-[calc(100vh-416px)]">
       
        <div className="flex justify-center items-center">
          <div className="slider-container-100years relative h-full z-[999999]">
            <Slider ref={sliderRef} {...settings}>
              {years.map((yearData, index) => (
                <div className="slider-items !w-auto"  key={yearData.year}>
                  <div
                 
                  className="rounded-full bg-white overflow-hidden  w-[350px] h-[350px] shadow-[3px_7px_20px_10px_#6b646426] z-40  p-[23px] relative "
                >
                  {activeIndex === index ? (
                    <div className="absolute bg-[#E11C37] -left-[26px] w-[130px] h-[140px] top-[10px] -z-10" />
                  ) : null}
                  <div
                    className={`flex flex-col justify-center items-center rounded-full  w-full h-full  transition-all duration-300 shadow-[1px_0px_11px_8px_#b9b7b730] ease-in-out bg-white ${
                      activeIndex === index
                        ? " opacity-100"
                        : " bg-white text-black opacity-80"
                    }`}
                  >
                    <p className="text-[3.6rem] font-[800] text-[#D91027] font-objektiv">
                      {yearData.year}
                    </p>
                    <p className="text-[1.4rem] font-bold text-center font-objektiv">
                      {yearData.description}
                    </p>
                  </div>
                  
                </div>
                {activeIndex === index && (
                    <div className="text-center mt-4  ">
                      <p className="text-[0.9rem]  leading-tight font-[600]">
                      With the war over, a new golden age of progress begins. Prat & Whitney’s JT3D powers USA’s first commercial Jetliner, The Boieng 707
                      </p>
                      <button
                        onClick={handleExplore}
                        className="mt-4 mx-auto clipped-button-2 px-6 py-2 explore_arrow_clip-Path text-[0.9rem]  bg-[#D91027] text-white w-[140px] flex gap-2 justify-center items-center"
                      >
                          Explore
                        <svg
                          width="12"
                          height="13"
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
                    </div>
                  )}
                </div>

                
              ))}
            </Slider>
            <div className="h-[2.2px] w-full bg-gray-100 absolute -z-30 transform top-[41%] translate-y-[100%]" />
            <div
              className="absolute top-[45%] left-5 transform -translate-y-[100%] left_arrow_clip_path cursor-pointer w-[44px] h-[32px] flex justify-center items-center bg-[#918F8F] text-white font-bold z-10"
              onClick={handlePrevClick}
            >
              <FaChevronLeft />
            </div>
            <div
              className="absolute top-[45%] right-5 transform -translate-y-[100%] right_arrow_clip_path cursor-pointer w-[44px] h-[32px] flex justify-center items-center bg-[#D91027] text-white font-bold z-10"
              onClick={handleNextClick}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <YearCuroselDetails Year={years[activeIndex].name}   animateAirplanes={animateAirplanes} setImagePosition={setImagePosition}  handleSlideChange={handleSlideChange}   handleChangeYearFlag={handleChangeYearFlag} setActiveIndex={setActiveIndex} handleSliderMove={handleSliderMove}  />
    )} 

    {/* Footer */}
    <div className="w-screen fixed bottom-0 left-0">
      
      <img
        style={{
          transform: `translateX(${imagePosition}px)`, // Move the image based on the position
          transition: "transform 0.5s ease-in-out", // Smooth transition
        }}
        className="w-full h-[120px]"
        src={Terrain}
        alt="terrain"
      />
      <div className="absolute flex w-[90%] left-1/2 -translate-x-1/2 bottom-[80px] gap-[120px] ">
      {airplaneImages.map((airplane, index) => (
        <img
          key={index}
     
          ref={(el) => (airplaneRefs.current[index] = el)} // Attach ref for animation
          src={airplane}
          alt={`airplane-${index}`}
          className="w-[120px] opacity-0"
          style={{
            transform: `translateX(-130px)`,
          }}
        />
      ))}
      </div>
      <img src={bracketImage} className="absolute w-full bottom-0 px-3" alt="" />
    </div>
  </div>
);
}

export default YearCurosel;

