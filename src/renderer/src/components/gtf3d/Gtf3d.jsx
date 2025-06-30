import React, { useEffect, useRef, useState } from 'react'
import { Center, Html, Line, RoundedBox, Text, useGLTF } from '@react-three/drei';

import glb3d from "../../assets/3dFile/GTF_Engine_static.glb"
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Label from './Label';

export function Gtf3d(props) {
  console.log("props", props);
  const { showInfo } = props

  console.log("🔹 Gtf3d component rendering");
  console.log("frint", glb3d);
  const { nodes, materials, scene, camera } = useGLTF(glb3d);
  console.log("nodes", nodes);
  console.log("material", materials);
  const [selectedPart, setSelectedPart] = useState(null);
  const [partPositions, setPartPositions] = useState({});
  console.log("selected-part", partPositions);

  // Handle click on a mesh
  const handleMeshClick = (name) => {
    setSelectedPart(name);
  };
  const rotationGroup = useRef();
  const turbine11Ref = useRef()
  const turbine12Ref = useRef()
  const turbine13Ref = useRef()
  const gtf1Ref = useRef();
  const gtf2Ref = useRef();
  const gtf3Ref = useRef();
  const positionsCaptured = useRef(false);
  useFrame(() => {

    // if (rotationGroup.current) {
    //   rotationGroup.current.rotation.y += 0.008; // adjust speed here
    // }
    turbine11Ref.current.rotation.y -= 0.02
    turbine12Ref.current.rotation.y -= 0.02
    turbine13Ref.current.rotation.y -= 0.02
  })

  //  const handleClick = (e) => {
  //   e.stopPropagation(); // Prevent bubbling
  //   const partName = e.object.name;
  //   setSelectedPart(partName);
  //   console.log("Clicked on:", partName);
  // };
  useFrame(() => {
    if (!positionsCaptured.current) {
      const positions = {};

      const getWorldPosition = (ref) => {
        if (!ref.current) return null;
        const position = new THREE.Vector3();

        ref.current.getWorldPosition(position);
        return position;
      };

      positions['GTF-1'] = getWorldPosition(gtf1Ref);
      positions['GTF-2'] = getWorldPosition(gtf2Ref);
      positions['GTF-3'] = getWorldPosition(gtf3Ref);
      positions['Turbine-11'] = getWorldPosition(turbine11Ref);
      positions['Turbine-12'] = getWorldPosition(turbine12Ref);
      positions['Turbine-13'] = getWorldPosition(turbine13Ref);

      console.log('Calculated Positions:', positions);
      const validPositions = Object.fromEntries(
        Object.entries(positions).filter(([_, pos]) => pos !== null)
      );

      if (Object.keys(validPositions).length > 0) {
        setPartPositions(validPositions);
        positionsCaptured.current = true; // Mark as captured
      }
    }
  });





  // useFrame(() => {
  //   if (rotationGroup.current) {
  //     rotationGroup.current.rotation.y += 0.001; // adjust speed here
  //   }
  // });
  // useEffect(() => {
  //   scene.traverse((child) => {
  //     if (child.isMesh) {
  //       child.castShadow = true
  //       child.receiveShadow = true

  //       // Convert to light-reactive material if needed
  //       if (child.material && !(child.material instanceof THREE.MeshStandardMaterial)) {
  //         const oldMat = child.material
  //         child.material = new THREE.MeshStandardMaterial({
  //           color: oldMat.color || new THREE.Color('white'),
  //           metalness: 0.3,
  //           roughness: 0.6,
  //         })
  //       }
  //     }
  //   })
  // }, [scene])
  console.log("Material types:")
  Object.entries(materials).forEach(([key, mat]) => {
    console.log(`${key}: ${mat.type}`)
  })
  const text = "Inlet Cone"
  const padding = 0.1
  const fontSize = 0.05

  const textLength = text.length
  const width = textLength * fontSize * 0.6 + padding
  const height = fontSize + padding


  return (
    <>
      <Center {...props} dispose={null}>
        <group ref={rotationGroup} position={[0, 0, 1.857]} rotation={[0, 0, -Math.PI]} scale={[-1, -1, 1]}>
          <group rotation={[-Math.PI / 2, 0.262, 0]}>
          
          <mesh
              ref={gtf1Ref}
              castShadow
              receiveShadow
              geometry={nodes['GTF-1'].geometry}
              material={materials['1']}

            />  
         

           
            <mesh
              ref={gtf2Ref}
              castShadow
              receiveShadow
              geometry={nodes['GTF-2'].geometry}
              material={materials['2']}
            />
            <mesh
              ref={gtf3Ref}
              castShadow
              receiveShadow
              geometry={nodes['GTF-3'].geometry}
              material={materials['3']}

            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['GTF-4'].geometry}
              material={materials['4']}

            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['GTF-5'].geometry}
              material={materials['5']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['GTF-6'].geometry}
              material={materials['6']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['GTF-7'].geometry}
              material={materials['7']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['GTF-8'].geometry}
              material={materials['8']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['GTF-9'].geometry}
              material={materials['9']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['GTF-10'].geometry}
              material={materials['10']}
            />


            <group ref={turbine11Ref} position={nodes['Turbine-11'].position}>
              <mesh geometry={nodes['Turbine-11'].geometry} material={materials['11']} castShadow receiveShadow />

            </group>

            <group ref={turbine12Ref} position={nodes['Turbine-12'].position}>
              <mesh geometry={nodes['Turbine-12'].geometry} material={materials['12']} castShadow receiveShadow />

            </group>

            <group ref={turbine13Ref} position={nodes['Turbine-13'].position}>
              <mesh geometry={nodes['Turbine-13'].geometry} material={materials['13']} castShadow receiveShadow />
              {/* <Text
                position={[1, -1, -1]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
                  unicodeGlyphs={false} 
              >
                Turbine-11
              </Text> */}
            </group>
          </group>
        </group>
      </Center>
      {/* {
    showInfo && (
      <Label partPositions={partPositions} />
    )
      
  } */}
    </>
  )
}


useGLTF.preload(glb3d)