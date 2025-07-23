import React, { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import imageUrl from "../../assets/100years/machne-details-background.png";

import videoUrl from "../../assets/product/Engine Background Loop.mp4";

import Close from "../../assets/images/close_arrow.svg";
import gtfimage from "../../assets/100years/gtf-family.png";
import gtf from "../../assets/100years/gtf-engine.png";
import rotateImg from "../../assets/engine/rotate-image.png";
import CommonSlideYearProduct from "./CommonSlideYearProduct";
import gallerytext from "../../assets/100years/gallery/gallery.svg";
import {
  tabsDataVariant1,
  tabsDataVariant2,
} from "../../components/data/tabsData";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Html } from "@react-three/drei";
import glb3d from "../../assets/3dFile/turbine__turbofan_engine__jet_engine.glb";
import { Test3d } from "../../components/gtf3d/Test3d";
import studioEnv from "../../assets/textures/studio_small_03_1k.hdr";
import { Gtf3d } from "../../components/gtf3d/Gtf3d";
import Loader from "../../components/Loader";
import CustomDialog from "../../components/CustomDialog";
import machine1 from "../../assets/100years/machine-1.png";
import Logo from "../../components/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { yearEngineData } from "../../components/data/yearEngineData";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { setShowLoader } from "../../features/yearSlice";
// function Model({ url }) {
//   const group = useRef()
//   const { scene } = useGLTF(url)

//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.005
//     }
//   })

