import React from 'react'



const FooterCol:React.FC<any> = ({linkSection})=>{


  return (
    <div>
      <h2 className="text-xl">{linkSection.label}</h2>
      <ul>
        {linkSection.links.map(link=>(
          <li className="my-5" key={link.id}>{link.name}</li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  const footerLinks=[
    {id:1,label:"Restaraunt Information",links:[
      {id:1,name:"Cheesecake Rewards"},
      {id:2,name:"Questions"},
      {id:3,name:"About Us"},
      {id:4,name:"Careers"},
      {id:5,name:"Corporate Social Responsibility"},
      {id:6,name:"Ways We Give"},
      {id:7,name:"Press Room"},
    ]},
    {id:2,label:"Shop",links:[
      {id:1,name:"At Home Retail Products"},
      {id:2,name:"Gift Cards"},
      // {id:3,name:"About Us"},
      // {id:4,name:"Careers"},
      // {id:5,name:"Corporate Social Responsibility"},
      // {id:6,name:"Ways We Give"},
      // {id:7,name:"Press Room"},
    ]},
    {id:3,label:"Additional Information",links:[
      {id:1,name:"Investors"},
      {id:2,name:"Globals Development"},
      {id:3,name:"Employment Policy"},
      {id:4,name:"CCPA Compliance"},
    ]},
  ]

  const bottomLinks =[
    {id:1,name:"Terms of Use"},
    {id:2,name:"Privacy Policy"},
    {id:3,name:"Cookie Policy"},
    {id:4,name:"Web Accessibility"},
    {id:5,name:"Cheesecake Rewards Terms of Use"},
    {id:6,name:"Your Privacy Choices"},
  ]
  return (
    <div className="bg-gray-900 text-white pb-5 flex flex-col items-center justify-center px-5">
        <div className="text-start py-5">
          <h3 className="text-3xl ml-10">The</h3>
          <h1 className="text-5xl">CheesecakeFactory</h1>
        </div>
   <div className="flex-col flex lg:flex-row w-full">
      <div className="flex items-start justify-between w-full flex-1 py-10 px-2">
      {footerLinks.map(link=>(
        <FooterCol key={link.id} linkSection={link}/>
      ))}
    </div>
    <div className="flex-1"></div>
  </div>

      <ul className="grid grid-cols-3 gap-5 lg:flex lg:items-center lg:justify-between py-5 w-full">
        {bottomLinks.map((bottomLink,idx)=>(
          <li key={bottomLink.id} className={`${idx < bottomLinks.length-1 ? "lg:border-r-4 lg:border-white" : null} pr-10`}>{bottomLink.name}</li>
        ))}
      </ul>
      
      <p>&copy;2024 TCF Co. LLC. All Rights Reserved.</p>
    </div>
  )
}

export default Footer