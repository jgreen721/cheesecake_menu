import React from 'react'
import Image from "next/image"
import {Button} from "@/mini-components"
import {motion} from "framer-motion"
import { initialXScale,animateXScale } from '@/animations'
const Hero = () => {
  return (
    <motion.div initial={initialXScale} animate={animateXScale} transition={{type:"spring",delay:.5}}>
    <div id="hero" className="w-full h-[400px] relative">
      <Image fill src="/cheesecakehero.jpeg" priority sizes="100%" alt="img"/>
    </div>
    <div style={{background:'rgb(250,250,235)'}} className="flex flex-col items-center justify-center p-20 text-center">
    <h1 className="text-6xl text-champagne p-2">Cheesecake Rewards Is Here</h1>
    <div className="flex gap-4 w-full items-center justify-center mt-10">
    <Button text="Join Now" background="bgChampagne" color="text-white"/>
    <Button text="Learn More" background="bgWhite" color="text-gray-700"/>
 
    </div>
    </div>
    </motion.div>
  )
}

export default Hero