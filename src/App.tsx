import React from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

var geometry = new THREE.PlaneGeometry( 150, 150, 64, 64 );

ground = new THREE.Mesh(
  geometry,
  new THREE.MeshLambertMaterial( { map: map1 } )
);

function App() {
  return (
    <div id="canvas-container">
      <Canvas>

      </Canvas>
    </div>
  );
}

export default App;
