import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Card from "../components/sliders/Card";
import Terrain from "../assets/images/Terrain.svg";
import landscape from "../assets/images/home/landscape.png"
import Logo from "../assets/images/home_logo.svg";
import Close from "../assets/images/close_arrow.svg";
import { useLocation } from "react-router-dom";
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
import yeargif from "../assets/images/home/100year-gif.gif";
import productgif from "../assets/images/home/product-gif.gif";
import aerospace3d from "../assets/images/home/aerospace3d.png";
import groupAero from "../assets/images/home/plane-amination (1).gif"
import bulding from "../assets/images/home/building.png"
import inIndia from "../assets/images/home/In-India.png"
import connectAeroVideo from "../assets/images/home/Connected Aerospace Loop.mp4";
import ourProductVideo from "../assets/images/home/Our Products Loop.mp4";
import GTf3dVideo from "../assets/images/home/GTF 3D experience.mp4";
import pwIndiaVideo from "../assets/images/home/PW in India.mp4";
import pw100YearsVideo from "../assets/images/home/PW100 Years Interactive.mp4";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import {  useParams } from "react-router-dom";
function Curosel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const sliderRef = useRef(null); // Reference for the slider
  const location = useLocation();
    const { id:itemId } = useParams();
    // console.log("itemid",itemId);
      const [animate, setAnimate] = useState(false);
  const triggerAnimation = location.state?.triggerAnimation;
  const settings = {
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    variableWidth: true,
    speed: 1000,
  };
  // const arrayOfTen = Array.from({ length: 10 }, (_, index) => index + 1);
  const handleCloseApp = () => {
    console.log(window.api);
    window.api.closeApp();
    // Send a message to the main process
  };

//   useEffect(() => {
//   if (triggerAnimation && logoRef.current) {


//       gsap.fromTo(
//         logoRef.current,
//         { x: "-150%", opacity: 0 },
//         { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
//       );

//   }
// }, [triggerAnimation]);

  const cardData = [
    {
      title: {
        startName: "100 Years of Powering",
        endName: "the Future",
      },

      description:
        "Browse through Pratt & Whitney’s 100-years history of pushing the boundaries of aviation to shape the future of flight.",
      imageUrl:
      yeargif,
      videoUrl:pw100YearsVideo,
      link: "/A100years",
      triggerCloseAnimation: true,
      isButton:false
    },
    {
      title: {
        startName: "GTF",
        endName: "Experience",
      },

      description:
        "Get up close and explore in 3D the Pratt & Whitney GTF™ engine — powering aviation’s most efficient single-aisle aircraft.",
      imageUrl:
      yeargif,
      videoUrl:GTf3dVideo,
      link: "/experience3d/GTF3d",
      isButton:false
    },
    {
      title: {
        startName: "Our Marquee",
        endName: "Products",
      },

      description:
        "Pratt & Whitney is a world leader in the design, manufacture, and service of aircraft engines and auxiliary power units.",
      imageUrl:
      productgif,
      videoUrl:ourProductVideo,
      link: "/products",
      isButton:false
    },
    {
      title: {
        startName: "Connected",
        endName: "Aerospace",
      },

      description:
        "Experience in 3D how RTX is innovating the future of flight with Pratt & Whitney and Collins Aerospace.",
      imageUrl:
      aerospace3d,
      videoUrl:connectAeroVideo,
      link: "/innovations",
      isButton:true
    },
    {
      title: {
        startName: "Pratt & Whitney",
        endName: "in India",
      },

      description:
        "With 600 aircraft powered across commercial, military, and regional aviation, see how we are shaping the future of aviation in India.",
      imageUrl:
      inIndia,
      videoUrl:pwIndiaVideo,
      link: "/map",
      isButton:false
    },
    // {
    //   title: {
    //     startName: "RTX",
    //     endName: "In India",
    //   },

    //   description:
    //     "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.",
    //   imageUrl:
    //   yeargif,
    //   link: "/map",
    //   isButton:false
    // },
    
  ];


  useEffect(() => {
    // Clear all classes from all slides
    document.querySelectorAll(".slick-slide").forEach((slide) => {
      slide.classList.remove(
        "active",
        "left",
        "right",
        "left-first",
        "right-first"
      );
    });

    // Loop through all slides and add appropriate classes
    document.querySelectorAll(".slick-slide").forEach((slide) => {
      const index = parseInt(slide.getAttribute("data-index"), 10);

      if (index === activeSlide) {
        slide.classList.add("active");
      } else if (index === activeSlide - 1 || (activeSlide === 0 && index === cardData.length - 1)) {
        slide.classList.add("left-first"); // First left slide
      } else if (index === activeSlide + 1 || (activeSlide === cardData.length - 1 && index === 0)) {
        slide.classList.add("right-first"); // First right slide
      } else if (index < activeSlide) {
        slide.classList.add("left");
      } else {
        slide.classList.add("right");
      }
    });
  }, [activeSlide, cardData.length]);

  useEffect(() => {
    // GSAP animation for infinite scale up and down
    gsap.to(imageRef.current, {
      scale: 1.2, // Maximum scale
      duration: 8, // Time it takes to scale up
      ease: "linear",
      yoyo: true, // Reverse animation back to the original scale
      repeat: -1, // Infinite loop
    });
  }, []);

 
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleNextClick = () => {
    if (activeSlide === cardData?.length - 1) return;
    if (sliderRef.current) {
      sliderRef.current.slickNext(); //
    }
};

