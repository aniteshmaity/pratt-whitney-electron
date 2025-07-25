import machine2 from "../../assets/100years/1960s-img-1.png";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import imageUrl from "../../assets/100years/machne-details-background.png";

import Close from "../../assets/images/close_arrow.svg";
import gtfimage from "../../assets/100years/gtf-family.png";
import gtf from "../../assets/100years/gtf-engine.png";
import rotateImg from "../../assets/engine/3d-rotate.png";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import machine1 from "../../assets/100years/machine-1.png";
import gallerytext from "../../assets/100years/gallery/gallery.svg"
import { Link, useNavigate, useParams } from "react-router-dom";
import CommonSlideYearProduct from "../Product/CommonSlideYearProduct";
import { tabsDataVariant1, tabsDataVariant2 } from "../../components/data/tabsData";
import { yearEngineData } from "../../components/data/yearEngineData";
import CustomDialog from "../../components/CustomDialog";
import layer1 from "../../assets/100years/layer-1.png";
import layer2 from "../../assets/100years/layer-2.png";
import layer3 from "../../assets/100years/layer-3.png";
import Logo from "../../components/Logo";
import useVideoThumbnail from "../../hooks/useVideoThumbnail";
import BackHomeButtons from "../../components/buttons/BackHomeButtons";
const YearEngineDetails = () => {
  const { yearParam } = useParams();
  const navigate = useNavigate();
  console.log("year-param", yearParam);
  const [year, id] = yearParam.split("-");
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const gtfImageRef = useRef(null);
  const rotateImgRef = useRef(null);
  const redDotRef = useRef(null);
  const scrollableRef = useRef(null);
  const redDot2Ref = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [tabsData, setTabsData] = useState(tabsDataVariant1);
  const [timelineData, setTimelineData] = useState(tabsDataVariant1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImages, setDialogImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const SESSION_STORAGE_KEY = "currentAirplaneIndex";


  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  const handleImageClick = (index, img) => {
    console.log("images------", img);
    setDialogImages(img);
    setStartIndex(index);
    setIsDialogOpen(true);
    console.log("handleclick");
  };
  const goHomePage = () => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, matchingIndex);
    navigate("/home");
    // sessionStorage.removeItem("currentAirplaneIndex");

  }

  const flatTimeline = yearEngineData.flatMap(entry =>
    Array.isArray(entry.timeline) ? entry.timeline : []
  );
  console.log("yearengine", yearEngineData);
  console.log('yearParam:', yearParam);

  const matchingIndex = yearEngineData.findIndex(entry =>
    Array.isArray(entry.timeline) &&
    entry.timeline.some(item =>
      item && `${item.year}-${item.id}` === yearParam
    )
  );
  console.log("matchingindex", matchingIndex);
  const matchingYear = flatTimeline
    .find((item) => `${item.year}-${item.id}` === yearParam);
  console.log("matched", matchingYear);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isScrollableOverflowing, setIsScrollableOverflowing] = useState(false);
  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, matchingIndex);
    // console.log("seesionid---",sessionStorage.getItem("SESSION_STORAGE_KEY")); 
  }, [])

  const handleMouseEnter = () => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.9, ease: "power2.out" },
    });

    // Scale up and rotate the elements
    timeline
      .to(gtfImageRef.current, { scale: 1.1 }, 0) // Scale up `gtfImage`
      .to(rotateImgRef.current, { scale: 1.1, rotate: 360 }, 0); // Rotate and scale up `rotateImg`
  };



  const handleMouseLeave = () => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.9, ease: "power2.out" },
    });

    // Scale down and reset rotation
    timeline
      .to(gtfImageRef.current, { scale: 1 }, 0) // Scale back `gtfImage`
      .to(rotateImgRef.current, { scale: 1, rotate: 0 }, 0); // Reset `rotateImg`
  };
  const Varients = [
    { img: gtf, title: "JT3D" },
    { img: gtf, title: "TF33" },

  ];

  const handleVariantClick = (index) => {
    // Example: Update tabsData based on the selected variant index
    if (index === 0) {
      setTabsData(tabsDataVariant1); // Set data for Variant 1
    } else if (index === 1) {

      setTabsData(tabsDataVariant2); // Set data for Variant 2
    }
    // Add more conditions if you have more variants
    setActiveTab(0); // Reset to the first tab when variant changes
  };
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  }, [tabsData]);
  useEffect(() => {
    // Trigger fade-in animation with GSAP
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  }, [activeTab]);
  useEffect(() => {
    const content = contentRef.current;

    const handleScroll = () => {
      if (content && redDotRef.current) {
        const scrollPercentage =
          (content.scrollTop / (content.scrollHeight - content.clientHeight)) *
          100;
        redDotRef.current.style.top = `${scrollPercentage}%`;
      }
    };

    const checkOverflow = () => {
      setIsOverflowing(content.scrollHeight > content.clientHeight);
    };

    if (content) {
      content.addEventListener("scroll", handleScroll);
      checkOverflow(); // Check overflow when component mounts
    }

    return () => {
      if (content) content.removeEventListener("scroll", handleScroll);
    };
  }, [tabsData, activeTab]);
  const handleScroll1 = () => {
    const scrollableElement = scrollableRef.current;
    const redDot = redDot2Ref.current;
    if (scrollableElement && redDot) {
      const scrollPercentage =
        (scrollableElement.scrollTop /
          (scrollableElement.scrollHeight - scrollableElement.clientHeight)) *
        100;
      redDot.style.top = `${scrollPercentage}px`;
    }
  };
  useEffect(() => {
    const element = scrollableRef.current;
    if (element) {
      setIsScrollableOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, []);

  const cards = [
    { id: 1, img: layer1, description: "Lorem ipsum dolor" },
    { id: 2, img: layer1, description: "Lorem ipsum dolor" },
    { id: 3, img: layer3, description: "Lorem ipsum dolor" },
    { id: 4, img: layer2, description: "Lorem ipsum dolor" },
    { id: 5, img: layer2, description: "Lorem ipsum dolor" },
    { id: 6, img: layer3, description: "Lorem ipsum dolor" },
    { id: 7, img: layer3, description: "Lorem ipsum dolor" },
  ];
  const thumbnail = useVideoThumbnail(matchingYear?.video);
  const mainImage = matchingYear?.gallery?.[0]?.img;
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="max-w-[1920px] w-[95%] m-auto ">
        <div className="h-[146px] flex justify-between  items-center">
          <Logo type="white" />
          <div className="flex justify-center items-center gap-4">
            {/* <p className="text-2xl font-[900]">
              <span className="text-white pr-2">INDIA</span>
              <span className=" text-[#E11C37]">INTERACTIVE</span>
            </p> */}
            {/* <Link to="/A100years/yearCourasal">
            <div
              // onClick={handleCloseApp}
              id="app_close"
              className="cursor-pointer close_clip_path w-[44px] h-[32px] hover:bg-[#918F8F] bg-[#212020de] flex justify-center items-center text-white font-bold"
            >
              <img src={Close} alt="close_arrow" />
            </div>
            </Link> */}
          </div>
        </div>
        <div className="relative ">
           <BackHomeButtons onPrevious={navigate(`/A100years/yearCourasal/${yearParam}`)} onHome={goHomePage}   containerClassName="bottom-0 right-0" />
          {/* <div className="absolute grid grid-cols-2 bottom-0 right-0 z-40" style={{
            clipPath:
              "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
          }}>
            <Link to={`/A100years/yearCourasal/${yearParam}`}>
              <div className="bg-[#918F8F] text-white flex justify-center items-center px-4 py-2 gap-1 hover:bg-[#656363]">
                <BiSolidChevronLeft className="h-full w-[25px]" />
                <p className="text-[1rem]">Previous</p>
              </div></Link>

            <div onClick={goHomePage} className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-2 gap-2 hover:bg-red-800">
              <BiHomeAlt2 className="h-full w-[25px]" />
              <p className="text-[1rem]">Home</p>
            </div>
          </div> */}
          <div
            className="grid grid-cols-2 h-[calc(100vh-180px)]  "
            style={{
              clipPath:
                "polygon(100% 0%, 100% 0%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 0%)",
            }}
          >
            <div className="">
              <div className="relative overflow-hidden h-[54%] bg-[#D91027]">
                {
                  matchingYear?.video ? (<>
                    <video ref={videoRef} className="w-full h-full object-cover pr-[2px]" muted playsInline controls >
                      <source src={matchingYear.video} type="video/mp4" />
                    </video>
                    {/* <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
              >
                {isPlaying ? (
                  // Pause Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 5h2v10H6V5zm6 0h2v10h-2V5z" />
                  </svg>
                ) : (
                  // Play Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                )}
         
              </button> */}
                    {/* {thumbnail ? (
        <img src={thumbnail} alt="Thumbnail" className="rounded w-full absolute top-0 left-0 h-full z-20" />
      ) : (
        <p>Loading thumbnail...</p>
      )} */}
                  </>
                  ) : (
                    <img src={mainImage} className="w-full h-full object-cover pr-[2px]" alt="" />
                  )
                }


              </div>
              <div className="bg-[#D91027] h-[46%]  relative pr-[1.3px] pl-[2px] pb-[1.3px]">
                <div className="red-border bg-[#393636] h-full w-full flex flex-col justify-center z-10" style={{
                  clipPath:
                    "polygon(100% 0%, 100% 100%, 90% 100%, 20% 100%, 0% 56.4%, 0% 0%)",
                }}>
                  <div className="">
                    <div className="w-[90%] m-auto">
                      {/* <img src={gallerytext} className="w-[30%]" alt="" /> */}

                      <div className="relative w-[110px] h-[48px]">
                        <svg
                          className="w-full h-full"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 110 42"
                        >
                          <path
                            fill="#242021"
                            stroke="#D91027"
                            d="M.5 11.457 11.457.5H109v30.043L98.043 41.5H.5z"
                          ></path>
                        </svg>
                        <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">Gallery</p>
                        <div className="absolute -right-[88px] top-1/2 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="88"
                            height="19"
                            fill="none"
                            viewBox="0 0 88 19"
                          >
                            <path stroke="#D91027" d="M.5 1.25h75.75L87.5 18.5"></path>
                            <path
                              fill="#D91026"
                              d="M48.5 1.25h27.75L83 11l-3-.75-4.5-6.75H50.75z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="slider-section w-[90%] m-auto mt-8">
                      <CommonSlideYearProduct gallery={matchingYear.gallery || cards} onImageClick={handleImageClick} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] py-4 overflow-y-hidden relative ">
              {/* <div
              // onClick={handleCloseApp}
              id="app_close"
              style={{
                clipPath:
                  "polygon(100% 0%, 100% 0%, 100% 80%, 80% 100%, 10% 100%, 0% 100%, 0% 0%)",
              }}
              className="cursor-pointer  w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold absolute right-1 top-0"
            >
              <img src={Close} alt="close_arrow" />
            </div> */}

              <div
                className="bg-[#393637] w-[92%] h-[145px] relative px-5 py-3 flex flex-col justify-center"
                style={{
                  clipPath:
                    "polygon(100% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%, 0 0)",
                }}
              >
                {/* <div className="bg-[#393637] px-5 py-3  h-full" style={{
                clipPath:
                "polygon(100% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%, 0 0)",
              }}> */}
                <h1 className="text-[2rem] font-[900] leading-tight text-white"> {matchingYear?.title || "Lorem Insum Dolar sit in the black"}</h1>
                <p className="text-[#CE2028] text-[1rem] font-medium pt-1">
                  {matchingYear?.subtitle || "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </p>
                {/* </div> */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M100,0 L0,0"
                    fill="none"
                    stroke="#D91027"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Right diagonal border (100,0 to 100,50 to 90,100) */}
                  <path
                    d="M100,0 L100,50 L90,100"
                    fill="none"
                    stroke="#D91027"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Bottom border (90,100 to 0,100) */}
                  <path
                    d="M90,100 L0,100"
                    fill="none"
                    stroke="#D91027"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-[40px]  ml-5 mt-5 pb-2 w-[90%] relative">
                <div className="border-[1px] rounded-full shadow-[3px_7px_20px_10px_#6b646426]  w-[90px] h-[90px] p-1">
                  <div className="overflow-hidden w-full h-full border-[1px] rounded-full">
                    <img
                      src={gtf}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <p
                  onScroll={handleScroll1}
                  ref={scrollableRef}
                  className="text-[rgba(0, 0, 0, 0.7)] h-[100px] no-scrollbar overflow-auto pr-[40px]"
                  dangerouslySetInnerHTML={{ __html: matchingYear?.description || "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." }}
                />
                {isScrollableOverflowing && (
                  <div className="bg-[#D9D9D9] w-1.5  right-0 top-0 h-full translate-x-1/2 absolute">
                    <div
                      ref={redDot2Ref}
                      className=" w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
                    ><div className="bg-red-600 rounded-full w-2.5 h-2.5" /></div>
                  </div>
                )}
              </div>
              {/* <div className="flex gap-[40px] ml-5 mt-5 items-center">
              <h2 className="text-[#CE2028] font-[800]">Select Variant</h2>

              {Varients.map((item, index) => {
                return (
                  <div className="" key={index}  onClick={() => handleVariantClick(index)}>
                    <div className="border-[1px] rounded-full shadow-[3px_7px_20px_10px_#6b646426]  w-[50px] h-[50px] p-1 cursor-pointer">
                      <div className="overflow-hidden w-full h-full border-[1px] rounded-full">
                        <img
                          src={item.img}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <p className="text-[12px] text-center mt-2">{item.title}</p>
                  </div>
                );
              })}
            </div> */}

              <div className="mt-5 relative h-full">
                <div className="w-full h-[32px]  absolute top-[1px] shadow-[-1px_4px_5px_1px_#514b4b33]" />
                <div className="ml-5  overflow-hidden w-[86%]  h-[calc(100%-402px)]">

                  {/* Tabs Navigation */}
                  <div
                    className="flex justify-between bg-[#918F8F] w-[86%]"
                    style={{
                      clipPath:
                        "polygon(2% 0%, 100% 0%, 100% 64%, 98% 100%, 0% 100%, 0% 34%)",
                    }}
                  >
                    {tabsData.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 65%, 90% 100%, 0% 100%, 0% 35%" }}
                        className={`flex-1 px-4 py-2 text-[0.7rem] font-semibold text-white ${activeTab === index ? "bg-[#CE2028]" : ""
                          } transition duration-300`}
                      >
                        {tab.title}
                      </button>
                    ))}
                  </div>

                  {/* Tabs Content */}
                  <div
                    ref={contentRef}
                    className="relative mt-4 h-[calc(100%-52px)] w-[89%] no-scrollbar ml-[20px]  overflow-auto"
                  >
                    {tabsData[activeTab].content.map((item, idx) =>
                      typeof item === "string" ? (
                        <p key={idx} className="mb-2">
                          {item}
                        </p>
                      ) : (
                        <div key={idx} className={`flex ${tabsData[activeTab].title === "Specifications" ? 'flex justify-between' : tabsData[activeTab].title === "History" ? "grid grid-cols-[1fr_4fr]" : 'grid grid-cols-[1fr_1fr_4fr]'}  gap-[30px] border-b py-2`}>
                          {tabsData[activeTab].title !== "History" && (<img
                            src={gtf}
                            alt=""
                            className="w-[60px] h-[60px] object-cover"
                          />)}
                          {tabsData[activeTab].title === "Specifications" ? (<div>
                            <h2 className="font-bold text-[1.2rem]">{item.heading}</h2>
                            <ol className=" text-gray-600 list-disc text-[0.8rem] list-inside">
                              {item.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ol>
                          </div>) : ""}

                          <div>
                            <h2 className="text-[#CE2028] text-[1.5rem] font-[900]">
                              {item.bypassRatio}
                            </h2>
                            <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem]">
                              {item.enginetext}
                            </p>
                          </div>
                          {tabsData[activeTab].title === "Specifications" ? (<div>
                            <h2 className="text-[#CE2028] font-[800] text-[1.5rem]">
                              {item.fanDiameter}
                            </h2>
                            <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem]">
                              Fan diameter
                            </p>
                          </div>) : ""}
                          {tabsData[activeTab].title !== "Specifications" ? (<div>
                            <p className="text-[0.8rem]">
                              {expandedIndex === idx ? item.description : `${item.description.slice(0, 50)}...`}{" "}
                              <span
                                className="text-[#CE2028] text-[0.7rem] font-medium cursor-pointer block"
                                onClick={() => toggleDescription(idx)}
                              >
                                {expandedIndex === idx ? "Tap to collapse" : "Tap for more"}
                              </span>
                            </p>
                          </div>) : ""}

                        </div>
                      )
                    )}
                    {/* Custom Scrollbar Red Dot */}
                  </div>
                  {isOverflowing && (
                    <div className="bg-[#D9D9D9] w-1.5 right-[100px] top-[50px] h-[30%] translate-x-1/2 absolute">
                      <div
                        ref={redDotRef}
                        className="w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
                      >
                        <div className="bg-red-600 rounded-full w-2.5 h-2.5" />
                      </div>
                    </div>
                  )}
                </div>
              </div>


            </div>
          </div>
        </div>

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
};

export default YearEngineDetails;