//   return <primitive object={scene} ref={group} scale={[0.5, 0.5, 0.5]} />
// }
const ProductDetails = ({ onClose, engineData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const engineParamData = location.state?.engineData;
  const engineParamSlug = location.state?.gtf3dSlug;
  const yearParamSlug = location.state?.yearSlug;
  const yearParamName = location.state?.yearName;
  const mapData = location.state?.mapData;
  const isFleetData = location.state?.isFleetData;
  // console.log("mapData", mapData);
  const allData = engineParamData
    ? engineParamData
    : mapData
      ? mapData
      : engineData;
  const alltabsData = engineParamData
    ? engineParamData?.defaultTabsData
    : mapData
      ? mapData?.defaultTabsData
      : engineData?.defaultTabsData;
  // console.log("alldata", allData);
  const SESSION_STORAGE_KEY = "currentAirplaneIndex";
  // console.log("Received engineparamData:", engineParamData);
  // console.log("Received engineParamSlug:", engineParamSlug);
  // console.log("👌 Received yearParamSlug:", yearParamSlug);
  // console.log("👌 Received yearParamName:", yearParamName);
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);
  const gtfImageRef = useRef(null);
  const rotateImgRef = useRef(null);
  const redDotRef = useRef(null);
  const scrollableRef = useRef(null);
  const redDot2Ref = useRef(null);
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(null);
    const [imageLoading, setImageLoading] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const [showSlider, setShowSlider] = useState(false);
  const [isScrollableOverflowing, setIsScrollableOverflowing] = useState(false);
  // const [show3DModel, setShow3DModel] = useState(false)
  const [tabsData, setTabsData] = useState(alltabsData ?? []);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImages, setDialogImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const homeId = 2;
  const { year, innerIndex, activeYear } = useSelector((state) => state.year);
  const decadeIndex = yearEngineData.findIndex((decade) =>
    decade.timeline.some((item) => item.year === activeYear),
  );
  // const { year, innerIndex } = useSelector((state) => state.year);

  const lastVisited = useSelector((state) => state.navigation.lastVisited);
  // console.log("lastvisited",lastVisited);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSlider(true);
    }, 2000);

    return () => clearTimeout(timeout); // cleanup on unmount
  }, []);

  // console.log("Flat Index:", decadeIndex);
  const handleImageClick = (index, img) => {
    // console.log("images------", img);
    setDialogImages(img);
    setStartIndex(index);
    setIsDialogOpen(true);
    console.log("handleclick");
  };
  console.log("tabsdata", tabsData);
  // const load3DModel = () => {
  //   setShow3DModel(true)
  // }
  const onBack = () => {
    dispatch(setShowLoader(true));

    if (engineParamSlug) {
      console.log("inside eingien param page");
      navigate(-1);
    }
    if (yearParamSlug || lastVisited === "years") {
      navigate(`/A100years/yearCourasal/${yearParamName}`);
    } else {
      navigate("/products");
    }
  };
  const onMapPage = () => {
    navigate("/map");
  };

  // const close3DModel = () => {
  //   setShow3DModel(false)
  // }
  const toggleDescription = (index) => {
    console.log("index-s", index);
    setIsExpanded((prevIndex) => (prevIndex === index ? null : index));
  };
  // console.log("red",engineData);
  const handleMouseEnter = () => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.9, ease: "power2.out" },
    });

    // Scale up and rotate the elements
    timeline
      .to(gtfImageRef.current, { scale: 1.1 }, 0) // Scale up `gtfImage`
      .to(rotateImgRef.current, { rotate: 360 }, 0); // Rotate and scale up `rotateImg`
  };

  const handleMouseLeave = () => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.9, ease: "power2.out" },
    });

    // Scale down and reset rotation
    timeline
      .to(gtfImageRef.current, { scale: 1 }, 0) // Scale back `gtfImage`
      .to(rotateImgRef.current, { rotate: 0 }, 0); // Reset `rotateImg`
  };
  const Varients = [
    { img: gtf, title: "PW1900G" },
    { img: gtf, title: "PW1400G" },
    { img: gtf, title: "PW1600G" },
  ];

  const handleVariantClick = (index) => {
    if (index === selectedVariant) {
      setTabsData(alltabsData);
      setSelectedVariant(null)
    } else {
      setTabsData(allData.variants[index]?.tabsData ?? []);
      setSelectedVariant(index);
    }


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
  const redDot = redDotRef.current;

  const handleScroll = () => {
    if (content && redDot) {
      const scrollPercentage =
        (content.scrollTop / (content.scrollHeight - content.clientHeight)) * 100;
      redDot.style.top = `${scrollPercentage}%`;
    }
  };

  const checkOverflow = () => {
    setIsOverflowing(content.scrollHeight > content.clientHeight);
  };

  // === Common drag logic ===
  let startY = 0;
  let startTop = 0;

  const updateScroll = (clientY) => {
    const deltaY = clientY - startY;
    const trackHeight = content.clientHeight;
    let newTop = startTop + (deltaY / trackHeight) * 100;
    newTop = Math.max(0, Math.min(newTop, 100));
    redDot.style.top = `${newTop}%`;
    const scrollHeight = content.scrollHeight - content.clientHeight;
    content.scrollTop = (newTop / 100) * scrollHeight;
  };

  // === Mouse drag ===
  const handleMouseDown = (e) => {
    e.preventDefault();
    startY = e.clientY;
    startTop = parseInt(redDot.style.top) || 0;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => updateScroll(e.clientY);

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // === Touch drag ===
  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
    startTop = parseInt(redDot.style.top) || 0;
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    updateScroll(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  if (content) {
    content.addEventListener("scroll", handleScroll);
    checkOverflow();
    content.scrollTop = 0;
  }
  if (redDot) {
    redDot.addEventListener("mousedown", handleMouseDown);
    redDot.addEventListener("touchstart", handleTouchStart, { passive: false });
  }

  return () => {
    if (content) content.removeEventListener("scroll", handleScroll);
    if (redDot) {
      redDot.removeEventListener("mousedown", handleMouseDown);
      redDot.removeEventListener("touchstart", handleTouchStart);
    }
  };
}, [tabsData, activeTab, isOverflowing]);



  const handleScroll1 = () => {
    const scrollableElement = scrollableRef.current;
    const redDot = redDot2Ref.current;
    if (scrollableElement && redDot) {
      const scrollPercentage =
        (scrollableElement.scrollTop /
          (scrollableElement.scrollHeight - scrollableElement.clientHeight)) *
        80;
      redDot.style.top = `${scrollPercentage}px`;
    }
  };
  useEffect(() => {
    const element = scrollableRef.current;
    if (element) {
      setIsScrollableOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, decadeIndex);
    // console.log("seesionid---",sessionStorage.getItem("SESSION_STORAGE_KEY"));
  }, []);

  const handleGtf = () => {
    const IsGtf = true;
    navigate(`/experience3d/GTF3d/${IsGtf}`);
  };

  const handleExplore3dExe = () => {
    if (!window.api) {
      console.error(
        "window.api is undefined! Check if preload is correctly loaded.",
      );
      return;
    }

    if (!window.api.openExe) {
      console.error(
        "window.api.openExe is not defined! Check if it's exposed in preload.",
      );
      return;
    }

    // console.log("Calling window.api.openExe...");
    window.api.openExe("f35.exe");
  };
  const handleExplore3d = (video3d) => {
    handleImageClick(0, video3d);
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
    // style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={allData?.bgvideo ?? videoUrl} type="video/mp4" />
        Your browser does not support the video tag.

      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]" />

      <div className="max-w-[1920px] w-[95%] m-auto relative">
        <div className="h-[146px] flex justify-between  items-center">
          <Logo type="white" />
          <div className="flex justify-center items-center gap-4">
            <p className="text-2xl font-[900]">
              <span className="text-white pr-2">INDIA</span>
              <span className=" text-[#E11C37]">INTERACTIVE</span>
            </p>
            <div
              onClick={engineParamData ? onBack : mapData ? onMapPage : onClose}
              id="app_close"
              className="cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#918F8F] flex justify-center items-center text-white font-bold"
            >
              <img src={Close} alt="close_arrow" />
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 h-[calc(100vh-180px)] "
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 78%, 92% 100%, 8% 100%, 0% 78%)",
          }}
        >
          <div className=" border border-[#D91027]">
            <div className="relative overflow-hidden h-[50%] z-20 bg-white">
          {imageLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse z-10" />
      )}
              <img
                src={allData?.logo || engineParamData?.logo || machine1}
                     onLoad={() => setImageLoading(false)}
                className="w-full h-full object-contain absolute top-0 left-0"
                 style={{ opacity: imageLoading ? 0 : 1 }}
                alt=""
              />
            </div>

            <div className="bg-[#D91027] h-[50%] relative ">
              {!engineParamSlug &&
                (allData?.title === "F135" ||
                  allData?.logoTitle === "PT6E" ||
                  allData?.title === "PW800" ||
                  allData?.title === "PW127XT" ||
                  allData?.title === "GTF Engine Family") && (
                  <>
                    <div className="top-0 absolute w-[170px] h-[170px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <img
                        ref={rotateImgRef}
                        src={rotateImg}
                        alt=""
                        className=" object-cover"
                      />
                    </div>

                    <div
                      onClick={() =>
                        allData?.title === "F135"
                          ? handleExplore3dExe()
                          : allData?.title === "GTF Engine Family"
                            ? handleGtf()
                            : handleExplore3d(allData.video3d)
                      }
                      className="w-[150px] m-auto relative"
                    >
                      <div className="absolute bg-[#404040] border-[#D91027] border-[10px] w-[130px] h-[130px] rounded-full  transform  -translate-y-1/2 left-1/2 -translate-x-1/2 text-center z-20  flex justify-center items-center">
                        <p className="w-[65%] text-[17px] text-[#ffff] font-[600]">
                          Explore 3D
                        </p>
                      </div>
                    </div>
                  </>
                )}

              <div
                className="bg-[#393636] relative w-full h-full pt-[100px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 100%, 16% 100%, 0% 56%)",
                }}
              >
                <div>
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
                      <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">
                        Gallery
                      </p>
                      <div className="absolute -right-[88px] top-1/2 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="88"
                          height="19"
                          fill="none"
                          viewBox="0 0 88 19"
                        >
                          <path
                            stroke="#D91027"
                            d="M.5 1.25h75.75L87.5 18.5"
                          ></path>
                          <path
                            fill="#D91026"
                            d="M48.5 1.25h27.75L83 11l-3-.75-4.5-6.75H50.75z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="slider-section w-[90%] m-auto mt-5">
                    {!showSlider ? (
                      <div className="flex gap-4 justify-center">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <div
                              key={index}
                              className="w-48 h-[100px] bg-gray-300 animate-pulse rounded-md"
                            />
                          ))}
                      </div>
                    ) : (
                      <CommonSlideYearProduct
                        onImageClick={handleImageClick}
                        gallery={allData?.gallery || engineParamData?.gallery}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-[#FFFFFF]  overflow-y-hidden relative ${mapData ? "pl-[20px] pt-5" : ""}`}
          >
            <div className={`pt-2 ${mapData ? "" : "h-[calc(50%-40px)]"}`}>
              {mapData ? (
                <p className="text-[30px] font-[900] p-[1.9px] pl-4">
                  <span className="text-black ">{allData.header1}</span>{" "}
                  <span className="text-[#E11C37]">{allData.header2}</span>
                </p>
              ) : (
                <>
                  <div className="relative w-[55%] h-[108px]">
                    <div
                      className="absolute inset-0 bg-[#D91027] p-[1.9px]"
                      style={{
                        clipPath:
                          "polygon(100% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%, 0 0)",
                      }}
                    />
                    <div
                      className="relative bg-[#393637] h-full w-full px-5 py-3 flex items-center"
                      style={{
                        clipPath:
                          "polygon(100% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%, 0 0)",
                      }}
                    >
                      <h1 className="text-5xl font-bold text-white">
                        {allData?.title}
                      </h1>
                      {/* <p className="text-[#CE2028] font-medium pt-3">
                        {allData?.subTitle}
                      </p> */}
                    </div>
                  </div>
                </>
              )}

              {!mapData && (
                <div className="h-[1px] mt-2 w-full bg-[#e7e7e7b8]" />
              )}

              <div
                className={`grid grid-cols-[auto_1fr] gap-8  ml-5 mt-5 pb-2 w-[90%] relative ${mapData || allData?.variants?.length === 0 ? "" : "border-b"}`}
              >
                {!mapData && (
                  <div className="border-[1px] rounded-full shadow-[3px_7px_20px_10px_#6b646426] overflow-hidden  w-[80px] h-[80px] p-1">
                    <div className="overflow-hidden w-full h-full border-[1px] rounded-full">
                      <img
                        src={allData?.logo || gtf}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                )}

                <p
                  onScroll={handleScroll1}
                  ref={scrollableRef}
                  className={`text-[rgba(0, 0, 0, 0.7)] ${mapData ? "h-auto" : "h-[100px]"} ${!mapData && allData?.variants?.length > 0 ? "h-[100px]" : "h-auto"} no-scrollbar overflow-auto pr-2 max-w-[88%]`}
                >
                  {allData?.description}
                </p>
                {isScrollableOverflowing && (
                  <div className="bg-[#D9D9D9] w-0.5  right-0 top-0 h-[80%] translate-x-1/2 absolute">
                    <div
                      ref={redDot2Ref}
                      className=" w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
                    >
                      <div className="bg-red-600 rounded-full w-2 h-2" />
                    </div>
                  </div>
                )}
              </div>
              {mapData ? (
                <>
                  <div className="flex gap-[70px] ml-5 mt-5 items-center">
                    {allData?.variants && allData?.variants.length > 0 && (
                      <>
                        {allData?.variants.map((item, index) => {
                          return (
                            <div className="flex">
                              <div className="flex flex-col">
                                <h2 className="text-[35px] text-center mt-2  font-[800] text-[#CE2028]">
                                  {item.title}
                                </h2>
                                <p className="text-[13px] text-center mt-2 font-[700]">
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex gap-[30px] ml-5 mt-5 items-center">
                  {allData?.variants && allData?.variants.length > 0 && (
                    <>
                      <h2 className="text-[#CE2028] font-[700]">
                        Select Variant
                      </h2>

                      {allData?.variants.map((item, index) => {
                        return (
                          <div
                            className={` ${selectedVariant === index ? "border-2 border-[#D0D3D3] rounded" : "border-transparent"} flex flex-col justify-center items-center p-1`}
                            key={index}
                            onClick={() => handleVariantClick(index)}
                          >
                            <div className="border-[1px] rounded-full shadow-[3px_7px_20px_10px_#6b646426] overflow-hidden w-[50px] h-[50px] p-1 ">
                              <img
                                src={item.img}
                                alt=""
                                className="h-full w-full object-contain object-center"
                              />
                            </div>
                            <p className="text-[12px] text-center mt-2 ">
                              {item.title}
                            </p>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              )}
            </div>
            {mapData ? (
              <div className="ml-5 mt-5 relative overflow-hidden  h-[calc(100%-352px)] w-[86%]">
                {/* Tabs Navigation */}
                <div className="flex w-[92%]  overflow-hidden h-[40px]">
                  {tabsData?.map((tab, index) => {
                    return (
                      // <button
                      //   key={index}
                      //   onClick={() => setActiveTab(index)}
                      //   style={{
                      //     clipPath:
                      //       "polygon(10% 0%, 100% 0%, 100% 65%, 90% 100%, 0% 100%, 0% 35%)",
                      //   }}
                      //   className={`px-4 py-2 text-[0.7rem] font-semibold text-white max-w-[160px] whitespace-nowrap ${activeTab === index ? "bg-[#CE2028]" : ""
                      //     } transition duration-300`}
                      // >
                      //   {tab.title}
                      // </button>
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={` 
        w-[150px] text-[0.7rem] font-semibold text-white h-full px-4 py-2 leading-[12px]
        ${activeTab === index ? "bg-[#CE2028]" : "bg-[#918F8F]"} 
        transition duration-300
      `}
                        style={{
                          clipPath:
                            "polygon(10% 0%, 100% 0%, 100% 65%, 90% 100%, 0% 100%, 0% 35%)",
                          zIndex: activeTab === index ? 2 : 1,
                          transform: `translateX(${-(15 * index) + 1}px)`,
                        }}
                      >
                        {tab.title}
                      </button>
                    );
                  })}
                </div>

                {/* Tabs Content */}
                <div
                  ref={contentRef}
                  className="relative mt-4 h-[calc(100%-52px)] w-[86%] ml-[30px] no-scrollbar  overflow-auto"
                >
                  {tabsData[activeTab]?.content.map((item, idx) =>
                    typeof item === "string" ? (
                      <p key={idx} className="mb-2">
                        {item}
                      </p>
                    ) : (
                      <div
                        key={idx}
                        className={`flex ${"items-center border-b-[3px] "}  gap-[30px]  py-6`}
                      >
                        {isFleetData ? (
                          <>
                            <img
                              src={item.image || gtf}
                              alt=""
                              className="w-[60px] h-[60px] object-cover rounded-full"
                            />

                            <div className="flex-[2]">
                              <h2 className="text-[#363535] text-[1.1rem] font-[700]">
                                {item.content1.enginetext}
                              </h2>
                              <h2 className="text-[#CE2028] text-[1.4rem] font-[900]">
                                {item.content1.engineNumber}
                              </h2>

                              <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.8rem] ">
                                {item.content1.engineCraft}
                              </p>
                            </div>
                            <div className="flex-[1]">
                              <div className="rounded-full scale-[0.9]  w-[68px] h-[68px] shadow-[2px_4px_8px_6px_#b1afaf3d] z-40 relative p-[4px] bg-white  flex flex-col ">
                                <div className="border-[1px] w-full h-full rounded-full shadow-[1px_0px_4px_3px_#b1afaf3d] overflow-hidden">
                                  <img
                                    src={item.content2.image || gtf}
                                    alt=""
                                    className="w-full h-full object-cover rounded-full"
                                  />
                                </div>
                              </div>
                              {/* <img
                                    src={item.content2.image || gtf}
                                    alt=""
                                    className="w-[60px] h-[60px] object-cover rounded-full"
                                  /> */}

                              <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.8rem] pl-2 pt-2">
                                {item.content2.engineCraft}
                              </p>
                            </div>

                            <div className="flex-[2]">
                              {item.content3 && (
                                <>
                                  <div className="rounded-full scale-[0.9]  w-[68px] h-[68px] shadow-[2px_4px_8px_6px_#b1afaf3d] z-40 relative p-[4px] bg-white  flex flex-col ">
                                    <div className="border-[1px] w-full h-full rounded-full shadow-[1px_0px_4px_3px_#b1afaf3d] overflow-hidden">
                                      <img
                                        src={item.content3.image || gtf}
                                        alt=""
                                        className="w-full h-full object-cover rounded-full"
                                      />
                                    </div>
                                  </div>

                                  {/* <img
                                        src={item.content3.image || gtf}
                                        alt=""
                                        className="w-[60px] h-[60px] object-cover rounded-full"
                                      /> */}

                                  <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.8rem] pl-2 pt-2">
                                    {item.content3.engineCraft}
                                  </p>
                                </>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <img
                              src={item.image || gtf}
                              alt=""
                              className="w-[60px] h-[60px] object-cover rounded-full "
                            />

                            <div>
                              <h2 className="text-[#363535] text-[1.1rem] font-[700]">
                                {item.enginetext}
                              </h2>

                              <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem] ">
                                {item.description}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    ),
                  )}
                  {/* Custom Scrollbar Red Dot */}
                </div>
                {isOverflowing && (
                  <div className="bg-[#D9D9D9] w-0.5 right-3 top-[50px] h-[60%] translate-x-1/2 absolute">
                    <div
                      ref={redDotRef}
                      className="w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center"
                    >
                      <div className="bg-red-600 rounded-full w-2.5 h-2.5" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="ml-5  relative overflow-hidden  h-[52%] w-[86%]">
                {/* Tabs Navigation */}
                <div className="flex w-[92%]   overflow-hidden h-[40px]">
                  {tabsData.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTab(index);
                        setIsExpanded(null);
                      }}
                      className={`
        w-[150px] text-[0.7rem] font-semibold text-white h-full px-4 py-2 
        ${activeTab === index ? "bg-[#CE2028]" : "bg-[#918F8F]"} 
        transition duration-300
      `}
                      style={{
                        clipPath:
                          "polygon(10% 0%, 100% 0%, 100% 65%, 90% 100%, 0% 100%, 0% 35%)",
                        zIndex: activeTab === index ? 2 : 1,
                        transform: `translateX(${-(15 * index) + 1}px)`,
                      }}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Tabs Content */}
                <div
                  ref={contentRef}
                  className="relative mt-4 h-[calc(100%-52px)] w-[86%] pl-[30px] pb-[20px] no-scrollbar  overflow-auto"
                >
                  {tabsData[activeTab]?.content.map((item, idx) =>
                    typeof item === "string" ? (
                      <p key={idx} className="mb-2">
                        {item}
                      </p>
                    ) : (
                      <div
                        key={idx}
                        className={`flex ${tabsData[activeTab]?.title === "Specifications" ? "flex items-center border-b" : tabsData[activeTab]?.title === "History" ? "grid grid-cols-[1fr_4fr]" : tabsData[activeTab]?.title === "Customers" ? "flex items-center border-b" : "grid grid-cols-[1fr_2fr_4fr] border-b"}  gap-[30px]  py-2`}
                      >
                        {tabsData[activeTab]?.title !== "History" && (
                          <img
                            src={item.image || gtf}
                            alt=""
                            className="w-[60px] h-[60px] object-cover rounded-full shadow-[3px_7px_20px_10px_#6b646426]"
                          />
                        )}
                        {/* {tabsData[activeTab].title === "Specifications" ? (<div>
                        <h2 className="font-bold text-[1.2rem]">{item.heading}</h2>
                        <ol className=" text-gray-600 list-disc text-[0.8rem] list-inside">
                          {item.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ol>
                      </div>) : ""} */}
                        {tabsData[activeTab]?.title === "Customers" ? (
                          <div>
                            <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem] font-[600]">
                              {item.name}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}

                        {tabsData[activeTab]?.title !== "Specifications" && (
                          <div>
                            <h2 className="text-[#CE2028] text-[1.2rem] font-[800]">
                              {item.enginetext}
                            </h2>
                          </div>
                        )}

                        {/* <div>
                        <h2 className="text-[#CE2028] text-[1.5rem] font-[800]">
                          {item.bypassRatio}
                        </h2>
                        <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem]">
                          Bypass ratio
                        </p>
                      </div> */}
                        {tabsData[activeTab]?.title === "Specifications" ? (
                          <div>
                            {/* <h2 className="text-[#CE2028] font-[800] text-[1.5rem]">
                          {item.fanDiameter}
                        </h2> */}
                            <p className="text-[rgba(0, 0, 0, 0.7)] text-[0.9rem] font-[600]">
                              {item.description}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                        {tabsData[activeTab]?.title !== "Specifications" &&
                          tabsData[activeTab]?.title !== "Customers" ? (
                          <div>
                            {item.description && (
                              <p className="text-[0.8rem]">
                                {item.description.length <= 200 ||
                                  isExpanded === idx
                                  ? item.description
                                  : `${item.description.slice(0, 200)}...`}

                                {item.description.length > 200 && (
                                  <span
                                    className="text-[#CE2028] text-[0.7rem] font-medium cursor-pointer block"
                                    onClick={() => toggleDescription(idx)}
                                  >
                                    {isExpanded === idx
                                      ? "Tap to collapse"
                                      : "Tap for more"}
                                  </span>
                                )}
                              </p>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ),
                  )}
                  {/* Custom Scrollbar Red Dot */}
                </div>
                {isOverflowing && (
                  <div className="bg-[#D9D9D9] w-0.5 right-3 top-[50px] h-[60%] translate-x-1/2 absolute">
                    <div
                      ref={redDotRef}

                      className="w-5 h-5 bg-[#D9D9D9] rounded-full absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center cursor-grab active:cursor-grabbing"
                    >
                      <div className="bg-red-600 rounded-full w-2.5 h-2.5" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          className="absolute grid grid-cols-2 bottom-[0px] right-[10px] z-40"
          style={{
            clipPath:
              "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
          }}
        >
          <div
            onClick={engineParamData ? onBack : mapData ? onMapPage : onClose}
            className="bg-[#918F8F] text-white flex justify-center items-center px-3 py-1 gap-1 hover:bg-[#656363]"
          >
            <BiSolidChevronLeft className="h-full w-[25px]" />
            <p className="text-[1rem]">Previous</p>
          </div>

          <Link to={`/home/${homeId}`}>
            <div
              onClick={""}
              className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-1 gap-2 hover:bg-red-800"
            >
              <BiHomeAlt2 className="h-full w-[25px]" />
              <p className="text-[1rem]">Home</p>
            </div>
          </Link>
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

export default ProductDetails;
