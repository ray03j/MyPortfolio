import { useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { Mesh } from "three";


type CubeProps = {
  position: [x:number, y:number, z:number];
} 

export const Cube: FC<CubeProps> = (props) => {
  const cubeRef = useRef<Mesh>(null)
  const [clicked, setClicked] = useState(false)

  useFrame(() => {
    const cube = cubeRef.current
    if (!cube) return;
    cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
  })
  return (
    <mesh {...props} ref={cubeRef} onClick={() => setClicked(!clicked)} scale={clicked ? 2: 1}>
      <boxBufferGeometry args={[0.5,0.5,0.5]} />
      <meshPhongMaterial color="gray" />
    </mesh>
  )
}