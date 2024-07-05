import React, { useState } from 'react';
import {BiMinus,BiPlus} from "react-icons/bi"
const SidebarContent = ({showSubDrop,color,title,children}) => {
const [show,setShow]=useState (false);
  return (
 
  <section className='mt-9'> 

  {
  showSubDrop ?( <div className='flex items-center justify-between font-dm font-bold capitalize border-b 
   border-[#767676] text-[#767676] pb-5' 
   onClick={()=> setShow(!show)}>
    <h6>{title}</h6>
     {
     show ?<BiMinus/> :<BiPlus/>
     }
    </div>
  ) : ( <div className='flex items-center  font-dm font-bold capitalize border-b 
   border-[#767676] text-[#767676] pb-5' 
  >
 {
 color && (
  <span className='w-3 h-3 rounded-full bg-black mr-3' style={{backgroundColor:`${color}`}}></span>
 )
 }
    <h6>{title}</h6>
    
    </div>
  )}
  {
  show && children
  }
 
    </section>
   
  )
}

export default SidebarContent