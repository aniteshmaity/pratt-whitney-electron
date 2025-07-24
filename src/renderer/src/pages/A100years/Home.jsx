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
import { resetYearState } from "../../features/yearSlice";
import { resetNavigation } from "../../features/navigationSlice";
import { useDispatch } from "react-redux";
gsap.registerPlugin(CustomEase);
const Home100Years = () => {
     const dispatch = useDispatch();
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
            onClick={() => {
              goToYearCourasal();
              dispatch(resetYearState());
            }}
           className="mt-3"
          >
          
          <SvgBtn text="Begin Interactive" height="50px" width="280px" textClass=" font-[700] text-[15px]"  showArrow />
          </div>
        </div>
<div className="absolute grid grid-cols-2 bottom-8  z-40 left-16"  style={{
                  clipPath:
                    "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
                }}>
                 
                  <div  onClick={ handleClose } className="bg-[#918F8F] text-white flex justify-center items-center px-3 py-2 gap-1 cursor-pointer hover:bg-[#656363]">
                    <BiSolidChevronLeft className="h-full w-[20px]" />
                    <p className="text-[1rem]">Previous</p>
                  </div>
                
                   
                 <div onClick={() => {
                    dispatch(resetYearState());
                         dispatch(resetNavigation());
                  navigate("/home")
                 }} className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-2 gap-2 cursor-pointer hover:bg-red-800">
                    <BiHomeAlt2 className="h-full w-[20px]" />
                    <p className="text-[1rem]">Home</p>
                  </div>
              
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
     
    </div>
  );
};

export default Home100Years;
