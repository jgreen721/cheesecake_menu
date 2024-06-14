import React from 'react'
import Image from "next/image"

const MenuItem:React.FC<any> = ({item})=>{


  return (
    <div className={`flex ${item.start ? 'justify-start' : 'justify-end'}`}>
      <div className={`rounded-tr-[25px] flex items-center gap-4 w-full md:w-[50%] md:min-w-[500px] p-4 ${!item.start ? 'bg-dark-champagne text-white' : 'bg-white'} drop-shadow my-4`}>
        <div>
          <Image src={item.image} width={450} height={450} alt="img"/>
        </div>
        <div>
          <div>
            <h3 className="text-xl md:text-3xl font-bold mb-4">{item.name}</h3>
          </div>
          <div>
            <h5 className="text-sm md:text-xl">{item.description}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

const MenuSection = () => {
  const menuItems =[
    {id:1,name:"Chicken Taquitos",description:"Crispy Corn Tortillas Filled with Green Chicken, Green...",image:"https://olo-images-live.imgix.net/91/919add625c8d4613984f75ccd2e0b8ab.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=4f06462434ea669066de409c2daba89c",start:true},
    {id:2,name:"Stuffed Mushrooms",description:"Fontana and Parmesean Cheese, Garlic and Herbs in...",image:"https://olo-images-live.imgix.net/e4/e4276195c93c4a75b91f694ec6d227a4.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=ea979f1cb754a5482a4bc25ae792d018",start:false},
    {id:3,name:"Crispy Crab Bites",description:"Bite-sized little crab cakes serves with mustard sauce",image:"https://olo-images-live.imgix.net/06/0695ac68d3c446efb75721b581e0c553.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=d79fbee1d6aa63a4dfd80470dbbedeb1",start:true},
  ]
  return (
    <div className="p-8 bg-gray-200">
      {menuItems.map(menuItem=>(
        <MenuItem key={menuItem.id} item={menuItem}/>
      ))}
    </div>
  )
}






export default MenuSection