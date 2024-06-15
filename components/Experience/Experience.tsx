"use client"
import React, { useEffect,useState } from 'react'
import {Canvas} from "@react-three/fiber"
import {useGLTF,Float} from "@react-three/drei"
import Image from "next/image"
import {Spinner} from "@/mini-components"
import dynamic from 'next/dynamic'







const DynamicScene = dynamic(() => import('@/mini-components/Scene'), {
  ssr: false,
});


const Experience = () => {
  return (
    <div className={`h-[700px] overflow-hidden relative`}>
      <Image className="absolute z-50 opacity-10 top-0 left-0" src="/bgexperience.jpeg" fill sizes="w-fill" alt="img"/>
      <DynamicScene/>
      <div className="absolute w-full h-full left-0 top-0 border-4 flex items-center justify-center">
      <Spinner phrase="Friends Fun" size="small" duration="8s"/>
      <Spinner phrase="Factory Yum" size="medium" duration="14s"/>
      <Spinner phrase="Cheesecake" size="large" duration="21s"/>

      </div>
    </div>
  )
}

export default Experience