import React, { useState } from 'react'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import SidebarContent from './SidebarContent'
const SidebarTitle = ({showDrop,title,data}) => {
 const [show,setShow]=useState(true);
  return (
    <>
    <section className='font-dm'>
    {showDrop ?( <div 
    className={"flex justify-between items-center cursor-pointer"} onClick={()=> setShow(!show)}
    >
    <h6 className='text-[20px]'>{title}:</h6>
    {
    show ?(
    <GoTriangleUp className='text-xl'/>
     ) :(
    <GoTriangleDown className='text-xl'/>
    
   ) }
    </div>) :(
     <div>
    <h6  className='text-xl'>{title} </h6>
    </div>
    )}
     {
      show  &&
      data.map((data)=>
      <SidebarContent title={data.name} 
      color={data.hasOwnProperty("colorCode")  && data.colorCode} 
      showSubDrop={data.hasOwnProperty("subCategory")? true : false}>
            
     {
     data.hasOwnProperty("subCategory") && data.subCategory.map((subCategory)=>(
     <p>{subCategory.name}</p>
     ))
     }

      </SidebarContent>
      )
     }
    </section>
    </>
  )
}

export default SidebarTitle