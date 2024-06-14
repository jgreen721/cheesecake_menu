import React from 'react'
import { motion } from 'framer-motion'
import { initialDrop,animateDrop } from '@/animations'
import {Arrow} from "@/mini-components"
import {useRef,useEffect} from "react"

const TopAd = () => {
  const bannerRef = useRef();

  useEffect(()=>{
  if(bannerRef.current){
  console.log(bannerRef?.current?.clientWidth)
  }
},[]);
  return (
    <motion.div initial={initialDrop} animate={animateDrop} className="bg-dark-champagne p-7 flex items-center justify-center drop-shadow-lg">
      <div id='parent-gallery' className="relative overflow-hidden w-full">
        <div style={{"--i":bannerRef?.current?.clientWidth}} id="full-gallery" className="w-full">
        <div ref={bannerRef} id="banner-1" className="flex items-center justify-center border-2 border-purple-500 opacity-0">
            <h3 className="no-wrap text-white font-bold text-xl drop-shadow-xl drop-shadow-yellow">Buy a $100 Gift Card online, Get a $20 Bonus Ecard! Available now through 6/28. *Additional terms and conditions apply</h3>
            <Arrow color="white" pseudo="champagne" scale='normal'/>
          </div>
           <div id="banner-2" className="flex items-center justify-center absolute left-0 top-0">
            <h3 className="no-wrap text-white font-bold text-xl drop-shadow-xl drop-shadow-yellow">Buy a $100 Gift Card online, Get a $20 Bonus Ecard! Available now through 6/28. *Additional terms and conditions apply</h3>
            <Arrow color="white" pseudo="champagne" scale='normal'/>
          </div> 
              <div id="banner-3" className="flex items-center justify-center absolute left-0 top-0 translate-x-[100%]">
                <h3 className="no-wrap text-white font-bold text-xl drop-shadow-xl drop-shadow-yellow">Buy a $100 Gift Card online, Get a $20 Bonus Ecard! Available now through 6/28. *Additional terms and conditions apply</h3>
                <Arrow color="white" pseudo="champagne" scale='normal'/>
            </div>    
          </div>
      </div>
    
    </motion.div>
  )
}

export default TopAd