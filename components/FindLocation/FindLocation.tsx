import React from 'react'
import Image from "next/image"

const FindLocation = () => {
  return (
    <div className="h-[400px] w-full relative flex items-center justify-center">
     <Image className="absolute" fill sizes="100vw" src="/findcheesecakeimg.webp" alt="img"/>
     <div className="text-white relative z-50 text-center">
       <div className="glass-overlay absolute w-full h-full"></div>
       {/* <div className="absolute w-full h-full text-center"> */}
          <h1 className="text-7xl z-10 relative p-5">Find a Restaraunt</h1>
            <button className="my-5 z-10 relative p-5 bg-white text-black uppercase font-semibold w-[200px] rounded-md">Search</button>
       {/* </div> */}
     </div>
    </div>
  )
}

export default FindLocation