const handlePrevClick = () => {
    if (activeSlide === 0) return;
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // 
    }
};
const handleCurrentSlide = (index) => {
  if (sliderRef.current) {
    sliderRef.current.slickGoTo(index);
  } 
};
useEffect(()=> {
if(itemId){
  handleCurrentSlide(itemId)
}
},[itemId])
useEffect(() => {
if(triggerAnimation){
  setAnimate(true);
}

}, [triggerAnimation]);

  return (
    <>
    <div className="overflow-x-hidden relative">
      <div className="w-screen h-[124px] flex justify-between px-16 items-center relative">
        <img src={Logo} alt="homeLogo" />
        <div  className={`relative flex justify-center items-center gap-4 transition-transform duration-500 ease-out ${
            animate ? 'translate-x-0' : !triggerAnimation ? 'translate-x-0' : '-translate-x-[200%]'
          }`}>
          <p  className="text-2xl font-[900]">
            <span className="text-[#E11C37] pr-2">INDIA</span>
            <span className="text-black">INTERACTIVE</span>
          </p>
          <Link to='/startflash'>
          <div
            id="app_close"
            className="cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold"
          >
            <img src={Close} alt="close_arrow" />
          </div></Link>
        </div>
        <div className='bg-[#0000000d] w-[90%] h-[1.6px] absolute bottom-0 left-1/2 -translate-x-1/2' />
      </div>
      <div className="w-screen flex justify-center items-center overflow-hidden mt-[140px] relative z-[888888]" >
        <div className="w-screen h-[500px] flex justify-center items-center">
          <div className="slider-container-home relative">
            <Slider {...settings} ref={sliderRef}
             beforeChange={(oldIndex, newIndex) => {
    setActiveSlide(newIndex); // Store the active slide index in state
  }}>
              {cardData.map((data, index) => (
                <div key={index} className={`slide ${
                  index === activeSlide
                    ? 'active'
                    : index === activeSlide - 1
                    ? 'left'
                    : index === activeSlide + 1
                    ? 'right'
                    : ''
                }`}   onClick={() => sliderRef.current.slickGoTo(index)} >
                  <Card {...data} index={index} activeIndex={activeSlide} />
                </div>
              ))}
            </Slider>
            <div className="absolute w-full h-[3px] bg-[#00000014] -z-10 left-0 bottom-[28%]"></div>
            <div
                          className={`absolute  top-[50%] left-5 transform -translate-y-[100%] left_arrow_clip_path cursor-pointer w-[44px] h-[32px] flex justify-center items-center ${activeSlide === 0 ? "bg-[#918F8F]" : "bg-[#D91027]"} text-white font-bold z-10`}
                          onClick={handlePrevClick}
                        >
                          <FaChevronLeft />
                        </div>
                        <div
                          className={`absolute focus:outline-none focus:ring-0 top-[50%] right-5 transform -translate-y-[100%] right_arrow_clip_path cursor-pointer w-[44px] h-[32px] flex justify-center items-center ${activeSlide === cardData?.length - 1 ? "bg-[#918F8F]" : "bg-[#D91027]"}  text-white font-bold z-10`}
                          onClick={handleNextClick}
                        >
                          <FaChevronRight />
                        </div>
          </div>
        </div>
      </div>
      <div className="w-screen fixed bottom-0 left-0 z-10">
        <img ref={imageRef} className=" w-full pointer-events-none select-none focus:outline-none"
 src={landscape} alt="trrain" />
        <img src={groupAero} alt="" className="absolute  right-[8%] w-[45%] bottom-[21%] z-50"  />
        <img src={bulding} alt="building-1" className="absolute right-[20%] bottom-[25%] -z-10" />
                <img src={bulding} alt="building-1" className="absolute right-[50%] bottom-[25%] -z-10" />
      </div>

      
    </div>
    
    {/* <YearCurosel handleCurrentSlide={handleCurrentSlide} />
      <Products handleCurrentSlide={handleCurrentSlide} />
      <MapScreen handleCurrentSlide={handleCurrentSlide} /> */}
    </>

  );
}

export default Curosel;
