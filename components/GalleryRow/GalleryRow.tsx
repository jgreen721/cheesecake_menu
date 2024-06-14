import React, {useEffect, useState,useRef} from 'react'
import { Arrow } from '@/mini-components'
import Image from "next/image"
import {motion, useMotionValue} from "framer-motion";
import { initialXScale,animateXScale } from '@/animations';


const GalleryRow = () => {
  const [counter,setCounter] = useState(0)
  const x = useMotionValue(0)

  const carouselRef = useRef();
  const items =[
    {
      "id": 1,
      "title": "Hosting Parties",
      "blurb": "Celebrate your special occasions with us! We offer tailored party packages for birthdays, anniversaries, and corporate events. Enjoy our delectable menu in a vibrant setting.",
      "img":"/gallery/gallery1.jpeg"
    },
    {
      "id": 2,
      "title": "Gift Certificates",
      "blurb": "Looking for the perfect gift? Our gift certificates are ideal for friends and family who love great food and a fantastic dining experience. Purchase online or in-store.",
      "img":"/gallery/gallery2.jpeg"

    },
    {
      "id": 3,
      "title": "Seasonal Specials",
      "blurb": "Don't miss our seasonal specials! From festive holiday dishes to refreshing summer treats, our menu features something new and exciting every season. Come taste the flavors of the season.",
      "img":"/gallery/gallery3.jpeg"

    },
    {
      "id": 4,
      "title": "Delicious Desserts",
      "blurb": "Indulge in our mouth-watering desserts! From classic cheesecakes to decadent chocolate creations, our dessert menu is crafted to satisfy your sweet tooth. Perfect for any occasion.",
      "img":"/gallery/gallery4.webp"

    },
    {
      "id": 5,
      "title": "Happy Hour Deals",
      "blurb": "Join us for Happy Hour and enjoy unbeatable deals on drinks and appetizers. Whether you're unwinding after work or catching up with friends, our Happy Hour is the place to be.",
      "img":"/gallery/drinks.jpeg"

    }
  ]

  useEffect(()=>{
        if(!carouselRef?.current){
          // carouselRef.current = setInterval(()=>changeCarousel(),5000);
        }
  },[])

  const changeCarousel=()=>{
    
    setCounter((counter)=>counter < items.length-1 ? counter+1 : 0);
    console.log("changeCarousel fired---")
  }


  
  return (
    <div onClick={changeCarousel} className={`h-[400px] relative flex`}>
      {/* <h2 className="absolute z-10">Counter:{counter}</h2> */}
      <div className="absolute w-full h-full z-50 p-4">
        <div className="relative h-full w-full border-4 border-violet-600 rounded-br-[65px] rounded-tl-[105px]"></div>
      </div>
      <div className="flex">
      <div className={`flex-1 relative overflow-hidden`}>
        <motion.div key={counter} initial={initialXScale} animate={animateXScale} transition={{duration:1}} className="w-full h-full bg-red-500 relative overflow-hidden rounded-tl-[105px]">
          <Image priority src={items[counter].img} fill sizes="50vw" alt="img"/>
        </motion.div>
      </div>
      <motion.div key={counter} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className={`flex-1 p-4 flex items-start justify-center flex-col`}>
        <h1 className="text-5xl font-bold">{items[counter].title}</h1>
        <h5 className="text-xl mt-5">{items[counter].blurb}</h5>
      </motion.div>
      </div>
      <div  className="absolute z-10 right-10 bottom-5 flex gap-2 items-center">
        <button onClick={()=>setCounter((counter)=>counter > items.length-1 ? counter-1 : 3)} className="rotate-[180deg]">
        <Arrow color="champagne" pseudo="white" scale="small"/>
        </button>
        <h1 className="relative z-50">****</h1>
        <button onClick={()=>setCounter((counter)=>counter < items.length-1 ? counter+1 : 0)}>
        <Arrow color="champagne" pseudo="white" scale="small"/>
        </button>
      </div>
      {/* <Arrow/> */}
    </div>
  )
}

export default GalleryRow