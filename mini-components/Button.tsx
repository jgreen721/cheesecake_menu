import React from 'react'

const Button:React.FC<any> = ({text,background,color}) => {
  const bgColors = {
    bgChampagne:"bg-dark-champagne",
    bgWhite:"bg-white"
  }

  const hoverColors = {
    bgChampagne:"bg-purple-700",
    bgWhite:"bg-gray-300"
  }
  return (
    <button className={`w-[200px] ${bgColors[background]} ${color} rounded-md p-2 py-5 uppercase tracking-[5px] font-semibold hover:${hoverColors[background]}`}>
      {text}
    </button>
  )
}

export default Button