import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/all";
import FirstImg from "../../assets/images/100years/inspirationfeed-_HZxAiydBa8-unsplash.jpg";
import SecondImg from "../../assets/images/100years/pexels-joel-super-188959-2315265.jpg";
import ThirdImg from "../../assets/images/100years/pexels-claudia-zuidema-344181-1684996.jpg";
import crossIcon from "../../assets/images/100years/crossIcon.svg";
import yearslogo from "../../assets/images/100years/100 years Logo.png";
import hereVideo from "../../assets/images/video/pw-100th-timeline-hero-video.mp4";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Close from "../../assets/images/close_arrow.svg";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import SvgBtn from "../../components/buttons/SvgBtn";
import Logo from "../../components/Logo";

gsap.registerPlugin(CustomEase);
const Home100Years = () => {
   
  const divRefs = useRef([]);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const yearLogoRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null);
  // console.log("activeIndex",activeIndex);
  const [isExpanded, setIsExpanded] = useState(false);
  const hiddenTextRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const triggerLogoAnimation = location.state?.triggerLogoAnimation;
  const { triggerCloseAnimation } = location.state || {};
  const goToYearCourasal = () => {
    console.log("clciked");
    navigate("/A100years/yearCourasal"); // Absolute path
  };
  console.log("urllocation",triggerLogoAnimation);
  const timeline = gsap.timeline();
  const resetTimeline = gsap.timeline();
  const handleMoreClick = (index) => {
    console.log("indexingi", index);
    if (index > 2 || index < 0) {
      return;
    }
    setActiveIndex(index); // Set the active index for disabling the button
    const easing = CustomEase.create("custom", "0.47, 0, 0.23, 1.38");

    resetTimeline
      .to(
        ".para",
        { y: "0%", opacity: 1, duration: 0.8, ease: "power4.out" },
        0,
      ) // Reset all .para
      .to(
        ".para-2",
        { bottom: "0%", opacity: 0, duration: 0.8, ease: "power4.out" },
        0,
      ) // Reset all .para-2
      .to(".first", { x: "0%", duration: 0.8, ease: easing }, 0) // Reset .first
      .to(".second", { x: "0%", duration: 0.8, ease: easing }, 0) // Reset .second
      .to(".third", { x: "0%", duration: 0.8, ease: easing }, 0); // Reset .third
    // Create a timeline

    if (index === 0) {
      // First div clicked: Move second and third divs to the right
      timeline
        .to(".second", { x: "80%", duration: 0.8, ease: easing }, 0) // Start at 0 seconds
        .to(".third", { x: "90%", duration: 0.8, ease: easing }, 0); // Start at the same time
    } else if (index === 1) {
      // Second div clicked: Move first div to the left and third div to the right
      timeline
        .to(".first", { x: "0%", duration: 0.8, ease: easing }, 0) // Start at 0 seconds
        .to(".second", { x: "10%", duration: 0.8, ease: easing }, 0) // Start at the same time
        .to(".third", { x: "90%", duration: 0.8, ease: easing }, 0); // Start at the same time
    } else if (index === 2) {
      // Third div clicked: Move first and second divs to the left
      timeline
        .to(".first", { x: "0%", duration: 0.8, ease: easing }, 0) // Start at 0 seconds
        .to(".second", { x: "10%", duration: 0.8, ease: easing }, 0) // Start at the same time
        .to(".third", { x: "20%", duration: 0.8, ease: easing }, 0); // Start at the same time
    }

    // Add the .para animation to run at the same time
    timeline.to(
      `.para${index}`,
      {
        y: "20%",
        duration: 0.8,
        opacity: 0,
        ease: "power4.out",
      },
      0,
    );
    timeline.to(
      `.para-2-${index}`,
      {
        bottom: "10%",
        duration: 0.8,
        opacity: 1,
        ease: "power4.out",
      },
      0,
    );
    // Start at the same time
  };

  const closeHandle = () => {
    // Reset animations to their default state
    gsap.to(".para", {
      y: "0%", // Reset the translateY property
      opacity: 1, // Reset opacity
      duration: 0.5, // Short duration for the reset
      ease: "none", // No easing for instant reset
    });

    gsap.to(".para-2", {
      bottom: "0%", // Reset bottom position
      opacity: 0, // Reset opacity
      duration: 0.5, // Short duration for the reset
      ease: "none", // No easing for instant reset
    });

    // Reset timelines if using timelines

    // Reset positions for other elements
    gsap.to(".first", {
      x: "0%", // Reset to translateX(0)
      duration: 0.5,
      ease: "none",
    });

    gsap.to(".second", {
      x: "33.33%", // Reset to translateX(33.33%)
      duration: 0.5,
      ease: "none",
    });

    gsap.to(".third", {
      x: "66.33%", // Reset to translateX(66.33%)
      duration: 0.5,
      ease: "none",
    });
    setActiveIndex(null);
    if (timeline) {
      timeline.clear(); // Clear the timeline to stop all animations
      timeline.progress(0).kill(); // Ensure the timeline is reset and no longer running
    }
  };

  const toggleReadMore = () => {
    if (isExpanded) {
      // Animate hiding the text
      gsap
        .to(hiddenTextRef.current, {
          opacity: 0,
          height: 0,
          duration: 0.1,
          ease: "power2.out",
          display:"none",
        })
        .then(() => {
          setIsExpanded(false);
        });
    } else {
      // Animate showing the text
      gsap.to(hiddenTextRef.current, {
        opacity: 1,
        display:"inline",
        duration: 0.5,
        ease: "power2.out",
      });
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    // Animation for devRef (top-left to middle)
    if(triggerCloseAnimation){
      gsap.fromTo(
        logoRef.current,
        { x: "300%", opacity: 1 }, // Start position (top-left corner)
        { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }, // End position (center)
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 1 }, // Start with invisible text
        { opacity: 0, duration: 1.5, ease: "power3.out" },
      );
    }
  
  }, []);
  
  
  useEffect(() => {
    if (triggerLogoAnimation) {
 
      gsap.fromTo(
        yearLogoRef.current,
        { x: "100%",y:"-100%", opacity: 0.7, scale:0.4 }, // Start off-screen to the right
        { x: "0%",y:"0%", opacity: 1,scale:1 ,duration: 1.2, ease: "power3.out" } // Slide to position
      );

    }
  }, [triggerLogoAnimation]);


  const handleClose = () => {
    navigate("/home", { state: { triggerAnimation: true } });
  };

  return (
    <div className="flex w-full h-[100vh]">
      <div className="flex-1 flex justify-center items-center flex-col relative">
        {/* Header */}
        <div className="h-[124px] flex justify-between px-16 items-center absolute w-full top-0 left-0">
        <Logo />
          <div
            ref={logoRef}
            className="flex justify-center items-center gap-4 absolute right-[7%]  z-40"
          >
            <p ref={textRef} className="text-2xl font-[900] opacity-0">
              <span className="text-[#E11C37] pr-2">INDIA</span>
              <span className="text-black">INTERACTIVE</span>
            </p>
                <div onClick={handleClose} className={`cursor-pointer ${activeIndex !== null ? "opacity-0" : "opacity-100"} close_clip_path w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold`}>
              <img src={Close} alt="close_arrow"  />
            </div>
          </div>
        </div>
        <div className="w-[77%] h-[70%}">
          <div>
            <img ref={yearLogoRef} src={yearslogo} alt="100_years_logo" className="relative z-40" />
          </div>
          <div className=" p-4 pt-10 text-black/80 text-[22px] font-normal w-[98%]">
            <p className="leading-tight">
              For 100 years, the people of Pratt & Whitney have pushed the boundaries of aviation to shape human
flight. Pratt & Whitney’s history is a story of relentless grit and unwavering dedication, from developing
era-defining engines in the early 20th century to unleashing new technologies that power the skies today.
With more than 90,000 engines in service around the globe, we remain committed to connecting people,
growing economies and defending freedom. 
              {/* {!isExpanded && (
          <>
            ...
            <span
              onClick={toggleReadMore}
              className="ml-1 cursor-pointer text-[#D91027] font-bold"
            >
              Read More
            </span>
          </>
        )} */}
              <span
                ref={hiddenTextRef}
                style={{
                  opacity: 0,
                  overflow: "hidden",
                  display:"none"
                }}
              >
                {" "}
                <br></br><br></br>
            
                <span
                  onClick={toggleReadMore}
                  className="ml-1 cursor-pointer text-[#D91027] font-semibold"
                >
                  {isExpanded ? "Read Less" : ""}
                </span>
              </span>
            </p>
          </div>
          <div className="p-4 text-black text-2xl font-[800]">
        A century of innovation continues
          </div>

          <div
            onClick={goToYearCourasal}
           className="mt-3"
          >
          
          <SvgBtn text="Begin Interactive" height="50px" width="280px" textClass=" font-[700] text-[15px]"  showArrow />
          </div>
        </div>
<div className="absolute grid grid-cols-2 bottom-8  z-40 left-16"  style={{
                  clipPath:
                    "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
                }}>
                 
                  <div  onClick={ handleClose } className="bg-[#918F8F] text-white flex justify-center items-center px-3 py-2 gap-1 hover:bg-[#656363]">
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


      </div>
       <div className="relative flex-1 w-full overflow-hidden ">
       <video
       loop
       autoPlay
  muted
  controls
  disablepictureinpicture
  controlsList="nodownload noplaybackrate noremoteplayback"
  className="w-full h-full object-contain"
>
  <source src={hereVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
       </div>
      {/* <div className="relative flex-1 w-full overflow-hidden bg-green-600 opacity-0">
        {[0, 1, 2].map((_, index) => {
          const className =
            index === 0 ? "first" : index === 1 ? "second" : "third";

          const videoUrl =
            index === 0
              ? "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              : index === 1
                ? "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
          const imageUrl =
            index === 0 ? FirstImg : index === 1 ? SecondImg : ThirdImg;
          const paragraph = [
            {
              heading: "Passion",
              paragraphs:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
            },
            {
              heading: "Performance",
              paragraphs:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
            },
            {
              heading: "Possibilities",
              paragraphs:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
            },
          ];
          const paragrapModalOpen = [
            {
              heading: "Passion",
              paragraphs1:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
              paragraphs2:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
              paragraphs3:
                "The passion of P&W people is what turns the possibilities of flight into reality for our customers. The success of the past 100 years would not have been possible without the generations of individuals who helped make Pratt & Whitney what it is today..",
            },
            {
              heading: "Performance",
              paragraphs1:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
              paragraphs2:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
              paragraphs3:
                "Pratt & Whitney continues to transform the aerospace industry. Every step of the process is powered by our innovators, visionaries, and engineers with exacting precision to innovate a new and exciting future. We are powering the horizon of aerospace with the most",
            },
            {
              heading: "Possibilities",
              paragraphs1:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
              paragraphs2:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
              paragraphs3:
                "Pratt & Whitney is focused on powering the future and the limitless potential that lies ahead of us. We are at the forefront of revolutionary advancements in aircraft propulsion technology and advancing sustainable aviation by working smarter, cleaner, & greener. service, the best-positioned",
             
            },
          ];
          const paragraphShows = paragraph[index];
          const paragraphShowsModalOpen = paragrapModalOpen[index];

          return (
            <div
              key={index}
              ref={(el) => (divRefs.current[index] = el)}
              className={`${className} absolute flex inset-0 items-center bg-black bg-opacity-100 justify-center h-full w-full`}
              style={{
                transform:
                  index === 0
                    ? "translateX(0)"
                    : index === 1
                      ? "translateX(33.33%)"
                      : "translateX(66.33%)",
              }}
            >
              <div className="absolute inset-0 z-[100]">
                <div
                  className={`para para${index} z-[100] absolute w-[253px] h-[350px] opacity-100 bottom-10 text-white left-6`}
                >
                  <h3 className="text-white text-4xl font-[800] pb-3">
                    {paragraphShows.heading}
                  </h3>
                  <p className="text-lg font-normal text-white leading-[21px]">
                  {`${paragraphShows.paragraphs.slice(0, 220)}...`}
                  </p>
                  <div
                    onClick={() => handleMoreClick(index)}
                    className="mt-4"
                  >
                    <SvgBtn  text="More" height="38px" width="108px" textClass=" font-[700] text-[15px]" type="small" showArrow />
                  </div>
                </div>
                <div
                  className={`para-2 para-2-${index} absolute w-[653px] opacity-0 -bottom-[10%] text-white left-6`}
                >
                  <h3 className="text-white text-4xl font-[800] pb-3">
                    {paragraphShowsModalOpen.heading}
                  </h3>
                  <p className="text-lg font-normal text-white leading-[21px] pb-3">
                    {paragraphShowsModalOpen.paragraphs1}
                  </p>
                  <p className="text-lg font-normal text-white leading-[21px] pb-3">
                    {paragraphShowsModalOpen.paragraphs2}
                  </p>
                  <p className="text-lg font-normal text-white leading-[21px]">
                    {paragraphShowsModalOpen.paragraphs3}
                  </p>
                  <p className="text-lg font-normal text-white leading-[21px]">
                    {paragraphShowsModalOpen?.paragraphs4}
                  </p>
                  <div className="relative flex items-center gap-4 mt-4 z-[100]">
                    <div
                      onClick={() => handleMoreClick(index - 1)}
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 18% 100%, 0 78%)",
                      }}
                      className={`cursor-pointer w-[40px] h-[37px]  ${index === 1 || index === 2 ? "bg-[#D91027]" : "bg-[#988A8A]"} flex justify-center items-center`}
                    >
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 16L-3.49691e-07 8L8 -3.49691e-07L10 2L4 8L10 14L8 16Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={() => handleMoreClick(index + 1)}
                      style={{
                        clipPath:
                          "polygon(100% 0, 100% 81%, 78% 100%, 0 100%, 0 0%)",
                      }}
                      className={`cursor-pointer w-[40px] h-[37px]  ${index === 1 || index === 0 ? "bg-[#D91027]" : "bg-[#988A8A]"} flex justify-center items-center`}
                    >
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 3.49691e-07L10 8L2 16L6.11959e-07 14L6 8L8.74228e-08 2L2 3.49691e-07Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  clipPath:
                    "polygon(100% 0, 100% 21%, 100% 66%, 79% 100%, 25% 100%, 0 100%, 0 0)",
                }}
                onClick={closeHandle}
                className="absolute top-4 right-[220px] z-[100] w-[44px] bg-[#918F8F] cursor-pointer h-[32px] flex justify-center items-center"
              >
                <div className="w-3 h-3 absolute -bottom-1.5 -right-1.5 bg-transparent" />
                <img src={crossIcon} alt="iconsclose" />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
              {activeIndex === index ? (
                <video
                  src={videoUrl}
                  className={`absolute inset-0 object-cover w-full h-full`}
                  autoPlay={true}
                  loop
                  muted
                />
              ) : (
                <img
                  src={imageUrl}
                  style={{ objectFit: "fill" }}
                  className={`absolute inset-0 h-full w-full`}
                />
              )}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Home100Years;
