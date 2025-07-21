import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap"; // Import GSAP
import Close from '../../assets/images/close_arrow.svg';
import redStrap from '../../assets/product/pr-red-strap.svg';
import { FaChevronLeft } from "react-icons/fa6";
import ProductCard from './ProductCard';
import comercialImg from "../../assets/100years/comercial-engine-img.png"
import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';
import { productEngine } from '../../components/data/productEngineData';
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import Logo from '../../components/Logo';
function Products({handleCurrentSlide}) {
  // const Engine = [
  //   { engine: "Military Engines", description: "This is the description " },
  //   { engine: "Pratt Engines", description: "This is the description" },
  //   { engine: "Commercial Engines", description: "This is the description " },
  //   { engine: "Auxilary Engines", description: "This is the description" },
  //   { engine: "Aftermart", description: "This is the description " },
  // ];
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Middle card active by default
  const [direction, setDirection] = useState(""); // To track the direction of slide change
  const [isAnimating, setIsAnimating] = useState(false); // Flag to track animation state
  const [selectedEngineDetails, setSelectedEngineDetails] = useState(null);
    const [activeEngineIndex, setActiveEngineIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const detailsRef = useRef(null);
  const descRefs = useRef([]);
  // console.log("REFS", descRefs.current);
  // console.log("axctiveindex",activeIndex);
  // console.log("data-",productEngine);
  // Slider settings for vertical layout
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '70px',
    vertical: true,
    verticalSwiping: false, // Disable default vertical swiping
    centerMode: true,
    arrows: false,
    speed: 500,
    swipeToSlide: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    beforeChange: (_, next) => {
      setDirection(next > activeIndex ? "down" : "up");
      setActiveIndex(next);
      setIsAnimating(true);
    },
    afterChange: () => {
      setIsAnimating(false);
    },
  };
  const handleExploreClick = (engineDetails) => {
    console.log("clicked -details",engineDetails);
    setIsDetailsVisible(true);
    setSelectedEngineDetails(engineDetails);
    
   
  };
  // useEffect(() => {
  //   if (selectedEngineDetails) {
  //     setIsDetailsVisible(true);
  //     console.log("se",selectedEngineDetails);
  //   }
  // }, [selectedEngineDetails]);

  // Close app handler (if needed)
  useEffect(() => {
    descRefs.current.forEach((el, i) => {
      console.log("elememt",el);
      if (!el) return;

      if (i === activeIndex) {
        gsap.fromTo(
          el,
          { x: 120, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );
      } else {
        gsap.to(el, {
          x: 120,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    });
  }, []);
  const handleCloseApp = () => {
    console.log("App closed");
   
  };
  const handleClose = () => {
    console.log("App closed");
    // Reverse the animation
    gsap.to(detailsRef.current, {
      y: "400%",
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => setIsDetailsVisible(false), // Hide after animation
    });
  };

  // Reset last field position on slide change
  useEffect(() => {
    
    if (isAnimating) {
      const lastField = document.querySelector('.last-field');
      if (lastField) {
        gsap.killTweensOf(lastField); // Kill any ongoing animations
        gsap.set(lastField, { opacity: 1, x: 0, y: 0 }); // Reset position before animation

        if (direction === "up") {
          gsap.fromTo(lastField, {
            opacity: 1,
            x: -220, // Start from left side
            y: -400, // Start from top
          }, {
            opacity: 1,
            x: 0, // Move to center
            y: 0,
            duration: 1, // Duration of the animation
            ease: "power3.out",
          });
        } else if (direction === "down") {
          gsap.fromTo(lastField, {
            opacity: 1,
            x: -220, // Start from left side
            y: 500, // Start from bottom
          }, {
            opacity: 1,
            x: 0, // Move to center
            y: 0,
            duration: 1, // Duration of the animation
            ease: "power3.out",
          });
        }
      }
    }
  }, [direction, isAnimating]); // Only run when direction or isAnimating changes

  useEffect(() => {
    // GSAP animation to rotate the line from 100deg to 90deg
    gsap.fromTo(
      ".line-rotate", // Target the element with the 'line-rotate' class
      { rotate: "130deg" }, // Initial state (rotate 100deg)
      { rotate: "90deg", duration: 1 ,ease: "power3.out"} // Final state (rotate 90deg) over 1 second
    );
  }, []);
  useEffect(() => {
    if (isDetailsVisible) {
        gsap.fromTo(
        detailsRef.current,
        { y: "500%" },
        { y: "0", duration: 1.3, ease: "power3.out" }
      );
    }
  }, [isDetailsVisible]);

  useEffect(() => {
      // Clear all classes from all slides
      document.querySelectorAll(".slick-slide").forEach((slide) => {
        slide.classList.remove(
          "left",
          "right",
         
        );
      });
  
      // Loop through all slides and add appropriate classes
      document.querySelectorAll(".slick-slide").forEach((slide) => {
        console.log("slide",slide);
        const index = parseInt(slide.getAttribute("data-index"), 10);
        if (index === activeIndex + 1 || index === activeIndex || index === activeIndex - 1) {
        
          slide.classList.add("special-class");
        } else if (index < activeIndex ) {

          slide.classList.add("left");
        } else {
          slide.classList.add("right");
        }
        const isDummy = slide.textContent.trim() === "" || slide.innerHTML.trim() === "";
        if (isDummy) {
          slide.classList.add("dummy-slide");
        }
      });
    }, [activeIndex]);

  // Replace the existing scroll handling useEffect with this simpler version
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
        setActiveEngineIndex(0)
      // Debounce the scroll
      if (isAnimating) return;
      
      // Check if scroll is primarily vertical
      const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      
      if (!isVerticalScroll) return;
      const totalSlides = productEngine.length;
      if (e.deltaY > 0) {
        // Scroll down – only if not on the last slide
        if (activeIndex < totalSlides - 3) {
          sliderRef.current?.slickNext();
        }
      } else {
        // Scroll up – only if not on the first slide
        if (activeIndex > 0) {
          sliderRef.current?.slickPrev();
        }
      }
    };
    
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    const totalSlides = productEngine.length;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0 && activeIndex < totalSlides - 3) {
        sliderRef.current?.slickNext();
      } else if (deltaX > 0 && activeIndex > 0) {
        sliderRef.current?.slickPrev();
      }
    }
  };

    const sliderElement = document.querySelector('.slider-container-product');
    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleScroll, { passive: false });
      sliderElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      sliderElement.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleScroll);
        sliderElement.removeEventListener('touchstart', handleTouchStart);
        sliderElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isAnimating]);

  // Add this CSS inline to the slider container
  const sliderStyles = {
    touchAction: 'pan-y', // Only allow horizontal touch actions
    userSelect: 'none',
    WebkitUserSelect: 'none',
  };
  const handleClose2 = () => {
    handleCurrentSlide(0);

      navigate("/A100years");
   
   
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay if needed (e.g., 300ms for heavy pages)
  
    return () => clearTimeout(timer);
  }, []);

  const id = 2;
  return (
    <div className="overflow-y-hidden relative h-screen">
      {/* Header */}
      <div className="h-[124px] flex justify-between px-16 items-center bg-white relative">
      <Logo />
        <div className="flex justify-center items-center gap-4">
          <p className="text-2xl font-[900]">
            <span className="text-[#E11C37] pr-2">INDIA</span>
            <span className="text-black">INTERACTIVE</span>
          </p>
          <Link to={`/home/${id}`}>
          <div
         
         id="app_close"
         className="cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold"
       >
         <img src={Close} alt="close_arrow" />
       </div>
          </Link>         
        </div>
        <div className='bg-[#0000000d] w-[90%] h-[1.6px] absolute bottom-0 left-1/2 -translate-x-1/2' />
      </div>

      {/* Main Section */}
      <div className="flex items-center h-[calc(100vh-124px)] overflow-y-hidden max-w-[1920px] gap-10 m-auto w-[93%] pr-[30px]">
        {/* <div className='flex-shrink-0 self-start'>
          <Link to="/home">
          <button className='bg-[#918F8F] text-white px-3 py-2 text-[18px] flex items-center gap-1 hover:bg-gray-800 font-semibold'  style={{
    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 15% 100%, 0px 80%)",
  }}><FaChevronLeft />back</button></Link>
        </div> */}
     
     {loading &&     <div className="absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">

<div className="w-[90px] h-[90px] border-[6px] border-t-transparent border-red-800 rounded-full animate-spin"></div>
</div>}

        <div className="flex justify-center items-center ml-[80px] h-full flex-shrink-0">
          <div className='h-[2px] bg-gray-300 w-full rotate-90 absolute -z-10 line-rotate'></div>
          <div className='h-[2px] bg-gray-300 w-[20%] left-0  absolute -z-10 line-rotate-vertical'></div>
          <div className='h-[2px] bg-[#e11c3696] w-[6%]  absolute -z-10 line-rotate-vertical left-[20%]'></div>
     
               <div className="slider-container-product comercial relative h-full w-full" style={sliderStyles}>
              <Slider ref={sliderRef} {...settings}>
                {productEngine?.map((data, index) => {
                     
                     if (data.isDummy) {
                      return (
                        <div key={index} className="w-60 h-60 opacity-0 pointer-events-none dummy-slide" />
                      );
                    }
                  return (
                    <div
                      key={data.engine}
                      className={`rounded-full  !w-60 !h-60 shadow-[3px_7px_20px_10px_#6b646426] z-40 p-[18px] relative transition-transform duration-300 ease-in-out bg-white overflow-hidden ${
                        activeIndex === index ? "scale-[1.2]" : "scale-95 opacity-100"
                      }`}
                      onClick={() => { sliderRef.current.slickGoTo(index)
                        setActiveEngineIndex(0)
                      }
                        
                      } // Click to change slide
                    >
                         {activeIndex === index ? (
                     
                     <svg
                       className="absolute right-[0px] -z-10 top-[50%] -translate-y-1/2 -rotate-[2deg]"
                     xmlns="http://www.w3.org/2000/svg"
                     width="39"
                     height="132"
                     fill="none"
                     viewBox="0 0 39 132"
                   >
                     <g filter="url(#filter0_i_1084_2081)">
                       <path
                         fill="#D91027"
                         d="M26.215.114a142 142 0 0 1-7.35 131.775L.109 120.669A120.14 120.14 0 0 0 6.326 9.178z"
                       ></path>
                     </g>
                     <defs>
                       <filter
                         id="filter0_i_1084_2081"
                         width="38.892"
                         height="136.774"
                         x="0.108"
                         y="0.114"
                         colorInterpolationFilters="sRGB"
                         filterUnits="userSpaceOnUse"
                       >
                         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                         <feBlend
                           in="SourceGraphic"
                           in2="BackgroundImageFix"
                           result="shape"
                         ></feBlend>
                         <feColorMatrix
                           in="SourceAlpha"
                           result="hardAlpha"
                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         ></feColorMatrix>
                         <feOffset dy="5"></feOffset>
                         <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                         <feComposite
                           in2="hardAlpha"
                           k2="-1"
                           k3="1"
                           operator="arithmetic"
                         ></feComposite>
                         <feColorMatrix values="0 0 0 0 0.183333 0 0 0 0 0.179514 0 0 0 0 0.179514 0 0 0 0.05 0"></feColorMatrix>
                         <feBlend in2="shape" result="effect1_innerShadow_1084_2081"></feBlend>
                       </filter>
                     </defs>
                   </svg>
                         
                          
                          
                          // <div className="absolute bg-[#E11C37] -right-[26px] w-[96px] h-[107px] top-[25%] -z-10" />
       ) : null}
                      
                      <div
                        className={`flex flex-col justify-center items-center rounded-full  w-full h-full bg-white transition-all duration-300 shadow-[1px_0px_4px_3px_#7e78783d] ${
                          activeIndex === index ? "opacity-100" : "opacity-100"
                        }`}
                      >
                        <p className="text-[1.2rem] font-[900] text-[#D91027] leading-[25px] text-center mx-[15px]">{data.engine}</p>
                  
                        <div
                          className={`text-center  ${
                            activeIndex === index
                              ? "opacity-100  "
                              : "opacity-0 h-0   overflow-hidden"
                          }`}
      // className={`transition-all duration-500 ease-in-out transform text-center  ${
      //   activeIndex === index
      //     ? "opacity-100 translate-x-0 scale-100"
      //     : "opacity-0 translate-x-[120px] scale-95 h-0 overflow-hidden"
      // }`}
    >
      <p className="text-[0.80rem] font-[700] mt-2 mx-[30px] leading-4">{data.description}</p>
    </div>
                       
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
         
         
        </div>
        <div className='flex-grow h-[782px]'>
          <div className={`relative h-full last-field ${isAnimating ? 'opacity-0' : ''}`}>
          
            <div className='main_box drop-shadow-2xl h-full'>
              <div className=' bg-white h-full' style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%)' }}>
                <div className='relative w-full h-full'>
                  {/* <img
                    style={{ objectFit: 'cover' }}
                    className='w-full h-[400px]'
                    src={comercialImg}
                    alt=""
                  /> */}
                   <video
                      autoPlay
                      loop
                        key={productEngine[activeIndex].video} 
                      muted
                      // controls
                      playsInline
                       disablepictureinpicture
  controlsList="nodownload noplaybackrate noremoteplayback"
                      preload='none'
                      className=" w-full h-[400px] object-cover"
                    >
                      <source src={productEngine[activeIndex].video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                   <div className='w-full py-5 px-12'>
                   <h2 className='text-[3rem] font-[700] pb-2'>{productEngine[activeIndex].engine}</h2>
                   <p className=' text-[1.3rem] pb-5'>{productEngine[activeIndex]?.description}</p>
                        {/* <Link to="/A100years"><div className='w-[188px] h-[40px] bg-[#E11C37] flex justify-center items-center text-white text-[15px] text-bold button_clip_path'>View Timeline</div></Link> */}
              <ProductCard  onExploreClick={handleExploreClick} engines={productEngine[activeIndex]?.engines}  activeEngineIndex={activeEngineIndex} setActiveEngineIndex={setActiveEngineIndex}  />
                      </div>
                      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       <div className="absolute grid grid-cols-2 bottom-[43px] right-[94px] z-40"  style={{
                  clipPath:
                    "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
                }}>
                   <Link to={`/home/${id}`}>
                  <div className="bg-[#918F8F] text-white flex justify-center items-center px-3 py-1 gap-1 hover:bg-[#656363]">
                    <BiSolidChevronLeft className="h-full w-[25px]" />
                    <p className="text-[1rem]">Previous</p>
                  </div></Link>
                
                    <Link to={`/home/${id}`}>
                 <div onClick={""} className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-1 gap-2 hover:bg-red-800">
                    <BiHomeAlt2 className="h-full w-[25px]" />
                    <p className="text-[1rem]">Home</p>
                  </div>
                  </Link>
                </div>
      
       {/* Product Details Section */}
       {isDetailsVisible   && (
        <div
          ref={detailsRef}
          className="fixed inset-0 bg-white z-50 shadow-lg"
          style={{
            width: "100%",
            height: "100%",
           
          }}
        >
          <ProductDetails engineData={selectedEngineDetails} onClose={handleClose} />
        </div>
      )}
    </div>
    
  );
}

export default Products;
