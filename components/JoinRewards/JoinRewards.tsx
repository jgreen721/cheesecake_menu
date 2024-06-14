import React from 'react'
import Image from "next/image"
import { Button } from '@/mini-components'

const JoinCard = ()=>{

  return (
    <div className="relative z-10 text-center p-8">
<div className="absolute w-full h-full left-0 top-0 glass-overlay"></div>
<div className="absolute bg-white h-full w-full opacity-50 top-0 left-0 flex items-center justify-center">
  <div className="absolute border-champagne border-4 w-[95%] h-[90%]"></div>
</div>
      <div className="px-4 relative">
        <h1 className="text-6xl my-3">Join Our Rewards</h1>
        <h5 className="text-xl my-10">Our exciting new program is now available nationwide! With complimentary slices of cheesecake, access to reservations, suprise  delight rewards, and no points to track, why wouldn't you sign-up?</h5>
        <div className="flex items-center justify-center gap-2">
        
          <Button text="Join Now" color="text-white" background="bgChampagne"/>
          <Button text="Learn More" color="text-black" background="bgWhite"/>
      
        </div>
      </div>
    </div>
  )
}
const JoinRewards = () => {
  return (
    <div className="relative h-[750px] flex items-center justify-center">
      <Image src="/rewardsbg.webp" fill sizes="w-full" className="absolute" alt="img"/>
      <JoinCard/>
    </div>
  )
}

export default JoinRewards