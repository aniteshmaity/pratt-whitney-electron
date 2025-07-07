import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import machine1 from "../../assets/100years/machine-1.png";
import machine2 from "../../assets/100years/1960s-img-1.png";
import layer1 from "../../assets/100years/layer-1.png";
import layer2 from "../../assets/100years/layer-2.png";
import layer3 from "../../assets/100years/layer-3.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import activeRedDot from "../../assets/images/100years/active-dot.svg";
import redDot from "../../assets/100years/non-active-dots.png";
import { gsap } from "gsap";
import Close from "../../assets/images/close_arrow.svg";
import InnerSliderCarousal from "./InnerSliderCarousal";
import { slideData } from "../../components/data/yearTimelineData";
import SvgBtn from "../../components/buttons/SvgBtn";
import { yearEngineData } from "../../components/data/yearEngineData";
import { useDispatch, useSelector } from "react-redux";
import { setIsBackToYearIndex, setYearState } from "../../features/yearSlice";
import { setLastVisited } from "../../features/navigationSlice";
const YearCuroselDetails = ({ Year, animateAirplanes, handleChangeYearFlag, setImagePosition, handleSlideChange, setActiveIndex, handleDataFromChild, handleSliderMove, onImageClick, yearParam }) => {
  // console.log("activeyeaer",Year);
  // console.log("year-param2",yearParam);
  // console.log("yearenginedata ",yearEngineData);
  const dispatch = useDispatch();
  const { year, innerIndex, isBackToYearIndex } = useSelector((state) => state.year);
  console.log("year-slideinner", year, innerIndex);
  const getInitialSlideIndex = () => {
    const index = slideData.findIndex((slide) => slide.year === Year);
    return index !== -1 ? index : 0; // Default to 0 if Year doesn't match
  };


  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const prevClonesRef = useRef([]);

  const prevButtonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [clones, setClones] = useState([]);
  const [nextContentClones, setNextContentClones] = useState([]);
  const [storeNextContentClones, setStoreNextContentClones] = useState([]);
  const [prevContentClones, setPrevContentClones] = useState([]);
  const [currentInnerSlide, setCurrentInnerSlide] = useState(0);
  const innerSlideRef = useRef(currentInnerSlide);
  const [innerSlideStatus, setInnerSlideStatus] = useState(false);
  const [currentSlideStatus, setCurrentSlideStatus] = useState(false);
  const [prevClones, setPrevClones] = useState(true);
  const [nextClones, setNextClones] = useState(false);
  const [slideDataIndex, setSlideDataIndex] = useState(getInitialSlideIndex);
  const slideDataIndexRef = useRef(slideDataIndex);
  const [innerSlideStartStatus, setInnerSlideStartStatus] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeNextId, setActiveNextId] = useState(null);
  const [nextTrigger, setNextTrigger] = useState(false);
  const [prevTrigger, setPrevTrigger] = useState(false);
  const [isExpanded, setIsExpanded] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentTimeline = Array.isArray(yearEngineData[currentSlide]?.timeline)
    ? yearEngineData[currentSlide].timeline
    : null;

  const yearName = currentTimeline?.[currentInnerSlide]?.year;
  const yearId = currentTimeline?.[currentInnerSlide]?.id;
  const isExplore = currentTimeline?.[currentInnerSlide]?.isExplore

  const engineContent = currentTimeline?.[currentInnerSlide]?.redirectLinkData

  const actualYear = yearEngineData[currentSlide]?.name
  // console.log("actualYear", actualYear);
  // console.log("nextclone", nextClones);
  // console.log("prevclone", prevClones);
  // console.log("innerslidestatus", innerSlideStatus);
  // console.log("currentInner", currentInnerSlide);
  // console.log("currentslide.....", currentSlide);
  // console.log("currentSlide", currentSlideStatus);
  // console.log("slidedataindex", slideDataIndex);
  // console.log("nextclones-----", nextContentClones);
  // console.log("prevclones-----", prevContentClones);
  // console.log("activeId",activeId);
  // console.log("activeNextId.........",activeNextId);

  // console.log("storenextcontnetclones", storeNextContentClones);
  // console.log("slidedataindex", slideDataIndex);
  // console.log("length-----",storeNextContentClones[0]?.length);
  // console.error("ei",nextTrigger)
  // if(nextClones && !prevClones )  {
  //   setInnerSlideStatus(false);
  // };
  const handlePrevClick = () => {
    // swiperRef.current.swiper.slidePrev(); // Go to previous slide
    if (currentSlide === 0) {
      return;
    }
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Directly call slideNext() on swiperRef.current
    }

    animateAirplanes(currentSlide + 1, false);
    setImagePosition((prev) => prev - 50);


    const previousIndex = currentSlide - 1;
    const specificSlide = slideData[previousIndex];

    setCurrentInnerSlide(specificSlide?.innerSlidesData?.length - 1 || 0);
    setSlideDataIndex(currentSlide - 1);

    if (specificSlide?.innerSlidesData) {
      // Create clones directly from the previous slide's data
      const nextClones = specificSlide.innerSlidesData
        .slice(0, -1)
        .map((innerSlide, index) => ({
          ...innerSlide,
          name: `nextContentClone-${index}`,
          id: index,
          x: `${-240 + index * 30}%`, // New x position
          y: "100%", // New y position
          height: "80px", // New height
          width: "200px", // New width
          scale: 0.9, // Scale
          opacity: 1, // Opacity
        }));

      // Update the current clones
      setNextContentClones(nextClones);
    } else {
      setNextContentClones([]); // Reset if no data exists
    }
    setPrevContentClones([]);
    setActiveNextId(null);
    setActiveId(null);
  };

  const handleNextClick = () => {
    // console.log("swiperobject", swiperRef);
    if (currentSlide === slideData.length - 1) {
      return;
    }
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Directly call slideNext() on swiperRef.current
    }
    animateAirplanes(currentSlide + 2, true);
    setImagePosition((prev) => prev + 50);



    // Capture the current state of `nextContentClones` in a local variable
    // const clonesToStore = nextContentClones;

    // // Save the current `nextContentClones` to `storeNextContentClones`
    // setStoreNextContentClones((prev) => [...prev, clonesToStore]);

    // Reset states
    setNextTrigger(true);
    setSlideDataIndex(currentSlide + 1);

    setTimeout(() => {
      setNextContentClones([]);
    }, 0); // Clear `nextContentClones` after saving
    setActiveNextId(null);
    setActiveId(null);
    setCurrentInnerSlide(0);
  };

  const handleInnerNext = () => {
    setIsExpanded(null);
    // const nextSlide =
    //   (currentInnerSlide + 1) % slideData[0].innerSlidesData.length;
    if (isAnimating || (nextClones && !prevClones)) return;
    setIsAnimating(true);
    animateInnerSlide("next");
    setInnerSlideStartStatus(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleInnerPrev = () => {

    if (isAnimating) return;
    setIsAnimating(true);
    // const prevSlide =
    //   (currentInnerSlide - 1 + slideData[0].innerSlidesData.length) %
    //   slideData[0].innerSlidesData.length;
    // if (prevClones && !nextClones) return;
    setIsExpanded(null);
    animateInnerSlide("prev");
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    // setCurrentInnerSlide(prevSlide);
  };



  const animateInnerSlide = (direction) => {

    const timeline = gsap.timeline({
      onComplete: () => {
        console.log("Animation complete");
      },
    });
    const currentActualIndex = slideDataIndexRef.current;
    const specificSlide = slideData[currentActualIndex];
    console.log("specificslide", specificSlide);
    if (direction === "next") {
      // console.log("💥 Prev clones at animation time:", prevContentClones);
      // console.log("💥 CurrentInner id", innerSlideRef.current);
      // console.log("🔁 NEXT direction triggered");
      const firstCloneIndex = prevClonesRef.current[0]?.name; // Ensure safety with optional chaining
      setActiveId(prevClonesRef.current[0]?.id);

      const currentClone = {
        ...specificSlide.innerSlidesData[innerSlideRef.current], // Use the current slide's data
        name: `nextContentClone-${innerSlideRef.current}`,
        id: innerSlideRef.current,
        x: "0%", // Start position for the clone
        y: "0%",
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        opacity: 0,
        scale: 1,
      };
      // console.log("➕ Creating new nextContentClone:", currentClone.name);
      // console.log("➕ Creating new nextContentClone current:", currentClone);
      // Append the new clone to the existing array of NextContentClones
      setNextContentClones((prevClones) => [...prevClones, currentClone]);
      setActiveNextId(innerSlideRef.current);

      // Create a timeline to synchronize animations
      const timeline = gsap.timeline();
     const nextIndex = innerSlideRef.current;

timeline.add(() => {
  setCurrentInnerSlide((prev) => {
    const maxIndex = slideData[slideDataIndex].innerSlidesData.length - 1;
    const newIndex = prev < maxIndex ? prev + 1 : prev;
    innerSlideRef.current = newIndex;
    setActiveNextId(newIndex);
    return newIndex;
  });
});
      // console.log("prevclones-length", prevClonesRef.current.length);
      // console.log("👌firstCloneIndex", firstCloneIndex);
      // console.log("isBackToYearIndex", isBackToYearIndex);

      if (prevClonesRef.current.length > 0 && firstCloneIndex) {
        console.log("🗑️ Animating and removing first prevContentClone:", firstCloneIndex);

        // Animate the first clone
        timeline.fromTo(
          `.${firstCloneIndex}`,
          {
            scale: 0.3, // Start state
            x: "100%", // Start x position
            y: "0%", // Start y position
            opacity: 0, // Start opacity
            height: "100%",
            width: "100%",
          },
          {
            scale: 1,
            x: "0%",
            y: "0%",
            opacity: 0,
            duration: 0.6,
            height: "100%",
            width: "100%",
            maxWidth: "100%",
            ease: "power3.out",
            onComplete: () => {
              console.log(
                "Animation Complete. Removing First Clone:",
                firstCloneIndex,
              );
              // Remove the first clone from the array without altering others
              setPrevContentClones((prev) => {
                const updatedClones = prev.filter(
                  (clone) => clone.name !== firstCloneIndex,
                );
                console.log(
                  "PrevContentClones (After Removal):",
                  updatedClones,
                );
                return updatedClones;
              });
            },
          },
        );
      }
      // Ensure the DOM updates before animating the new nextContentClone
      setTimeout(() => {
        timeline.to(
          `.${currentClone.name}`,
          {
            x:  `${-270 + (nextIndex  ) * 40}%`
  ,
            y: "100%",
            height: "80px",
            width: "200px",
            opacity: 1,
            scale: 0.9,
            duration: 0.8,
            ease: "power3.out",
          },
          0, // Ensures this animation starts at the same time as the previous one
        );
      }, 0);

      // First, update the current slide index

      // Then, run the GSAP animation
      timeline.fromTo(
        `.main_box2`,
        {
          y: "100%",
          x: direction === "next" ? "90%" : "-90%",
          opacity: 0,
          scale: 1,
        },
        {
          y: "0%",
          x: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "0.1", // Starts after 0.1 seconds from the last event
      );
    }

    // setActiveNextId(cu)
    if (direction === "prev") {

      // Animate the last element in nextContentClone
      const lastNextClone = nextContentClones[nextContentClones.length - 1];
      if (nextContentClones.length > 0) {
        timeline.to(`.${lastNextClone.name}`, {
          scale: 1,
          x: "0%", // Move the last clone to the right (exit animation)
          y: "0%",
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          opacity: 0, // Fade out
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            // Remove the last clone after the animation
            setNextContentClones((prev) => prev.slice(0, prev.length - 1));
          },
        });
      }

      // Create a new clone for the prev animation
      const currentClone = {
        ...specificSlide.innerSlidesData[currentInnerSlide],
        name: `prevContentClone-${currentInnerSlide}`,
        id: currentInnerSlide,
        x: "0%",
        y: "0%",
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        opacity: 0,
        scale: 1,
      };

      setPrevContentClones((prevClones) => [currentClone, ...prevClones]);
      setActiveId(currentInnerSlide);

      // Animate the new clone
      setTimeout(() => {
        timeline.to(
          `.${currentClone.name}`,
          {
            x: `${150 + (currentInnerSlide - 1) * 30}%`, // Adjust position for 'prev'
            y: "100%",
            height: "80px",
            width: "200px",
            opacity: 1,
            scale: 0.9,
            duration: 0.8,
            ease: "power3.out",
          },
          0,
        );
      }, 0);

      // Update the current slide index
      timeline.add(() => {
        setCurrentInnerSlide((prevSlide) => {
          const maxIndex = slideData[slideDataIndex].innerSlidesData.length - 1;
          setActiveId(prevSlide - 1);
          return prevSlide > 0 ? prevSlide - 1 : maxIndex; // Loop back if at the start
        });
      }, 0);
      timeline.fromTo(
        `.main_box2`,
        {
          y: "100%",
          x: direction === "next" ? "90%" : "-90%",
          opacity: 0,
          scale: 1,
        },
        {
          y: "0%",
          x: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "0.1", // Starts after 0.1 seconds from the last event
      );
      // Main content animation
    }
  };

  // useEffect(() => {
  //   if (nextClones && !prevClones) {
  //     setCurrentSlideStatus(true);
  //   }
  // }, [nextClones, prevClones]);
  useEffect(() => {
    prevClonesRef.current = prevContentClones;
  }, [prevContentClones]);
  useEffect(() => {
    slideDataIndexRef.current = slideDataIndex;
  }, [slideDataIndex]);

  useEffect(() => {
    innerSlideRef.current = currentInnerSlide;
  }, [currentInnerSlide]);

  useEffect(() => {
    animateAirplanes(currentSlide + 1, true); // Pass 'initial' to distinguish page load animation
    setImagePosition((prev) => prev + 50);
  }, [currentSlide]);
  useEffect(() => {
    if (
      slideData.length > 0 &&
      slideData[slideDataIndex]?.innerSlidesData?.length > 0
    ) {
      setInnerSlideStatus(true);
    } else {
      setInnerSlideStatus(false);
    }
  }, [currentSlide]);
  useEffect(() => {
    const index = getInitialSlideIndex();
    setSlideDataIndex(index);
  }, [Year]);

  useEffect(() => {
    const initialIndex = slideData.findIndex((slide) => slide.year === Year);
    // console.log("slidedata",slideData);
    // console.log("initialindex",initialIndex);

    if (initialIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(initialIndex, 0); // Move to the correct slide
      setCurrentSlide(initialIndex); // Set the state
    }
  }, [Year]);
  useEffect(() => {
    if (year !== null && swiperRef.current

    ) {
      const mainIndex = slideData.findIndex((slide) => slide.year === year);
      if (mainIndex !== -1) {
        setCurrentSlide(mainIndex);
        setSlideDataIndex(mainIndex);
        swiperRef.current.slideTo(mainIndex, 0);
        setCurrentInnerSlide(0); // Always start from 0
        // 🧹 Clear previous clones to avoid conflict
        setPrevContentClones([]);
        setNextContentClones([]);
        // Animate inner slides using async/await
        const animateToInnerIndex = async () => {
          const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

          await wait(600); // small delay to let state/render settle

          for (let i = 0; i < innerIndex; i++) {
            animateInnerSlide("next");
            await wait(850); // match animation duration
          }
          dispatch(setIsBackToYearIndex(false));
        };

        if (innerIndex > 0) {
          animateToInnerIndex();
        }
      }
    }
  }, [year, innerIndex, swiperRef]);
  // useEffect(() => {
  //   // Get the specific slide's innerSlidesData
  //   const specificSlide = slideData[slideDataIndex];

  //   if (specificSlide?.innerSlidesData) {
  //     // Create clones dynamically
  //     const newClones = specificSlide.innerSlidesData.slice(1).map((innerSlide, index) => ({
  //       ...innerSlide,
  //       x: `${90 - index * 10}%`, // Calculate x position
  //       y: "-20%", // Static y position
  //       scale: 0.2, // Scale factor
  //     }));
  //     setClones(newClones);
  //   }
  // }, [ slideDataIndex]);
  const generatePrevClones = (slideIndex) => {
    const specificSlide = slideData[slideIndex];

    if (specificSlide?.innerSlidesData) {
      return specificSlide.innerSlidesData
        .slice(1)
        .map((innerSlide, index) => ({
          ...innerSlide,
          name: `prevContentClone-${index + 1}`,
          id: index + 1,
          x: `${150 + index * 30}%`,
          y: "100%",
          scale: 0.9,
          opacity: 1,
          isActive: false,
        }));
    }
    return [];
  };

  const generateNextClones = (slideIndex) => {
    // console.log("generatenext--",slideIndex);
    const specificSlide = slideData[slideIndex];

    if (specificSlide?.innerSlidesData) {
      return specificSlide.innerSlidesData
        .slice(0, -1)
        .map((innerSlide, index) => ({
          ...innerSlide,
          name: `nextContentClone-${index}`,
          id: index,
          left: 0,
          x: `${-240 + index * 30}%`, // New x position
          y: "100%", // New y position
          height: "80px", // New height
          width: "200px", // New width
          scale: 0.9, // Scale
          opacity: 1, // Opacity
        }));
    }
    return [];
  };


  // Initialize the clones for the first slide when the component mounts
  useEffect(() => {
    const initialPrevClones = generatePrevClones(slideDataIndex);
    setPrevContentClones(initialPrevClones);
  }, []); // Only run this effect once when the component mounts or slideData changes

  // Effect to handle the creation of clones when slideDataIndex changes and nextTrigger is true
  useEffect(() => {
    if (nextTrigger) {
      const prevClones = generatePrevClones(slideDataIndex);
      setPrevContentClones(prevClones);

      // After effect completes, reset nextTrigger to false
      setNextTrigger(false);
    }
  }, [nextTrigger, slideDataIndex]);
  useEffect(() => {
    if (prevTrigger) {
      const prevClones = generateNextClones(slideDataIndex);
      setNextContentClones(prevClones);

      // After effect completes, reset nextTrigger to false
      setPrevTrigger(false);
    }
  }, [prevTrigger, slideDataIndex]);

  useEffect(() => {
    gsap.fromTo(
      prevButtonRef.current,
      { x: "-50%", y: "-200%", opacity: 1 }, // Start off-screen to the right
      { x: "0%", y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" } // Slide to position
    );
  }, []);
  useEffect(() => {
    handleDataFromChild(currentSlide)
  }, [handleDataFromChild]);


  //   const handleBackYears = ()=> {
  //     handleChangeYearFlag();
  //     // handleSlideChange(currentSlide);
  //     // setActiveIndex(currentSlide);
  //     animateAirplanes(currentSlide + 1, false);
  //  // Trigger slider movement
  //  handleSliderMove(currentSlide);
  //   }

  const toggleDescription = (index) => {
    setIsExpanded((prevIndex) => (prevIndex === index ? null : index));
  };
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index); // 0-based index
    }
  };

  useEffect(() => {

    if (yearParam) {
      const year = parseInt(yearParam.split('-')[0]);
      const baseYear = Math.floor(year / 10) * 10;
      // console.log("base",baseYear);
      const initialIndex = slideData.findIndex((slide) => slide.year === baseYear.toString());
      // console.log("initialindex2",initialIndex);
      goToSlide(initialIndex);
    }
  }, [yearParam])





  const crossLink = (() => {
    // Save current state to Redux
    dispatch(setYearState({ year: actualYear, innerIndex: currentInnerSlide, isBackToYearIndex: true,activeYear:yearName }));
    dispatch(setLastVisited('years'));
    navigate("/products/productdetails", { state: { engineData: engineContent, yearSlug: true, yearName: yearName } });
  })
  // console.log("year-id-name", { yearName, yearId });

  // console.log("year-id-name", { yearName, yearId });
  return (
    <div className="relative w-full">
      {/* Custom Buttons */}
      <div
        // ref={prevButtonRef}
        className="absolute left_arrow_clip_path left-btn top-[35%] -translate-y-1/2 left-5  cursor-pointer w-[44px] h-[32px] flex justify-center items-center bg-[#D91027] hover:bg-red-900  text-white font-bold z-10"
        // onClick={innerSlideStatus || (!innerSlideStatus && nextClones) ? handleInnerPrev : handlePrevClick}
        onClick={
          nextContentClones?.length > 0 ? handleInnerPrev : handlePrevClick
        }
      >
        <FaChevronLeft />
      </div>
      <div
        className="absolute right_arrow_clip_path right-btn top-[35%] -translate-y-1/2 right-5  cursor-pointer w-[44px] h-[32px] flex justify-center items-center bg-[#D91027] hover:bg-red-900 transition-all text-white font-bold z-10"
        // onClick={innerSlideStatus || (!innerSlideStatus && !nextClones) ? handleInnerNext : handleNextClick}
        onClick={
          prevContentClones.length > 0 ? handleInnerNext : handleNextClick
        }
      >
        <FaChevronRight />
      </div>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={80} // Adjust space between slides
        slidesPerView={1}
        onSlideChange={(swiper) => {
          const current = swiper.realIndex;
          const previous = swiper.previousIndex;
          setCurrentSlide(swiper.realIndex)        
          setSlideDataIndex(swiper.realIndex);
          setIsExpanded(null);
          const previousIndex = currentSlide - 1;
          const specificSlide = slideData[previousIndex];

          setCurrentInnerSlide(specificSlide?.innerSlidesData?.length - 1 || 0);
          if (current > previous) {
            setNextContentClones([]);
            setNextTrigger(true);
            setPrevTrigger(false);
            animateAirplanes(currentSlide + 1, true); // Pass 'initial' to distinguish page load animation
            setImagePosition((prev) => prev + 50);
            setCurrentInnerSlide(0);

            console.log('Swiped forward');
          } else if (current < previous) {
            setPrevContentClones([]);
            setPrevTrigger(true);
            setNextTrigger(false);
            animateAirplanes(currentSlide + 1, false); // Pass 'initial' to distinguish page load animation
            setImagePosition((prev) => prev - 50);

            console.log('Swiped backward ');
          }
          setActiveNextId(null);
          setActiveId(null);
          // handleNextClick();
        }}
        modules={[Navigation, Pagination]}
        className="my-swiper !overflow-visible"
      >
        {slideData.map((slide, index) => {

          const mainImage = innerSlideStatus
            ? slide?.innerSlidesData[currentInnerSlide]?.image
            : slide?.image;

          const slideImages =
            slide?.innerSlidesData[currentInnerSlide]?.slideImages ||
            slide?.slideImages ||
            [];

          // Ensure the main image is also an object like the rest
          const combinedImages = [
            { img: mainImage },
            ...slideImages,
          ];
          // console.log("combinedImages",combinedImages);
          return (
            <SwiperSlide
              key={index}
              className="slider-item w-full flex justify-center items-center "
            >
              <div className="relative w-[580px] m-auto ">



                <div className="w-[16px] h-[220px] absolute bg-[#E11C37] top-0 -left-[16px]" />
                <div className="main_box drop-shadow-2xl h-[430px] ">
                  <div className="main_box2 card_clip py-[30px] pl-[20px] pr-[30px] h-full bg-white">

                    {/* <div
                    id="app_closse_2"
                    onClick={handleBackYears}
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 0%, 100% 100%, 21% 100%, 0% 78%, 0% 0%)",
                    }}
                    className="cursor-pointer absolute right-0 top-0 z-20  w-[44px] h-[32px] bg-[#716e6e2e] hover:bg-[#918F8F]  transition-all flex justify-center items-center text-white font-bold"
                  >
                    <img src={Close} alt="close_arrow" />
                  </div> */}
                    <div className="relative w-full grid grid-cols-2">
                      <div>
                        <div className="w-[90%]">
                          <img
                            style={{ objectFit: "cover" }}
                            className="image w-full h-[200px] cursor-pointer"
                            onClick={() => onImageClick(0, slideImages)}
                            src={
                              innerSlideStatus
                                ? slide?.innerSlidesData[currentInnerSlide]?.image
                                : slide?.image
                            }
                            alt="Slide Image"
                          />
                        </div>
                        <div className="  pt-3 w-[90%]">
                          <InnerSliderCarousal
                            onImageClick={onImageClick}
                            images={
                              slide?.innerSlidesData[currentInnerSlide]
                                ?.slideImages || slide?.slideImages
                            }
                          />

                        </div>
                      </div>
                      <div>
                        <div>

                          <h1 className="year font-[800] text-[1.8rem] text-red-600 font-objektiv">
                            {innerSlideStatus
                              ? slide?.innerSlidesData[currentInnerSlide]?.year
                              : slide?.year}
                          </h1>

                          <p className="font-[900] text-[1.4rem] leading-tight font-objektiv">
                            {innerSlideStatus
                              ? slide?.innerSlidesData[currentInnerSlide]?.title
                              : slide.title}
                          </p>
                        </div>

                        <div className="w-full pt-6">
                          <p className="text-[20px] font-[900] pb-2 leading-5">
                            <span className="font-[700] text-[1rem] font-objektiv ">
                              {innerSlideStatus
                                ? slide?.innerSlidesData[currentInnerSlide]?.subtitle
                                : slide?.subtitle}
                            </span>
                          </p>
                          {/* <p
  className="text-[0.94rem] pb-5 font-[600] font-frutiger leading-tight no-scrollbar overflow-auto h-[80px]"
  dangerouslySetInnerHTML={{
    __html: innerSlideStatus
      ? slide?.innerSlidesData[currentInnerSlide]?.description
      : slide?.description,
  }}
  ></p>
  <p className="text-[0.8rem]">
        {isExpanded === index ? item.description : `${item.description.slice(0, 50)}...`}{" "}
        <span
          className="text-[#CE2028] text-[0.7rem] font-medium cursor-pointer block"
          onClick={() => toggleDescription(index)}
        >
          {isExpanded === index ? "Tap to collapse" : "Tap for more"}
        </span>
      </p> */}
                          <p className="text-[0.94rem] pb-5 font-[600] font-frutiger leading-tight no-scrollbar overflow-auto h-[110px] custom-description">
                            <span
                              dangerouslySetInnerHTML={{
                                __html:
                                  isExpanded === index
                                    ? // Full description with HTML
                                    innerSlideStatus
                                      ? slide?.innerSlidesData?.[currentInnerSlide]?.description
                                      : slide?.description
                                    : // Preview: strip HTML and slice
                                    innerSlideStatus
                                      ? `${stripHtml(slide?.innerSlidesData?.[currentInnerSlide]?.description || '').slice(0, 150)}...`
                                      : `${stripHtml(slide?.description || '').slice(0, 150)}...`,
                              }}
                            />
                            <span
                              className="text-[#CE2028] text-[0.8rem] font-bold cursor-pointer block"
                              onClick={() => toggleDescription(index)}
                            >
                              {isExpanded === index ? "Tap to collapse" : "Tap for more"}
                            </span>
                          </p>
                        </div>

                        <div className="flex mt-2 gap-4" onClick={crossLink}>

                          {/* {yearName && yearId && isExplore ? (
    <Link to={`/A100years/yearEngineDetails/${yearName}-${yearId}`}>
      <SvgBtn
        text="Explore"
        height="38px"
        width="120px"
        textClass="font-[700] text-[0.8rem]"
        type="small"
        showArrow
      />
    </Link>
  ) : null} */}
                          {yearName && yearId && isExplore ? (<SvgBtn
                            text="Explore"
                            height="38px"
                            width="120px"
                            textClass="font-[700] text-[0.8rem]"
                            type="small"
                            showArrow
                          />) : null}

                        </div>
                      </div>
                    </div>

                  </div>
                  {prevContentClones &&
                    prevContentClones.map((clone, index) => (
                      <div
                        key={clone.id}
                        className={`prevContentClone-${clone.id} drop-shadow-2xl   h-full `}
                        name={clone.name}
                        onClick={handleInnerNext}
                        style={{
                          position: "absolute",
                          height: activeId === clone.id ? "100%" : "80px",
                          maxWidth: activeId === clone.id ? "100%" : "200px",
                          width: "100%",
                          top: 0,
                          right: 0,
                          transform: `translate(${clone.x}, ${clone.y}) scale(${clone.scale})`,
                          opacity: `${clone.opacity}`,
                          // opacity: `${index === 0 ? 1 : 0.5 || clone.opacity}`,
                          zIndex: -1 - index * 20,
                        }}
                      >
                        {/* <div className="w-[16px] h-[210px] absolute bg-[#E11C37] top-0 -left-[16px]" /> */}
                        <div className=" card_clip_2 py-[10px] px-[10px]  h-full w-full bg-white">
                          <div className="relative w-full h-full flex gap-2">
                            <div className="flex-[1]"> <img
                              style={{ objectFit: "cover" }}
                              className={`${activeId === clone.id ? "w-[200px]" : "w-full"} image  h-full`}
                              src={clone?.thumbnail || machine1}
                              alt="Slide Image"
                            /></div>
                            <div className="flex-[2]">

                              <h1
                                className={`year  font-[800] ${activeId === clone.id ? "text-[1.8rem]" : clone.id > activeId + 1 ? "text-right text-[0.6rem]" : "text-left text-[0.6rem]"}  text-red-600`}
                              >
                                {clone?.year}
                              </h1>

                              <p
                                className={`year  font-[800] ${activeId === clone.id ? "text-[1.4rem]" : clone.id > activeId + 1 ? "text-justify text-[0.6rem]" : "text-[0.6rem]"} font-[900] leading-tight`}
                              >
                                {clone.cloneTitle || clone.title}
                              </p>
                            </div>
                          </div>
                          {activeId === clone.id ? (
                            <>
                              <div className="flex gap-3">
                                {slide?.slideImages?.map((e, index) => {
                                  return (
                                    <img
                                      key={index}
                                      src={e.img}
                                      alt={`Slide Image ${index}`}
                                      className="w-[60px] h-[60px] object-cover"
                                    />
                                  );
                                })}
                              </div>{" "}
                              <div className="w-full p-2">
                                <p className="text-[20px] font-[900] pb-2">
                                  <span className="font-[600] text-[1rem]">
                                    {clone?.subtitle}
                                  </span>
                                </p>
                                <p className=" text-[0.8rem] pb-5 font-[400]">
                                  {clone?.description}
                                </p>
                              </div>
                              <div>

                                <button className="bg-red-500 text-white px-4 p-2 ml-4 text-[0.7rem]">
                                  Explore
                                </button>
                              </div>{" "}
                            </>
                          ) : (
                            ""
                          )}
                        </div>

                        <img
                          src={index === 0 ? activeRedDot : redDot}
                          alt=""
                          className={`absolute ${index === 0 ? "w-[45px] translate-y-full" : "w-[10px]  bottom-[-91%]"} left-1/2 -translate-x-1/2 `}
                        />
                      </div>
                    ))}
                  {nextContentClones &&
                    nextContentClones.map((clone, index) => (
                      <div
                        key={clone.id}
                        onClick={handleInnerPrev}
                        className={`nextContentClone-${clone.id} drop-shadow-2xl   h-full `}
                        style={{
                          position: "absolute",
                          height: clone?.height,
                          maxWidth: clone?.maxWidth,
                          width: clone?.width,
                          top: 0,
                          left: 0,
                          transform: `translate(${clone.x}, ${clone.y}) scale(${clone.scale})`,
                          opacity: clone?.opacity,
                          // opacity:index === nextContentClones.length - 1 ? clone?.opacity : 0.4,
                          zIndex: -1,
                        }}
                      >
                        {/* <div className="w-[16px] h-[210px] absolute bg-[#E11C37] top-0 -left-[12px]" /> */}
                        {
                          index !== nextContentClones.length - 1 && (
                            <div className={`${index === 0 ? "bg-[#c3c3c3ab]" : index === 1 ? "bg-[#c3c3c361]" : index === 2 ? "bg-[#c3c3c33b]" : ""} h-full w-full z-50 absolute top-0 left-0 card_clip`}></div>
                          )
                        }
                        <div className=" card_clip_2 py-[10px] px-[10px]  h-full w-full bg-white">
                          {/* Render the content for the clone */}
                          <div className="relative w-full h-full flex gap-2">
                            <div className="flex-[1]">
                              <img
                                style={{ objectFit: "cover" }}
                                className={`image ${activeNextId === clone.id ? "w-[200px]" : "w-full"}  h-full`}
                                src={clone?.thumbnail}
                                alt="Slide Image"
                              />
                            </div>
                            <div className="flex-[2]">

                              <h1
                                className={`year  font-[800] ${activeNextId === clone.id ? "text-[1.4rem]" : "text-[0.6rem]"}  text-red-600`}
                              >
                                {clone?.year}
                              </h1>

                              <p
                                className={` font-[900] ${activeNextId === clone.id ? "text-[1.4rem]" : "text-[0.6rem]"} font-[900] leading-tight`}
                              >
                                {clone.cloneTitle || clone.title}
                              </p>
                            </div>
                          </div>
                          {activeNextId === clone.id ? (
                            <>
                              {" "}
                              <div className="flex gap-3">
                                {slide?.slideImages?.map((e, index) => {
                                  return (
                                    <img
                                      key={index}
                                      src={e.img}
                                      alt={`Slide Image ${index}`}
                                      className="w-[60px] h-[60px] object-cover"
                                    />
                                  );
                                })}
                              </div>
                              <div className="w-full p-2">
                                <p className="text-[20px] font-[900] pb-2">
                                  <span className="font-[600] text-[1rem]">
                                    {clone?.subtitle}
                                  </span>
                                </p>
                                <p className=" text-[0.8rem] pb-5 font-[400]">
                                  {clone?.description}
                                </p>
                              </div>
                              <div>

                                <button className="bg-red-500 text-white px-4 p-2 ml-4 text-[0.7rem]">
                                  Explore
                                </button>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                        <img
                          src={
                            index === nextContentClones.length - 1
                              ? activeRedDot
                              : redDot
                          }
                          alt=""
                          className={`absolute ${index === nextContentClones.length - 1 ? "w-[45px] translate-y-full" : "w-[10px] -bottom-[91%]"} left-1/2 -translate-x-1/2 `}
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Timeline Content */}
              <div className="h-[3px] w-full absolute bg-[#00000014] top-[50%] translate-y-1/2 -z-10">
                {slide.timeline.map((timeline, i) => {
                  const normalizedTimelineYear = parseInt(timeline.year.replace('s', ''), 10);
                  const slideYear = parseInt(slide?.year, 10);
                  // console.log("normalized", { normalizedTimelineYear, slideYear: slideYear });
                  return (
                    <div
                      key={i}
                      className={`w-[3px] absolute h-[300px] ${i === 0 ? "left-[7%]" : "right-[7%]"} bg-[#00000014] bottom-0`}
                    >
                      <div className="bg-[#B7B7B7] w-2.5 h-2.5 rounded-full absolute bottom-0 translate-y-[30%] left-1/2 trasform -translate-x-1/2"></div>
                      <div className="w-28 h-28 bg-white  rounded-full p-2  left-1/2 transform -translate-x-1/2 shadow-[0px_3px_5px_5px_#dddddd80] cursor-pointer" onClick={slideYear === normalizedTimelineYear ? undefined : handleNextClick}>
                        <div className=" rounded-full w-full h-full  bg-white flex justify-center items-center shadow-[0px_3px_6px_3px_#f5f2f2c2]">
                          <div className="p-1">
                            <h2 className="text-red-400 font-[700] text-[24px] text-center">
                              {timeline.year}
                            </h2>
                            <p className="text-[0.6rem] text-center">
                              {timeline.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default YearCuroselDetails;
