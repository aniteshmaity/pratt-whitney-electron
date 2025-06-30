import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from 'three';

export default function Label({ cameraPosRef,cameraRef }) {
  console.log("showinfo",cameraRef);
  const prevVisibility = useRef({}); 
  const { camera } = useThree();

    // if (!partPositions ) return null;

    // useEffect(() => {
    //   console.log("🔁 useEffect triggered");
    //   console.log("✅ showInfo:", showInfo);
    //   console.log("✅ partPositions:", partPositions);
    // }, [showInfo, partPositions]);
  // Define all labels with their corresponding mesh positions
  const labels = useMemo(() => [
    { name: 'LP Fan Rotor', position: new THREE.Vector3(-0.5,0,0.5), offset: new THREE.Vector3(0, 0, 0) },
    { name: 'Inlet Cone', position: new THREE.Vector3(0,0,1), offset: new THREE.Vector3(0, 0, 0) },
    { name: 'Fan Case', position: new THREE.Vector3(-0.4,0,0), offset: new THREE.Vector3(-0.3, 0.7, 0) },
    { name: 'Oil Tank', position: new THREE.Vector3(0,-0.8,0), offset: new THREE.Vector3(0, 0, 0) },
  ], []);
  const visibilityRef = useRef({});
  const labelRefs = useRef({});

  // useFrame(() => {
  //   const camera = cameraRef.current;
  //   if (!camera) return;

  //   const camDir = new THREE.Vector3();
  //   camera.getWorldDirection(camDir);

  //   labels.forEach(({ name, position, offset }) => {
  //     const worldPos = position.clone().add(offset);
  //     const toPoint = worldPos.clone().sub(camera.position).normalize();
  //     const isVisible = camDir.dot(toPoint) > 0;

  //     if (visibilityRef.current[name] !== isVisible) {
  //       visibilityRef.current[name] = isVisible;
  //       const el = labelRefs.current[name];
  //       if (el) el.style.display = isVisible ? 'block' : 'none';
  //       console.log(`[${name}] is now ${isVisible ? 'visible' : 'hidden'}`);
  //     }
  //   });
  // });
  return (
    <>
      {labels.map(({ name, position, offset }) => {

               // Apply the offset to the position
               const offsetPosition = position.clone().add(offset);


        return (
          <Html
            key={name}
            ref={(el) => (labelRefs.current[name] = el?.element)}
            position={offsetPosition}
            center
        
            style={{ pointerEvents: "none" }}
          >
            {/* Label Background with clip-path */}
            <div
              className="bg-[#5d0a0a] p-[2px] w-[130px] h-[40px]"
              style={{
                clipPath:
                  "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
              }}
            >
              {/* Custom Content Inside Label */}
              <div className=" bg-[#1d1c1c] h-full flex justify-center items-center" style={{
          clipPath:
            "polygon(5% 0%, 100% 0%, 100% 74%, 95% 100%, 0% 100%, 0% 24%)",
        }}>
           <p className="text-white">{name}</p>
              </div>
            </div>

            {/* Label Content with clip-path */}
          
          </Html>
        );
      })}
    </>
  );
}