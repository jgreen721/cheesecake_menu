"use client"
import React, { useEffect,useState } from 'react'
import {Canvas} from "@react-three/fiber"
import {useGLTF,Float} from "@react-three/drei"
// import Image from "next/image"
// import {Spinner} from "@/mini-components"
// import dynamic from 'next/dynamic'

const Scene = ()=>{
    let img = useGLTF("/cheesecake.glb");
    let img2 = useGLTF("/chocolate_cake.glb");
   
    const [img1Location, setImg1Location] = useState([-2,-2,-2])
    const [img2Location,setImg2Location] = useState([3,0,0])


    useEffect(()=>{
      if(innerWidth < 725){
setImg2Location([1,1.5,0])
setImg1Location([0,-4,-2])
      }
    })


 
  return img?.scene ? (
    <Canvas style={{height:"100%"}}>
      <color attach="background" args={["transparent"]}/>
      <ambientLight intensity={.8}/>
      <pointLight intensity={.7}/>
      <Float>
      <primitive  rotation={[Math.PI * .2,-Math.PI * .6,0]} scale={.045} position={img1Location} object={img.scene}/>
      </Float>
      <Float>
      <primitive  rotation={[Math.PI * .4,-Math.PI * .6,0]} scale={.045} position={img2Location} object={img2.scene}/>
      </Float>
    </Canvas>
  ) : <h1>Loading assets!!!</h1>
}

export default Scene