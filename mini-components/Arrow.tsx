import React from 'react'
import "./mini.css"

const Arrow:React.FC<any> = ({color,pseudo,scale}) => {
  const bgColors:any = {
    white:"bg-white",
    champagne:"bg-dark-champagne"
  }

  const borderColors:any={
    white:"border-white",
    champagne:"border-champagne"
  }

  const pseudoColors:any ={
    champagne:`rgb(128, 0, 70)`,
    white:`white`,
  }


  const scaleEl={
    'small':'scale-[.5]',
    'normal':'scale-[1]',
 
  }
  return (
    <div className={`arrow ${bgColors[color]} ${scaleEl[scale]}`}>
        <div style={{"--i":pseudoColors[pseudo]}} className={`arrow-end arrow-end-top border-4 ${borderColors[color]}`}></div>
        <div style={{"--i":pseudoColors[pseudo]}} className={`arrow-end arrow-end-bottom border-4 ${borderColors[color]}`}></div>
    </div>
  )
}

export default Arrow