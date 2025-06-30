import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Terrain from "../../assets/100years/67d6070a8e0d8b58ee5ae49760b538aa.png";
// import Logo from "../../assets/images/home_logo.svg";
import Close from "../../assets/images/close_arrow.svg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import { gsap } from "gsap";
// Import local images
import airplaneImage0 from "../../assets/images/100years/1960.webp";
import airplaneImage1 from "../../assets/images/100years/1930.webp";
import airplaneImage2 from "../../assets/images/100years/1940.webp";
import airplaneImage3 from "../../assets/images/100years/1950.webp";
import airplaneImage4 from "../../assets/images/100years/1960.webp";
import airplaneImage5 from "../../assets/images/100years/1970.webp";
import airplaneImage6 from "../../assets/images/100years/1980.webp";
import airplaneImage7 from "../../assets/images/100years/1990.webp";
import airplaneImage8 from "../../assets/images/100years/2000.webp";
import airplaneImage9 from "../../assets/images/100years/2010.webp";
import airplaneImage10 from "../../assets/images/100years/2020.webp";
import redStrap from "../../assets/images/100years/red-border-2.png";
import bracketImage from "../../assets/100years/bracket-image.png";
import { Link, useNavigate } from "react-router-dom";
import YearCuroselDetails from "./YearCuroselDetails";
import logo100 from "../../assets/100years/100-logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import CustomDialog from "../../components/CustomDialog"
import InnerSliderCarousal from "./InnerSliderCarousal";
import SvgBtn from "../../components/buttons/SvgBtn";
import { useParams } from "react-router-dom";
import Logo from "../../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { resetYearState, setShowLoader } from "../../features/yearSlice";
import { resetNavigation } from "../../features/navigationSlice";

