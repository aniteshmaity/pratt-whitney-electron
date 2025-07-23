import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y,Virtual } from "swiper/modules";
import activeRedDot from "../../assets/100years/active-dot.png";
import redDot from "../../assets/100years/non-active-dots.png";
import { gsap } from "gsap";
import VideoThumbnailGenerator from "../../components/VideoThumbnailGenerator";

const InnerSliderCarousal = ({ images,onImageClick,type,combinedImages,currentInnerSlide }) => {
  const [activeIndex,setActiveIndex] = useState(0);
  const [showThumbnail, setShowThumbnail] = useState(false);
  console.log("showthumbnail--",showThumbnail);

useEffect(() => {
  setShowThumbnail(false); // reset first

  const timer = setTimeout(() => {
    setShowThumbnail(true); 
  }, 500); 

  return () => clearTimeout(timer); 
}, [currentInnerSlide]);

  // console.log("type",type);
  // console.log("haldeclick",onImageClick);
  // console.log("images",images);

  const swiperInnerRef = useRef(null);
  const handlePrevClick = () => {
    swiperInnerRef.current.swiper.slidePrev(); // Go to previous slide
  };

  const handleNextClick = () => {
    swiperInnerRef.current.swiper.slideNext(); // Go to next slide
  };
useEffect(() => {
  if (currentInnerSlide && swiperInnerRef.current?.swiper) {
    swiperInnerRef.current.swiper.slideTo(0);
    setActiveIndex(0);
  }
}, [currentInnerSlide]);
  return (
    <>
      <div className="relative">
        {" "}
      
        {images?.slice(1).length > 3 && (
          <>
            <div
          className={`absolute left_arrow_clip_path left-btn top-1/2 -left-2 transform -translate-y-1/2 cursor-pointer w-[18px] h-[18px] flex justify-center items-center ${activeIndex === 0 ? "bg-[#918F8F]" : "bg-[#D91027]"}  text-white font-bold z-10`}
          onClick={handlePrevClick}
        >
          <FaChevronLeft className="w-2 h-2" />
        </div>
        <div
          className={`absolute right_arrow_clip_path right-btn top-1/2 -right-2 transform -translate-y-1/2 cursor-pointer w-[18px] h-[18px] flex justify-center items-center  ${activeIndex === images.length-4 ? "bg-[#918F8F]" : "bg-[#D91027]"}  text-white font-bold z-10`}
          onClick={handleNextClick}
        >
          <FaChevronRight className="w-2 h-2" />
        </div>
        </>)}
       
        <Swiper
          ref={swiperInnerRef}
          spaceBetween={10} // Adjust space between slides
          slidesPerView={3}
          onSlideChange={(e)=> setActiveIndex(e.realIndex)}
          modules={[Navigation, Pagination,Virtual]}
          virtual //Only render what's visible in the viewport.
          className="my-swiper innerSlideSwiper"
        >
       
          {images?.slice(1).map((item, index) => (
            <SwiperSlide key={index}>
              {item.img ? (
                 <img
                 loading="lazy"
                src={item.img}
                alt={`Slide Image ${index}`}
                className="w-full  h-[60px] object-cover" 
                // style={{
                //   opacity: 1 - index * 0.1 > 0.3 ? 1 - index * 0.2 : 0.3 // Minimum opacity 0.3
                // }}
                onClick={() => {
                  // console.log('Image clicked:', e); // Check what image is clicked
                  // console.log('All images:', images?.slice(1));
                  onImageClick(index, images?.slice(1))}}
              />
              ) : item.video ? (
       <div className="h-[60px] relative" onClick={() => {
                  onImageClick(index, images?.slice(1))}}>
         {/* <video
          preload="none"
  playsInline
          src={item.video}
          className="h-[60px] w-full object-cover cursor-pointer"
        /> */}
        {showThumbnail  ? (
          <VideoThumbnailGenerator videoFile={item.video} />
            
        ) : (
 <div className="h-[60px] w-full bg-gray-300 animate-pulse" />
        )}
      
       </div>
      ) : null}
             
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </>
  );
};

export default InnerSliderCarousal;
