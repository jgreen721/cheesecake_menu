import React from 'react'
import { Arrow } from '@/mini-components'

const CardsRow = () => {
  const cardsData=[
    {id:1,title:"Our Story",blurb:"It all started with a cheesecake recipe...",btnText:"Learn More",flipArrow:true},
    {id:2,title:"Reservations",blurb:"Cheesecake Rewards members can book table online.",btnText:"Find a Table",flipArrow:false},
  ]
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-4 w-full">
   {cardsData.map(card=>(
     <div className="text-center h-[300px] flex justify-center items-center flex-col w-[300px] md:w-[500px] shadow-md relative px-5" key={card.id}>
       <div className="absolute w-[90%] h-[90%] border-4 border-champagne opacity-25"></div>
       <h1 className="text-3xl md:text-5xl font-bold">{card.title}</h1>
       <h5 className="text-md my-4">{card.blurb}</h5>
       <button className="cursor-pointer p-3 transition ease-in hover:scale-[1.1]">
         <h5>{card.btnText}</h5>
         <div className={`${card.flipArrow && "rotate-[180deg]"} mt-10`}>
         <Arrow color="champagne" pseudo="white" scale={1}/>
         </div>
       </button>
      </div>
   ))}
    </div>
  )
}

export default CardsRow