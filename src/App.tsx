import React from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import { Cube } from './Components/Cube';
import { OrbitControls } from '@react-three/drei';


function App() {
  return (
    <div id="canvas-container">
      <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [0, 0, 5]
          }}
      >
          
          <Cube position={[1, 1, 0]} />
          <Cube position={[-1, 1, 0]} />
          <Cube position={[1, -1, 0]} />
          <Cube position={[-1, -1, 0]} />
          <spotLight position={[10, 10, 10]} />
          <ambientLight args={[0xffffff]} intensity={0.2} />
          <OrbitControls />
        
      </Canvas>
    </div>
  );
}

export default App;
