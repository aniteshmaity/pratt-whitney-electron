import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export default function Scene() {
  return (
    <Canvas>
      
      {/* <AircraftModel /> */}
      <Environment preset="sunset" background  />
    </Canvas>
  );
}
