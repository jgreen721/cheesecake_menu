import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { initialDrop,animateDrop } from '@/animations'
import { motion } from 'framer-motion'





const Header = ()=>{

  return (
    <div className="cheesecake-font font-bold text-yellow-300">
      <h1 className="ml-5 leading-5 translate-y-[10px] translate-x-[25px]">The</h1>
      <div className="flex items-center relative">
        <h1 className="text-5xl md:text-8xl">C</h1>
        <h1 className="text-xl md:text-3xl translate-x-[-25px]">heesecake</h1>
        <h1 className="text-5xl md:text-8xl translate-x-[-25px]">F</h1>
        <h1 className="text-xl translate-x-[-25px]">actory</h1>
      </div>
    </div>
  )
}


const Nav = () => {
  const links = [
    {id:1,name:"Browse Menu"},
    {id:2,name:"Locations"},
    {id:3,name:"Gift Cards"},
    {id:4,name:"Careers"},
    {id:5,name:"Reservations"},
    {id:6,name:"Rewards"},
  ]
  return (
    <motion.nav initial={initialDrop} animate={animateDrop} className="py-2 px-4 md:px-10 flex justify-between items-center p-4">
      <button className="cursor-pointer transition ease-in hover:scale-[1.1]">
        <RxHamburgerMenu className="text-3xl text-champagne" />
      </button>
      <ul className="none hidden lg:flex gap-5 color-black">
        {links.map(link=>(
          <li key={link.id}  className="cursor-pointer transition ease-in hover:scale-[1.1] hover:font-bold text-champagne">
            <h5>{link.name}</h5>
          </li>
        ))}
      </ul>
      <Header/>
      <button className="cursor-pointer transition ease-in hover:scale-[1.1]">
      <IoBagOutline className="text-3xl text-champagne" />
      </button>
    </motion.nav>
  )
}

export default Nav