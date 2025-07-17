import { Line, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Shape, ShapeGeometry } from "three";

export default function LabelLine({
  position,
  rotation,
  lineLength = 1,
  label,
  target,
  lineWidth = 2,
  startOffset = [0, 0.09, 0],
}) {
  const { camera } = useThree();
  const textRef = useRef();
  const lineRef = useRef();
  const ConeRef = useRef();

  useFrame(() => {
    if (!textRef.current) return;

    const worldDir = new THREE.Vector3();
    textRef.current.getWorldDirection(worldDir);

    const camDir = new THREE.Vector3();
    camDir
      .subVectors(
        camera.position,
        textRef.current.getWorldPosition(new THREE.Vector3()),
      )
      .normalize();

    const dot = worldDir.dot(camDir);
    const visible = dot > 0;

    // Update opacity for both line and text
    if (textRef.current.material) {
      textRef.current.material.transparent = true;
      textRef.current.material.opacity = visible ? 1 : 0;
    }

    if (lineRef.current && lineRef.current.material) {
      lineRef.current.material.transparent = true;
      lineRef.current.material.opacity = visible ? 1 : 0;
    }
    if (ConeRef.current && ConeRef.current.material) {
      ConeRef.current.material.transparent = true;
      ConeRef.current.material.opacity = visible ? 1 : 0;
    }
  });

  const arrowRotation = useMemo(() => {
    const from = new THREE.Vector3(...position);
    const to = new THREE.Vector3(...target);
    const direction = to.clone().sub(from).normalize();

    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0), // Default up direction of cone
      direction,
    );

    const euler = new THREE.Euler().setFromQuaternion(quaternion);
    return [euler.x, euler.y, euler.z];
  }, [position, target]);

  return (
    <group position={position} rotation={rotation}>
      {/* Line connecting the label */}
      <Line
        ref={lineRef}
        points={[
          new THREE.Vector3(
            position[0] + startOffset[0],
            position[1] + startOffset[1],
            position[2] + startOffset[2],
          ),
          new THREE.Vector3(...target),
        ]}
        color="#710b0b"
        lineWidth={lineWidth}

      />

      <mesh
        position={target}
        rotation={arrowRotation}
        scale={[0.4, 0.4, 0.4]}
        ref={ConeRef} // tweak for size
      >
        <coneGeometry args={[0.05, 0.2, 8]} />
        <meshStandardMaterial color="#710b0b" />
      </mesh>
      <mesh position={position} rotation={rotation} scale={[0.7, 0.2, 1]}>
        <planeGeometry />
        <meshStandardMaterial color="#710b0b"
          renderOrder={2} transparent
          opacity={1}
          depthTest={true}
          depthWrite={true} />
        {/* <primitive object={shapeGeometry} /> */}
      </mesh>
      {/* Background for the label */}
      <mesh
        position={[position[0], position[1], position[2] + 0.001]}
        rotation={rotation}
        renderOrder={3}
        scale={[0.68, 0.18, 1]}
      >
        <planeGeometry />

        <meshStandardMaterial color="#1d1c1c" opacity={1}

          transparent
          depthTest={true}
          depthWrite={false}
          polygonOffset={true}             //  enables offset
          polygonOffsetFactor={-1}         //  pushes it back slightly
          polygonOffsetUnits={-1}
        />

      </mesh>
      {/* 3D Text Label */}
      <Text
        ref={textRef}
        position={[position[0], position[1], position[2] + 0.01]}
        rotation={rotation} // Adjust the position for where the label should appear
        fontSize={0.054} // Adjust the font size
        color="white" // Text color
        anchorX="center" // Anchor in the center
        anchorY="middle" // Anchor in the middle
        maxWidth={0.5} //  limits width and wraps text
        lineHeight={1.1} // optional, adjust for vertical spacing
        textAlign="center"
        depthTest={true}          // disables depth buffer fight
        depthWrite={false}
        polygonOffset={true}              //  avoid z-fighting
        polygonOffsetFactor={-2}
        polygonOffsetUnits={-2}
        transparent
        renderOrder={4}
      >
        {label} {/* The label text */}
      </Text>
    </group>
  );
}
