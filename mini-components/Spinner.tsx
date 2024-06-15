import React, { useEffect, useState } from 'react'

const Letter = ({letter,id})=>{

    return (
        <div style={{"--i":id}} className="rotate-letter top-0 left-0 absolute w-full h-full text-center">
            <h1 className='text-2xl md:text-5xl'>{letter}</h1>
        </div>
    )
}

const Spinner = ({phrase,size,duration}) => {

    const [sizes,setSizes] = useState({
        "small":"h-[350px] w-[350px]",
        "medium":"h-[550px] w-[550px]",
        "large":"h-[750px] w-[750px]",
        "full":"full",
    })

    let hVal = "h-[900px]"
    let wVal = "w-[900px]"

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
    <div style={{"--duration":duration}} className={`spinner-parent absolute ${sizes[size]} border-red-600`}>
{phrase.split("").map((letter,idx)=>(
    <Letter key={idx} id={idx+1} letter={letter}/>
))}
    </div>
  )
}

export default Spinner