import React, { useEffect,useState } from 'react'
import {Canvas} from "@react-three/fiber"
import {useGLTF,Float} from "@react-three/drei"
import Image from "next/image"


const Scene = ()=>{
    const img = useGLTF("/cheesecake.glb")
    const img2 = useGLTF("/chocolate_cake.glb")
    const [img1Location, setImg1Location] = useState([-2,-2,-2])
    const [img2Location,setImg2Location] = useState([3,0,0])


    useEffect(()=>{
      if(innerWidth < 725){
setImg2Location([1,1.5,0])
setImg1Location([0,-4,-2])
      }
    })

  return (
    <Canvas style={{height:"100%"}}>
      <color attach="background" args={["black"]}/>
      <ambientLight intensity={.8}/>
      <pointLight intensity={.7}/>
      <Float>
      <primitive  rotation={[Math.PI * .2,-Math.PI * .6,0]} scale={.045} position={img1Location} object={img.scene}/>
      </Float>
      <Float>
      <primitive  rotation={[Math.PI * .4,-Math.PI * .6,0]} scale={.045} position={img2Location} object={img2.scene}/>
      </Float>
    </Canvas>
  )
}

const Experience = () => {
  return (
    <div className={`h-[700px] overflow-hidden relative`}>
      <Image className="absolute z-50 opacity-10 top-0 left-0" src="/bgexperience.jpeg" fill sizes="w-fill"/>
      <Scene/>
    </div>
  )
}

export default Experience