function YearCurosel() {
  const dispatch = useDispatch();
  const { yearParam } = useParams();
  const rawYear = yearParam?.split("-")[0];
  const parsedYear = parseInt(rawYear);

  const yeardata = useSelector((state) => state.year);
  // console.log("year-slideinner", yeardata);
  const year = isNaN(parsedYear) ? null : parsedYear;
  let baseYear = null;
  if (year !== null) {
    const initialYear = Math.floor(year / 10) * 10;
    baseYear = initialYear.toString();
  }
  // const initialIndex = slideData.findIndex((slide) => slide.year === baseYear.toString());
  const navigate = useNavigate();
  const SESSION_STORAGE_KEY = "currentAirplaneIndex";
  const years = [
    {
      year: "1920s",
      name: "1920",
      subTitle: "Pioneering the Future of Flight",
      description: "Pratt & Whitney Aircraft Company is founded by Frederick B. Rentschler, pioneer of the air-cooled radial engine design.",
    },
    {
      year: "1930s",
      name: "1930",
      subTitle: "Advancing Innovations",
      description: "Pratt & Whitney continues advancing innovations with Wasp engine across commercial and military aviation.",
    },
    {
      year: "1940s",
      name: "1940",
      subTitle: "Powering the War Effort",
      description: "Pratt & Whitney produced over 300,000 engines during wartime. ",
    },
    {
      year: "1950s",
      name: "1950",
      subTitle: "Ushering in the Jet Age",
      description: "With the war over, aviation leaped into the jet age – spearheaded by Pratt & Whitney. ",
    },
    {
      year: "1960s",
      name: "1960",
      subTitle: "Innovating Fast, and Reliable Propulsion",
      description: "From fuel cells for Apollo 11, and most popular general aviation engine – to the world’s fastest military aircraft 1960s were a defining decade.",
    },
    {
      year: "1970s",
      name: "1970",
      subTitle: "Commercial Aviation Leadership",
      description: "The 70s saw the iconic 747 take to the skies with the JT9D and the F100, one of the most versatile and dependable military engines, power the F-15s and F-16s.  ",
    },
    {
      year: "1980s",
      name: "1980",
      subTitle: "FADEC, V2500 and PW100",
      description: "During the 1980s, Pratt & Whitney further expanded its military and commercial offerings – and reinvented the regional aviation segment.",
    },
    {
      year: "1990s",
      name: "1990",
      subTitle: "PW4000 and PW500 become clean leaders",
      description: "The 90s allowed PW to build not only the world’s first 5th Gen engine, but also  develop quieter engines that addressed growing concerns over aircraft noise pollution. ",
    },
    {
      year: "2000s",
      name: "2000",
      subTitle: "Innovation and new frontiers",
      description: "In the 2000s, Pratt & Whitney adapted with further innovation and next-generation thinking that helped the industry begin a new ascent toward even greater accessibility and sustainability efforts.",
    },
    {
      year: "2010s",
      name: "2010",
      subTitle: "Decade of expansion",
      description: "From the GTF’s entry-into-service, to the introduction of the PW800, the 2010s focused on expansion.",
    },
    {
      year: "2020s",
      name: "2020",
      subTitle: "Focus on the future",
      description: "The 2020s have emphasized the importance of future sustainability, and ongoing research has been devoted to hybrid-electric, alternative fuel and adaptive engine technologies.",
    },

  ];
  const airplaneImages = [
    airplaneImage0,
    airplaneImage1,
    airplaneImage2,
    airplaneImage3,
    airplaneImage4,
    airplaneImage5,
    airplaneImage6,
    airplaneImage7,
    airplaneImage8,
    airplaneImage9,
    airplaneImage10,
    airplaneImage3,

  ];

  const [activeIndex, setActiveIndex] = useState(0); // Middle card active by default
  const [prevActiveIndex, setPrevActiveIndex] = useState(activeIndex);
  const [childSlideId, setChildSlideId] = useState(0);
  // console.log("childSlideId", childSlideId);
  const [translateValues, setTranslateValues] = useState([0]);
  const [sliderReady, setSliderReady] = useState(false);
  const [direction, setDirection] = useState("next");
  // const [airplanes, setAirplanes] = useState([
  //   { id: 0, image: airplaneImages },
  // ]);
  // console.log("airplane", airplanes);
  // console.log("prevactivity",prevActiveIndex);
  const [imagePosition, setImagePosition] = useState(0);
  const airplaneRefs = useRef([]);

  const [yearDetails, setYearDetails] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImages, setDialogImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const handleImageClick = (index, img) => {

    setDialogImages(img);
    setStartIndex(index);
    setIsDialogOpen(true);

  };
  // console.log("activeindex", activeIndex);
  // console.log("years-lenghth", years.length);
  // Slider settings
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   swipe: true,
  //   variableWidth: false,
  //   beforeChange: (_, next) => handleSlideChange(next),
  // };

  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (activeIndex === 0) return;
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
    setDirection("prev");
    setImagePosition((prev) => prev - 50);
    // setPrevActiveIndex((prev) => prev.slice(0, prev.length - 1));
    animateAirplanes(activeIndex, false);
    sessionStorage.setItem(SESSION_STORAGE_KEY, activeIndex - 1);
  };

  const handleNextClick = () => {
    if (activeIndex === years?.length - 1) return;
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }

    // setPrevActiveIndex((prev) => [...prev, activeIndex]);
    setImagePosition((prev) => prev + 50);
    setDirection("next");
    animateAirplanes(activeIndex + 1, true);
    sessionStorage.setItem(SESSION_STORAGE_KEY, activeIndex + 1);

  };

  const animateAirplanesRange = (startIndex, endIndex) => {
    console.log("startIndex", startIndex);
    console.log("endIndex", endIndex);
    const direction = endIndex > startIndex ? 1 : -1;
    const indicesToAnimate = [];

    // Collect indices that need to be animated (inclusive)
    for (let i = startIndex + direction; direction > 0 ? i <= endIndex : i >= endIndex; i += direction) {
      indicesToAnimate.push(i);
    }

    // Animate each airplane in the range
    indicesToAnimate.forEach((index, i) => {
      setTimeout(() => {
        animateAirplanes(index, true);
      }, i * 100); // Optional delay for a smooth transition
    });
  };

  const handleSlideChange = (swiper) => {
    // console.log("siwper---",swiper);
    const currentIndex = swiper.activeIndex;

    // console.log("currentindex-ins",currentIndex);
    const previous = swiper.previousIndex;;
    // animateAirplanesRange(previous, currentIndex);

    setActiveIndex(currentIndex);
    if (currentIndex > previous) {
      setPrevActiveIndex(currentIndex);
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentIndex);
      animateAirplanes(currentIndex, true);


    } else if (currentIndex < previous) {
      setPrevActiveIndex(previous);
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentIndex);
      // animateAirplanes(previous, false);

    }

  };

  // const handleCloseApp = () => {
  //   console.log(window.api);
  //   window.api.closeApp();
  // };

  const handleExplore = () => {
    setYearDetails("view");
    setTimeout(() => {
      navigate('/A100years/yearCourasal', { replace: true });
    }, 0);

  };

  useEffect(() => {
    if
      (yearParam) {
      handleExplore();

    }

  }, [yearParam])
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
  const animateAirplanes = (index, show = true) => {
    const el = airplaneRefs.current[index];
    if (!el) return;

    gsap.to(el, {
      opacity: show ? 1 : 0,
      x: show ? 0 : -130,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    animateAirplanes(0, true);
  }, []);

  useEffect(() => {

    const savedIndex = parseInt(sessionStorage.getItem(SESSION_STORAGE_KEY), 10);
    // console.log("saveditem", savedIndex);
    // console.log("previndex", prevActiveIndex);
    const restoredIndex = Math.max(0, isNaN(savedIndex) ? 0 : savedIndex);
    console.log("restoredIndex", restoredIndex);
    // for (let i = 0; i <= restoredIndex; i++) {
    //   animateAirplanes(i, true);
    // }
    if (restoredIndex >= prevActiveIndex) {
      for (let i = 0; i <= restoredIndex; i++) {
        animateAirplanes(i, true); // Animate forward
      }
    } else if (restoredIndex < prevActiveIndex) {
      for (let i = prevActiveIndex; i > restoredIndex; i--) {
        animateAirplanes(i, false); // Animate backward
      }
    }


  }, [activeIndex, yearParam]);



  // const animateAirplanes = (index,direction) => {
  //   console.log("indexing-",index);
  //   console.log("direction",direction);
  //   airplaneRefs.current.forEach((el, idx) => {
  //     if (idx === index) {
  //       if(direction ==="next"){
  //         gsap.to(el, {
  //           x: 0, // Active airplane moves to center
  //           opacity: 1,
  //           duration: 0.6,
  //           ease: "power2.out",
  //         });
  //       }else{
  //         gsap.to(el, {
  //           x: -130, // Move off-screen
  //           opacity: 0, // Make invisible
  //           duration: 0.6,
  //           ease: "power2.out",
  //         });
  //       }
  //       // Animate the current active airplane

  //     } else if ( prevActiveIndex.includes(idx)) {
  //       // Keep the previous active airplane at x: 0 and opacity: 1
  //       gsap.to(el, {
  //         x: 0, // Keep it at the same position
  //         opacity: 1, // Keep opacity to 1
  //         duration: 0.6,
  //         ease: "power2.out",
  //       });
  //     } else {
  //       // Animate other airplanes to off-screen position
  //     console.log("uu");
  //     }
  //   });
  // };

  // // Update airplanes animation whenever activeIndex changes
  // useEffect(() => {
  //  if(direction ==="prev"){
  //   animateAirplanes(activeIndex + 1,direction);
  //  }
  //  else{
  //   animateAirplanes(activeIndex,direction);
  //  }
  // }, [activeIndex]);

  // Ensure the slider updates to the correct position on mount or activeIndex change
  // useEffect(() => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(activeIndex);
  //   }
  // }, [activeIndex]);
  // useEffect(() => {
  //   if (sliderRef.current) {
  //     setSliderReady(true);
  //   }
  // }, [sliderRef]);

  // const handleSliderMove = (index) => {
  //   console.log("sliderRef:", sliderRef.current);
  //   console.log("handleSliderMove", index);
  //   if (sliderRef.current) {
  //     console.log("Navigating to index:", index);
  //     sliderRef.current.slideTo(index);
  //   }
  // }
  const handleDataFromChild = (data) => {
    // console.log("dataa-", data);
    setChildSlideId(data); // This gets triggered from child
  };

  const handleChangeYearFlag = () => {
    setYearDetails("")
    // setChildSlideId(data);

  }
  const handleTimeClose = () => {
    dispatch(resetYearState());
    dispatch(resetNavigation());
    handleChangeYearFlag();

    handleSliderMove(childSlideId);
    animateAirplanes(childSlideId + 1, false);

  }

  const handleClose = () => {
    dispatch(resetYearState());
    dispatch(resetNavigation());
    sessionStorage.removeItem("currentAirplaneIndex");
    if (yearDetails === "view") {
      navigate("/A100years", { state: { triggerLogoAnimation: true } });
    } else {
      navigate("/A100years")
    }
  };

  // useEffect(() => {
  //   if (sliderRef.current && sliderRef.current.swiper) {
  //     console.log("Swiper initialized:", sliderRef.current.swiper);
  //   }
  //   else{
  //     console.log("Swiper not initialized");
  //   }
  // }, []);

  const handleSliderMove = (index) => {
    // console.log("handleslidemoe-index",index);
    if (sliderRef.current && sliderRef.current.swiper && !sliderRef.current.swiper.destroyed) {
      sliderRef.current.slideTo(index, 300);
    } else {
      //to prevent the swiper instance not destroyed use titmeout.
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slideTo(index, 300);
        }

      }, 0)
    }
    setImagePosition((prev) => prev - 50);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setShowLoader(false));
    }, 2500); // or any duration you prefer

    return () => clearTimeout(timeout); // cleanup
  }, [])

  return (
    <div className="overflow-hidden relative h-screen">
      {/* Header */}

      {yeardata?.showLoader && <div className="absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">

        <div className="w-[90px] h-[90px] border-[6px] border-t-transparent border-red-800 rounded-full animate-spin"></div>
      </div>}


      <div className="h-[124px] flex justify-between px-16 items-center relative">
        <Logo />
        {/* <img src={Logo} alt="homeLogo" /> */}
        <div className="flex justify-center items-center gap-4">
          {/* <p className="text-2xl font-[900]">
          <span className="text-[#E11C37] pr-2">INDIA</span>
          <span className="text-black">INTERACTIVE</span>
        </p> */}


          <div
            onClick={yearDetails === "" ? handleClose : handleTimeClose}
            id="app_close"
            className="cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold"
          >
            <img src={Close} alt="close_arrow" />
          </div>



        </div>
        <div className='bg-[#0000000d] w-[90%] h-[1.6px] absolute bottom-0 left-1/2 -translate-x-1/2' />
      </div>

      {/* Main Section */}
      <div className="relative">



        <div className="flex gap-3 mt-[40px] justify-center items-center">
          <img src={logo100} alt="" className="w-[440px]" />

        </div>

        {/* Slider */}
        {!yearDetails ? (
          <div className="flex justify-center items-center h-[calc(100vh-416px)]">

            <div className="flex justify-center items-center">
              <div className="slider-container-100years mt-[50px] relative h-full z-[999999]">
                <Swiper
                  ref={sliderRef}
                  onSlideChange={handleSlideChange}
                  slidesPerView={7}
                  centeredSlides={true}
                  loop={false}
                  onSwiper={(swiper) => {
                    sliderRef.current = swiper; // Attach the Swiper instance to sliderRef
                  }}
                  modules={[Navigation, Pagination]}
                >
                  {years.map((yearData, index) => (
                    <SwiperSlide key={yearData.year}>
                      <div className="slider-items !w-auto">
                        <div className={`rounded-full cursor-pointer bg-white overflow-hidden w-[350px] h-[350px] shadow-[3px_7px_20px_10px_#6b646426] z-40 p-[23px] transition-transform duration-300 ease-in-out relative ${index === activeIndex ? "scale-100" : "scale-[0.42]"
                          }`} onClick={() => (index === activeIndex ? handleExplore() : sliderRef.current?.slideTo(index))}
                        >
                          {activeIndex === index ? (
                            // <div className="absolute bg-[#E11C37] -left-[26px] w-[130px] h-[140px] top-[10px] -z-10" />
                            <img src={redStrap} className="absolute top-0 -z-10 left-[7px] h-[133px] rotate-[2deg]" />
                          ) : null}
                          <div
                            className={`flex flex-col justify-center items-center rounded-full w-full h-full transition-all duration-300 shadow-[1px_0px_11px_8px_#b9b7b730] ease-in-out bg-white ${activeIndex === index
                                ? "opacity-100"
                                : "bg-white text-black opacity-80"
                              }`}
                          >
                            <p className="text-[3.6rem] font-[800] text-[#D91027] font-objektiv">
                              {yearData.year}
                            </p>
                            <p className="text-[1.4rem] p-2 font-bold text-center font-objektiv">
                              {yearData.subTitle}
                            </p>
                          </div>
                        </div>
                        {activeIndex === index && (
                          <div className="text-center mt-8 translate-x-[30px]">
                            <p className="text-[0.9rem] leading-tight font-[600]">
                              {yearData.description}
                            </p>
                            <div onClick={handleExplore} className="flex justify-center mt-8">
                              <SvgBtn text={"Explore"} height="38px" width="130px" textClass=" font-[700] text-[0.8rem]" type="small" showArrow />
                            </div>
                            {/* <button
                   onClick={handleExplore}
                    className="mt-8 mx-auto clipped-button-2 px-6 py-2 explore_arrow_clip-Path text-[0.9rem] bg-[#D91027] text-white w-[140px] flex gap-2 justify-center items-center"
                  >
                    Explore
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.02998 5L0.529984 0.669873V9.33013L8.02998 5Z" fill="white" />
                    </svg>
                  </button> */}
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="h-[3px] w-full  bg-[#00000014] absolute -z-30 transform top-[175px]" />
                {activeIndex > 2 && (<div className="absolute  -left-2 transform top-[175px] -translate-y-[50%] h-[120px] w-[120px] rounded-full z-10" style={{
                  background: 'linear-gradient(to right, #f3f3f3, transparent)'
                }}></div>)}

                {activeIndex < years.length - 3 && (
                  <div className="absolute  -right-2 transform top-[175px] -translate-y-[50%] h-[120px] w-[120px] rounded-full z-10" style={{
                    background: 'linear-gradient(to left, #f3f3f3,  transparent)'
                  }}></div>
                )}
                <div className="absolute"></div>
                <div
                  className={`absolute top-[175px] left-5 transform -translate-y-[50%] left_arrow_clip_path cursor-pointer w-[44px] h-[32px] flex justify-center items-center  ${activeIndex === 0 ? "bg-[#918F8F]" : "bg-[#D91027]"}  text-white font-bold z-10`}
                  onClick={handlePrevClick}
                >
                  <FaChevronLeft />
                </div>
                <div
                  className={`absolute top-[175px] right-5 transform -translate-y-[50%] right_arrow_clip_path cursor-pointer w-[44px] h-[32px] flex justify-center items-center  ${years.length - 1 === activeIndex ? "bg-[#918F8F]" : "bg-[#D91027]"}  text-white font-bold z-10`}
                  onClick={handleNextClick}
                >
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" h-[calc(100vh-416px)] flex items-center">
            <YearCuroselDetails Year={years[activeIndex].name} animateAirplanes={animateAirplanes} setImagePosition={setImagePosition} handleSlideChange={handleSlideChange} handleChangeYearFlag={handleChangeYearFlag} setActiveIndex={setActiveIndex} handleSliderMove={handleSliderMove} onImageClick={handleImageClick} yearParam={baseYear} handleDataFromChild={handleDataFromChild} />
          </div>

        )}</div>

      {/* Footer */}
      <div className="w-screen fixed bottom-0 left-0">

        <div
          style={{
            backgroundImage: `url(${Terrain})`,
            backgroundPositionX: `-${imagePosition}px`,
            transition: "background-position 0.5s ease-in-out",
          }}
          className="w-full h-[70px] bg-repeat-x bg-[length:auto_100%]"
        ></div>
        <div className="absolute flex w-[90%] left-1/2 -translate-x-1/2 bottom-[110px] gap-[80px] ">
          {airplaneImages.map((airplane, index) => (
            <img
              key={index}

              ref={(el) => (airplaneRefs.current[index] = el)} // Attach ref for animation
              src={airplane}
              alt={`airplane-${index}`}
              className="w-[75px] opacity-0"
              style={{
                transform: `translateX(-130px)`,
              }}
            />
          ))}
        </div>
        {/* <img src={bracketImage} className="absolute w-full bottom-0 px-3" alt="" /> */}
      </div>





      <div className="absolute grid grid-cols-2 bottom-8  z-40 right-12" style={{
        clipPath:
          "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
      }}>

        <div onClick={yearDetails === "" ? handleClose : handleTimeClose} className="bg-[#918F8F] text-white flex justify-center items-center px-3 py-2 gap-1 hover:bg-[#656363]">
          <BiSolidChevronLeft className="h-full w-[20px]" />
          <p className="text-[1rem]">Previous</p>
        </div>

        <Link to={`/home`}>
          <div onClick={""} className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-2 gap-2 hover:bg-red-800">
            <BiHomeAlt2 className="h-full w-[20px]" />
            <p className="text-[1rem]">Home</p>
          </div>
        </Link>
      </div>








      {isDialogOpen && (
        <CustomDialog
          images={dialogImages}
          startIndex={startIndex}
          onClose={() => setIsDialogOpen(false)}
        />
      )}



    </div>
  );
}

export default YearCurosel;

