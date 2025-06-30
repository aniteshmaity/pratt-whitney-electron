import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Gtf3d } from '../../components/gtf3d/Gtf3d'
import Loader from '../../components/Loader'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Html, } from '@react-three/drei'
import studioEnv from "../../assets/textures/studio_small_03_1k.hdr";
import Close from "../../assets/images/close_arrow.svg";
import { Link, useLocation, useParams } from 'react-router-dom'
import Label from '../../components/gtf3d/Label'
import * as THREE from 'three';
import { GrPowerReset } from "react-icons/gr";
import LabelLine from '../../components/gtf3d/LabelLine'
import labelPositions from "../../components/gtf3d/data";
import { useNavigate } from 'react-router-dom';
import { productEngine } from '../../components/data/productEngineData';
import SvgBtn from '../../components/buttons/SvgBtn';
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
const CameraUpdater = ({ controlsRef, cameraPosRef,cameraRef }) => {
  
  const { camera } = useThree()

  useFrame(() => {
    if (!controlsRef.current) return
    // Update ref (no state = no re-render)
    cameraPosRef.current = camera.position.toArray();
    cameraRef.current = camera;
  //   console.log("Camera position:", cameraPosRef.current);
  // console.log("Camera direction:", cameraRef.current);

  })

  return null
}

