import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import { Navigation, Pagination, Scrollbar, A11y,Virtual } from "swiper/modules";
import gtfimage from "../../assets/100years/gtf-family.png";
import gtf from "../../assets/100years/gtf-engine.png";
import layer1 from "../../assets/100years/layer-1.png";
import layer2 from "../../assets/100years/layer-2.png";
import layer3 from "../../assets/100years/layer-3.png";
import layer4 from "../../assets/100years/machine-1.png";
const CommonSlideYearProduct = ({gallery,onImageClick}) => {
  console.log("gallery",gallery);
  const cards = [
    { id: 1, img: layer1, description: "Lorem ipsum dolor" },
    { id: 2, img: layer2, description: "Lorem ipsum dolor" },
    { id: 3, img: layer3, description: "Lorem ipsum dolor" },
    { id: 4, img: layer4, description: "Lorem ipsum dolor" },
  
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Initial second card is active
  const swiperRef = useRef(null); // Reference for Swiper instance
console.log("activeindex",activeIndex);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Navigate to the previous slide
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Navigate to the next slide
    }
  };
  const data = gallery || cards
  return (
    <div className="common-slider-section w-full relative px-3">
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          centeredSlides={false}
          loop={false}
          modules={[Navigation, Pagination,Virtual]}
          virtual
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign swiper instance to ref
          onActiveIndexChange={(swiper) => {
            let newIndex = swiper.realIndex + 1; // Convert to 1-based index
          
            // Handle looping cases
            if (swiper.realIndex === data.length - 1) {
              newIndex = 0; // If moving from last card (7) to first (0)
            } 
          
            if (newIndex !== activeIndex) {
              setActiveIndex(newIndex);
              // console.log("Updated Active Index:", newIndex);
            }
          }}
          className="mySwiper"
        >
          {data?.map((card, index) => (
            <SwiperSlide key={index}>
              <div
      className={`card-container relative transition-transform duration-300 ease-in-out ${
        index === activeIndex ? "scale-100" : "scale-[0.6]"
      }`}
    >
      {card?.img ? (
        <img
     loading="lazy"
          src={card?.img}
          alt={`Card-${index}`}
          className="h-[100px] w-full object-cover cursor-pointer"
          onClick={() => {
            if (gallery) {
              onImageClick(index, gallery);
            } else {
              onImageClick(index, cards);
            }
          }}
        />
      ) : card.video ? (
       <div className="h-[100px] relative" onClick={() => {
            if (gallery) {
              onImageClick(index, gallery);
            } else {
              onImageClick(index, cards);
            }
          }}>
         <video
          src={card.video}
          playsInline
          className="h-full w-full object-cover cursor-pointer"
        />
       <div className="absolute inset-0 flex justify-center items-center cursor-pointer"><button
          className="bg-black bg-opacity-50 p-2 rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"></path></svg></button></div>
       </div>
      ) : card.pdf ? (
       <div className="h-[100px] relative">
        <iframe
  src={card.pdf}
  className="h-full w-full cursor-pointer"

  title="PDF Preview"
/>
       <button
    className="absolute inset-0 w-full h-full z-10 bg-transparent"
    onClick={() => {
      if (gallery) {
        onImageClick(index, gallery);
      } else {
        onImageClick(index, cards);
      }
    }}
  >
    {/* Optional: Add icon or text here */}
  </button>
       </div>
      ) :  null}
    </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      {data?.length -1 >= 5 && (
        <>
         <div className="absolute top-[30%] transform  left-0 z-10">
        <button
          onClick={handlePrev}
          className="bg-[#CE2028] text-black px-[2px] left_arrow_clip_path  shadow-md hover:bg-red-500 transition"
        >
         <GrFormPrevious className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute top-[30%] transform  right-0 z-10">
        <button
          onClick={handleNext}
          className="bg-[#CE2028] text-black px-[2px]   shadow-md hover:bg-red-500 transition"
          style={{
            clipPath:
              "polygon(100% 0%, 100% 0%, 100% 80%, 80% 100%, 10% 100%, 0% 100%, 0% 0%)",
          }}
        >
          <GrFormNext className="w-4 h-4" />
        </button>
      </div></>
      )}
     
    </div>
  );
};

export default CommonSlideYearProduct;
{/* <button class="bg-black bg-opacity-50 p-2 rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"></path></svg></button> */}