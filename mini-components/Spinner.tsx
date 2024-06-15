"use client"

import React, { useEffect, useState } from 'react'


interface CustomCSSProperties extends React.CSSProperties {
    '--i'?: number;
    '--duration'?:string;
  }



const Letter = ({letter,id})=>{

    const customStyle: CustomCSSProperties = { '--i': id };


    return (
        <div style={customStyle} className="rotate-letter top-0 left-0 absolute w-full h-full text-center">
            <h1 className='text-2xl md:text-5xl'>{letter}</h1>
        </div>
    )
}

const Spinner = ({phrase,size,duration}) => {

    const customDuration: CustomCSSProperties = { '--duration': duration };


    const [sizes,setSizes] = useState({
        "small":"h-[350px] w-[350px]",
        "medium":"h-[550px] w-[550px]",
        "large":"h-[750px] w-[750px]",
        "full":"full",
    })

 

    useEffect(()=>{
        if(innerWidth < 750){
            setSizes({
                "small":"h-[150px] w-[350px]",
                "medium":"h-[250px] w-[550px]",
                "large":"h-[350px] w-[750px]",
                "full":"full",
            })
        }
    })
  return (
    <div style={customDuration} className={`spinner-parent absolute ${sizes[size]} border-red-600`}>
{phrase.split("").map((letter,idx)=>(
    <Letter key={idx} id={idx+1} letter={letter}/>
))}
    </div>
  )
}

export default Spinner