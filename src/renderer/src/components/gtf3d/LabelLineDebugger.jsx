// components/gtf3d/LabelLineDebugger.jsx
import React, { useEffect, useRef } from 'react';
import { Line, Text } from '@react-three/drei';
import { useControls } from 'leva';
import * as THREE from 'three';

function LabelLineDebugger({ name, initialPosition = [0, 0, 0] }) {
  const ref = useRef();

  const { x, y, z, rotationX, rotationY, rotationZ } = useControls(name, {
    x: { value: initialPosition[0], min: -10, max: 10, step: 0.1 },
    y: { value: initialPosition[1], min: -10, max: 10, step: 0.1 },
    z: { value: initialPosition[2], min: -10, max: 10, step: 0.1 },
    rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(rotationX, rotationY, rotationZ);
    }
  }, [rotationX, rotationY, rotationZ]);

  return (
    <group position={[x, y, z]} ref={ref}>
      <Line
        points={[[0, 0, 0], [0, 0, 0]]}
        color="red"
        lineWidth={2}
      />
      <Text position={[0, 1.2, 0]} fontSize={0.3} color="white">
        {name}
      </Text>
    </group>
  );
}
export default LabelLineDebugger;