import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import ReddropSvg from './ReddropSvg';
import RedDotLineSvg from './RedDotLineSvg';
import { useNavigate } from 'react-router-dom';

const MapCard = ({cardclass,cityPositions ,city,onPrevClick, onNextClick,cardRef,currentIndex,index,length,data}) => {
     const navigate = useNavigate();
    if (!data || data.length === 0) return null;

  const isActive = index === currentIndex;
  const svgConfigurations = [
    { width: 140, height: 210, translateX: -80 }, // Configuration for index 0
    { width: 140, height: 210, translateX: -101 }, // Configuration for index 1
    { width: 110, height: 210, translateX: -96 },  // Configuration for index 2
    // Add more configurations as needed
  ];
  const { width, height, translateX } = svgConfigurations[index];
// const mapData = data[0]?.exploreData ?? [];

// console.log("dataa---",data);

  
     const handelExplore = ((index) => {
      const mapData = data[index]?.exploreData ?? [];
      // console.log("mapayaa",mapData);
     navigate("/products/productdetails", { state: { mapData: mapData } });
    })
  return (
  <div className={` w-[600px] flex flex-col ${cardclass}`}   style={currentIndex === index ? { zIndex: 400 } : {}}>
      {data.map((entry, dataIndex) => (
        <div
          key={entry.id}
          className="mb-6 main_map_box drop-shadow-2xl "
            ref={(el) => cardRef(el, dataIndex)}
          // style={{
          //   clipPath:
          //     "polygon(50% 0%, 100% 0px, 100% 57%, 79% 100%, 53% 100%, 0px 100%, 0px 0px)",
          // }}
        >
          <div className='w-[16px] h-[120px] absolute bg-[#E11C37] top-0 -left-[16px] ' />
          <div className="flex h-[205px] w-full justify-center  items-center p-5 bg-white "
           style={{ clipPath: "polygon(50% 0%, 100% 0px, 100% 57%, 85% 100%, 53% 100%, 0px 100%, 0px 0px)" }}>
            <div className="relative flex-1 h-full">
              <div className='rounded-full w-[150px] h-[150px]' style={{ boxShadow: "2px 3px 9px 1px #cbcbcb" }}>
                <img
                className="w-full h-full object-contain rounded-full overflow-hidden "
                
                src={entry?.img}
                alt="card"
              />
              </div>
            </div>
            <div className="w-full flex-[2.2] h-full flex flex-col justify-between">
              <div>
                <h2 className="text-[1.1rem] font-[900] leading-[18px]">
                  {entry.header1 || 'Header Title 1'}
                </h2>
                <h2 className="text-[1.1rem] font-[900]  text-[#D91027]">
                  {entry.header2 || 'Header Title 2'}
                </h2>
                <p className="text-[0.8rem] font-[700] pt-2">{entry.subHeader}</p>
                <p className="text-[0.7rem] leading-[15px] font-[500] pt-1  pr-[20px] w-[91%]">{entry.desc}</p>
              </div>
              <button
              onClick={()=> handelExplore(dataIndex)}
                className="w-[100px] h-[30px] bg-[#D91027] text-white text-[0.8rem] px-4 py-1 hover:scale-110 transition-all flex justify-center items-center gap-2"
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 66%, 90% 100%, 0% 100%, 0% 34%)",
                }}
              >
                Explore
                <svg
                  width="8"
                  height="9"
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
          </div>
        </div>
      ))}

      {/* Navigation for outer city list, not individual cards */}
      {/* {index === currentIndex && (
          <div className="absolute -right-[28%] top-0 flex gap-4">
        <div
          className={`left_arrow_clip_path cursor-pointer w-[40px] h-[36px] flex justify-center items-center  ${
            currentIndex === 0
              ? 'bg-[#918F8F]'
              : 'bg-[#D91027] hover:bg-[#742730]'
          } text-white font-bold z-10`}
          onClick={onPrevClick}
        >
          <FaChevronLeft />
        </div>
        <div
          className={`right_arrow_clip_path cursor-pointer w-[40px] h-[36px] flex justify-center items-center ${
            currentIndex === length - 1
              ? 'bg-[#918F8F]'
              : 'bg-[#D91027] hover:bg-[#742730]'
          } text-white font-bold z-10`}
          onClick={onNextClick}
        >
          <FaChevronRight />
        </div>
      </div>
      )} */}
        {/* {index === currentIndex && (
          <div className={`flex flex-col items-center absolute bottom-[20%] -left-[30%] ${city?.cityPosition}`}>
    <ReddropSvg />
    <div>
      <h2 className='font-objektiv font-semibold text-[0.8rem]'>{city?.name}</h2>
     
    </div>
  </div>
        )} */}
     
    </div>
  )
}

export default MapCard