import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
const CustomDialog =({ images, startIndex, onClose }) => {
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(startIndex);
   // Pause all videos on slide change
  const handleSlideChange = () => {
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle the next button click
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.6, // Adjust based on how much visibility triggers play
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);
  console.log("start",startIndex);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex justify-center items-center rounded-[5px]"   onClick={onClose}>
    <div className="bg-white  rounded-lg w-[80%] max-w-5xl  relative border-2 border-black"      onClick={(e) => e.stopPropagation()} >
    <button
  onClick={onClose}
  className="absolute top-2 z-40 right-2 text-black font-bold rounded-[5px] w-8 h-8 bg-gray-200 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all"
>
  ✕
</button>

      <Swiper
        initialSlide={startIndex}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        slidesPerView={1}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        className="image-preview-swiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            {
              item.img ? (<img
              src={item.img}
              alt={`Full Image ${index}`}
              className="w-full h-[600px] rounded-[5px] object-contain"
           style={{
  mixBlendMode: 'multiply',
  backgroundColor: 'black'
}}
            />) : item.video ? (
       <div className="h-[600px] relative">
         <video
         ref={(el) => (videoRefs.current[index] = el)}
         
         controls
          disablepictureinpicture
  controlsList="nodownload noplaybackrate noremoteplayback"
          src={item.video}
          className="h-full w-full object-cover cursor-pointer"
        />
     
       </div>
      ) : item.pdf ? (
       <div className="h-[600px] relative">
        
             <iframe
  src={item?.pdf}
  className="h-full w-full cursor-pointer"
  type="application/pdf"
/>
     
       </div>
      ) : null}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-between mt-4 absolute top-1/2 w-[98%] z-30 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button   onClick={handlePrev} className={`custom-prev  px-2 py-2 rounded ${currentIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-600'}`}>  <FaChevronLeft /></button>
        <button    onClick={handleNext}  className={`custom-next  px-2 py-2 rounded  ${currentIndex === images.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-400'}`}> <FaChevronRight /></button>
      </div>
    </div>
  </div>
  )
}

export default CustomDialog