const GTF3d = () => {
    const location = useLocation();
     const { Isgtf } = useParams();

     console.log("isgif",Isgtf);
  const [showInfo, setShowInfo] = useState(false);
  const [showList, setShowList] = useState(false);

  console.log("shoelis",showInfo);
  console.log("shoelis2",showList);
  const cameraRef = useRef();
  const controlsRef = useRef();
  const cameraPosRef = useRef([6, 0.5, 5])
  const controls2Ref = useRef();
  const [cameraPos, setCameraPos] = useState([6, 0.5, 5])
  const [autoRotate, setAutoRotate] = useState(true); 
  const pageId = 1;
  // function CameraSetup() {
  //   const { camera } = useThree();
  
  //   useEffect(() => {
  //     const focalLength = 50; // mm
  //     const sensorHeight = 24; // mm (full-frame)
  //     const fov = 2 * Math.atan((sensorHeight / (2 * focalLength))) * (180 / Math.PI);
  
  //     camera.fov = fov; // ≈ 27 degrees
  //     camera.updateProjectionMatrix();
  
  //     // Set initial position
  //     camera.position.set(5, 5, 5);
  //     camera.lookAt(0, 0, 0);
  //   }, [camera]);
  
  //   return null;
  // }
const navigate = useNavigate();
const engineGTFContent = productEngine[4]?.engines[0]?.details
console.log("engineGTFContent",engineGTFContent);
  const goToGTF = (() => {
   navigate("/products/productdetails", { state: { engineData: engineGTFContent,gtf3dSlug: true } });
  })
   const goToGTF2 = (() => {
   navigate("/products/productdetails", { state: { engineData: engineGTFContent} });
  })
  
  const focalLength = 50; // mm
  const baseDistance = focalLength / 4;
const id = 1;
  return (
    <div className="flex-1 h-screen " style={{
      background: "linear-gradient(to top right, #142e46 0%, #142e46 20% , #0d79a5 100%)"
    }}>

      {
        Isgtf ? (
       
        <button
onClick={goToGTF2}
          className="z-[99999] cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#828080] flex justify-center items-center text-white font-bold absolute top-[55px] right-[60px]"
        >
          <img src={Close} alt="close_arrow" />
        </button>
  
        ) : (
           <Link to={`/home/${id}`}>
        <button

          className="z-[99999] cursor-pointer close_clip_path w-[44px] h-[32px] bg-[#828080] flex justify-center items-center text-white font-bold absolute top-[55px] right-[60px]"
        >
          <img src={Close} alt="close_arrow" />
        </button>
      </Link>
        )
      }
        
      <Canvas  camera={{
    fov: 27, // ≈ 50mm focal length
    position: [6, 0.5, 5], 
    near: 0.1,
    far: 1000
  }}
  >
{/* <Environment files={studioEnv} background={false} /> */}
<ambientLight intensity={0.3} />
<pointLight position={[5, 0, 0]} intensity={100} />    {/* Right side */}
<pointLight position={[-5, 0, 0]} intensity={100} />   {/* Left side */}
<pointLight position={[0, 0, 5]} intensity={100} />    {/* Front */}
<pointLight position={[0, 0, -5]} intensity={100} />   {/* Back */}
<pointLight position={[0, 5, 0]} intensity={100} /> 


      {/* <CameraSetup />  */}
        {/* <Environment files={studioEnv} /> */}
        <Suspense fallback={<Loader />}>
          <Gtf3d showInfo={showInfo} />
          {/* {showInfo && <Label cameraPos={cameraPos}   cameraRef={cameraRef}  />} */}
        </Suspense>
        <CameraUpdater cameraRef={cameraRef} controlsRef={controlsRef} cameraPosRef={cameraPosRef} />

         {/* <LabelLineDebugger name="Turbine-11" initialPosition={[1, 1, 1]} /> */}
         {showInfo && Object.entries(labelPositions).map(([key, data]) => (
            <LabelLine
              key={key}
              position={data.position}
              rotation={data.rotation}
              target={data.target}
              label={data.label}
              lineLength={1}
              startOffset={data.startOffset}
            />
          ))}
        <  OrbitControls enableZoom={true}   minDistance={8 * 0.60}// Minimum zoom distance
        maxDistance={15 * 0.9}
          enablePan={true} enableRotate={true}  target={[0, 0, 0]}  ref={controlsRef} autoRotate={autoRotate} rotateSpeed={0.6} />
          {/* <Label /> */}
          {/* autoRotate={true} rotateSpeed={0.6} */}
      </Canvas>
       <div className='absolute left-12 bottom-24'  onClick={goToGTF}>
         <SvgBtn  text={`${"Explore GTF Engine"}`} height="40px" width="230px"  textClass="font-frutiger text-[17px] text-bold" showArrow />
       </div>

<div className="absolute grid grid-cols-2 bottom-8  z-40 left-12"  style={{
                  clipPath:
                    "polygon(6% 0%, 100% 0%, 100% 64%, 94% 100%, 0% 100%, 0% 34%)",
                }}>
                   <Link to={`/home/${pageId}`}>
                  <div className="bg-[#918F8F] text-white flex justify-center items-center px-3 py-2 gap-1 hover:bg-[#656363]">
                    <BiSolidChevronLeft className="h-full w-[20px]" />
                    <p className="text-[1rem]">Previous</p>
                  </div></Link>
                
                    <Link to={`/home/${pageId}`}>
                 <div onClick={""} className="bg-[#CE2028] text-white flex justify-center items-center px-3 py-2 gap-2 hover:bg-red-800">
                    <BiHomeAlt2 className="h-full w-[20px]" />
                    <p className="text-[1rem]">Home</p>
                  </div>
                  </Link>
                </div>

        {/* <button
          className="absolute bottom-[22%] right-[60px] z-10 text-center bg-[#710b0b] text-white p-[2px]  w-[150px] rounded shadow-md transition"
         onClick={goToGTF}
          style={{
            clipPath:
              "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
          }}
        >
        <div className='w-full h-full pl-4 pr-6 py-2 flex justify-center items-center gap-2 bg-[#040404]'
        style={{
          clipPath:
            "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
        }} >
          GTF Engine
       
        </div>

          
        </button> */}
      <button
          className="absolute bottom-[10%] right-[60px] z-10 text-center bg-[#710b0b]   text-white p-[2px]  w-[150px] rounded shadow-md transition"
          onClick={() => setAutoRotate((prev) => !prev)}
          style={{
            clipPath:
              "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
          }}
        >
        <div className='w-full h-full pl-4 pr-6 py-2 bg-[#1d1c1c]'
        style={{
          clipPath:
            "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
        }} >
           {autoRotate ? (
    <>
      {/* Pause Icon */}
     <div className='flex justify-center items-center gap-2'>
     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
      </svg>
      Pause
     </div>
    </>
  ) : (
    <>
      {/* Play Icon */}
      <div className='flex justify-center items-center gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="currentColor" viewBox="0 0 16 16">
        <path d="M10.804 8.697l-5.5 3.5A.5.5 0 0 1 5 11.803V4.197a.5.5 0 0 1 .804-.394l5.5 3.5a.5.5 0 0 1 0 .894z"/>
      </svg>
      Play
      </div>
    </>
  )}
   
        </div>

          
        </button>
     
      <button
          className="absolute bottom-[16%] right-[60px] z-10 text-center bg-[#710b0b] text-white p-[2px]  w-[150px] rounded shadow-md transition"
          onClick={() => {
            setShowInfo((prevInfo) => {
              setShowList((prevList) => {
                if (prevInfo === false) {
                  // If showInfo was false and we're about to make it true, don't toggle showList
                  return !prevList;
                }
                if(prevInfo && prevList === true){
                  return !prevList;
                }
                // Otherwise, toggle showList
                return prevList;
              });
              return !prevInfo;
            });
          }}
       
          style={{
            clipPath:
              "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
          }}
        >
        <div className='w-full h-full pl-4 pr-6 py-2  bg-[#1d1c1c]'
        style={{
          clipPath:
            "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
        }} >
          {!showInfo ? " Show Info" : "Hide Info"}
   
        </div>

          
        </button>
        <button
          className="absolute bottom-[4%] right-[60px] z-10 text-center bg-[#710b0b] text-white p-[2px]  w-[150px] rounded shadow-md transition"
          onClick={() => {
            setShowInfo(false)
          setShowList(false)
            controlsRef.current.reset(); 
    controlsRef.current.object.position.set(6, 0.5, 5);
    controlsRef.current.object.lookAt(0, 0, 0);
          }}
          style={{
            clipPath:
              "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
          }}
        >
        <div className='w-full h-full pl-4 pr-6 py-2 flex justify-center items-center gap-2 bg-[#040404]'
        style={{
          clipPath:
            "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
        }} >
          Reset
          <GrPowerReset />
        </div>

          
        </button>

        {(showInfo && showList) && (
        <div className="w-[20%] bg-[#1d1c1c] p-6 overflow-y-auto absolute right-[60px] bottom-[25%] text-white">
          <button
   onClick={() => setShowList(false)}
className="z-[99999] cursor-pointer close_clip_path w-[34px] h-[26px] bg-[#8280804e] flex justify-center items-center text-white font-bold absolute top-[10px] right-[10px]"
>
<img src={Close} alt="close_arrow" className='w-[14px]' />
</button>
          <h2 className="relative text-2xl font-bold mb-4 pl-2  before:absolute before:left-[-8px] before:top-[4px] before:bottom-0 before:w-1 before:h-[40%] before:bg-red-600">Pratt &  Whitney Advantage™ Engine</h2>
          <ul className='list-disc pl-[35px]'>
            <li>Offers up to 17% lower CO₂ emissions than prior engines like V2500</li>
            <li>Features improved takeoff thrust at sea level and higher takeoff thrusts</li>
            <li>Successfully tested on 100% sustainable aviation fuel</li>
            <li>Full intermix and interchange</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default GTF3d